import { GoogleSpreadsheet } from 'google-spreadsheet';

const REQUESTS = {
    GET_BRANDS: 'GET_BRANDS',
    GET_MODELS: 'GET_MODELS',
    GET_PROBLEM_LIST: 'GET_PROBLEM_LIST',
    GET_REPAIR_PRICE: 'GET_REPAIR_PRICE',
};

const PREPAIR_PROBLEMS_PRICES = {
    'Разбит экран': {
        prefix: 'Дисплей для',
        pricePlusPercent: 5,
        workPriceMin: 900,
        workPriceMax: 1500,
        args: ['дисплей'],
        argsOr: ['тачскрин', 'рамк'],
    },
    Батарея: {
        prefix: 'Аккумулятор для',
        pricePlusPercent: 10,
        workPriceMin: 600,
        workPriceMax: 1500,
        args: ['акб'],
        argsOr: [],
    },
    'Кнопка вкл / выкл': {
        pricePlusPercent: 50,
        workPriceMin: 800,
        workPriceMax: 1200,
        args: ['кнопк', 'вкл'],
        argsOr: [],
    },
    'Кнопка Home': {
        prefix: 'Шлейф для',
        pricePlusPercent: 50,
        workPriceMin: 700,
        workPriceMax: 1400,
        args: ['кнопк', 'home'],
        argsOr: [],
    },
    Камера: {
        prefix: 'Камера для',
        pricePlusPercent: 30,
        workPriceMin: 700,
        workPriceMax: 1200,
        args: ['камера'],
        argsOr: [],
    },
    Микрофон: {
        prefix: 'Шлейф для',
        pricePlusPercent: 90,
        workPriceMin: 800,
        workPriceMax: 1200,
        args: ['микрофон'],
        argsOr: [],
    },
    'Динамик разговорный': {
        prefix: 'Динамик для',
        pricePlusPercent: 80,
        workPriceMin: 800,
        workPriceMax: 1500,
        args: ['динамик'],
        argsOr: [],
    },
    'Динамик полифонический': {
        prefix: 'Звонок для',
        pricePlusPercent: 80,
        workPriceMin: 800,
        workPriceMax: 1200,
        args: ['динамик'],
        argsOr: [],
    },
    'Разбито стекло': {
        prefix: 'Тачскрин для',
        pricePlusPercent: 5,
        workPriceMin: 1000,
        workPriceMax: 1500,
        args: [],
        argsOr: ['тачскрин', 'стекло'],
    },
    Корпус: {
        prefix: 'Корпус для',
        pricePlusPercent: 20,
        workPriceMin: 800,
        workPriceMax: 1400,
        args: [],
        argsOr: ['корпус', 'задн', 'крышка'],
    },

    'Разъем зарядки': {
        prefix: 'Корпус для',
        pricePlusPercent: 50,
        workPriceMin: 700,
        workPriceMax: 140,
        args: ['разъем', 'заряд'],
        argsOr: [],
    },
};

const REPAIR_PROBLEMS = Object.keys(PREPAIR_PROBLEMS_PRICES);

const googleToken = {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
};

const googleSheetData = {
    spreadSheetId: process.env.GOOGLE_SPREADSHEET_ID,
    sheetId: process.env.GOOGLE_SHEET_ID,
    sheetPricesId: process.env.GOOGLE_SHEET_PRICES_ID,
};

export default async function handler(req, res) {
    const responseData = { data: {} };
    if (req.body) {
        const { type, payload } = req.body;

        if (type === REQUESTS.GET_BRANDS) {
            // getBrands(data, res);
        } else if (type === REQUESTS.GET_MODELS) {
            // getModels(data, res);
        } else if (type === REQUESTS.GET_PROBLEM_LIST) {
            responseData.data = REPAIR_PROBLEMS;
        } else if (type === REQUESTS.GET_REPAIR_PRICE) {
            try {
                const { brand, model, problem } = payload;
                const [workPrice, spareParts] = await getRepairPriceNEW(
                    brand,
                    model,
                    problem
                );

                responseData.data.workPrice = workPrice;
                responseData.data.spareParts = spareParts;

                res.status(200).json({
                    status: 'ok',
                    ...responseData,
                });
            } catch {
                responseData.error = 'Необходимы поля brand, model, problem';
                res.status(400).json({
                    ...responseData,
                });
            }
        }
    } else {
        res.status(200).json({
            status: 'ok',
            ...responseData,
        });
    }
}

const getRepairPriceNEW = async (brand, model, problem) => {
    const partsPrices = await getAllParts();
    const searchKeys = getSearchKeys(brand, model, problem);
    const spareParts = filterProblemRequireParts(partsPrices, searchKeys);
    const workPrice = getWorkPrice(spareParts, problem);

    return [workPrice, spareParts];
};

const filterProblemRequireParts = (partsPrices, searchKeys) => {
    const filteredParts = new Set();
    partsPrices.forEach((part) => {
        const partTitle = part.title.toLowerCase();
        if (
            searchKeys
                .map((key) => partTitle.includes(key))
                .every((k) => k === true)
        ) {
            filteredParts.add(part);
        }
    });

    return [...filteredParts];
};

/*
@return  {
            "prefix": "Аккумулятор для",
            "pricePlusPercent": 10,
            "workPriceMin": 600,
            "workPriceMax": 1500,
            "args": ["акб"],
            "argsOr": []
        }
*/
const getWorkPrice = (spareParts, problem) => {
    const problemPricesData = PREPAIR_PROBLEMS_PRICES[problem];

    // TODO not correct, need to use anly median values
    const midSparePartsPrice =
        spareParts.reduce((acc, partData) => acc + Number(partData.retail), 0) /
        spareParts.length;

    const { workPriceMin, workPriceMax } = problemPricesData;
    let workPrice = workPriceMin;
    if (midSparePartsPrice > 10000) {
        workPrice = workPriceMax;
    } else if (midSparePartsPrice > 5000) {
        workPrice = (workPriceMax + workPriceMin) / 1.5;
    } else if (midSparePartsPrice > 3000) {
        workPrice = (workPriceMax + workPriceMin) / 1.8;
    } else if (midSparePartsPrice > 2000) {
        workPrice = (workPriceMax + workPriceMin) / 1.9;
    } else if (midSparePartsPrice > 1500) {
        workPrice = (workPriceMax + workPriceMin) / 2;
    } else if (midSparePartsPrice > 1200) {
        workPrice = (workPriceMax + workPriceMin) / 2.1;
    }
    workPrice = Math.round(workPrice / 100) * 100;

    return workPrice;
};

const getAllParts = async () => {
    // @return Array{}

    const doc = new GoogleSpreadsheet(googleSheetData.spreadSheetId);
    await doc.useServiceAccountAuth(googleToken);
    await doc.loadInfo();
    const sheet = doc.sheetsById[googleSheetData.sheetId];
    const rows = await sheet.getRows();

    const result = rows.map((row) => {
        const title = row['Наименование'];
        const id = row['Код'];
        const retail = row['Розница'];
        const opt = row['Опт'];
        const shop = row['Магазин'];
        const link = row['Ссылка'];
        const available = row['Наличие'];

        const obj = {
            title,
            id,
            retail,
            opt,
            shop,
            link,
            available,
        };
        return obj;
    });
    return result;
};

const getSearchKeys = (phoneBrand, phoneModel, problem) => {
    // get list os search keys need to be presented
    // in the spare part title
    const searchKeys = new Set();

    const _phoneBrand = phoneBrand.toLowerCase();
    if (!_phoneBrand.includes('apple')) {
        searchKeys.add(_phoneBrand);
    }

    let _phoneModel = String(phoneModel).toLowerCase();
    _phoneModel = _phoneModel.replace('"', '').replace("'", '');
    if (_phoneModel.length === 1) {
        _phoneModel = ` ${_phoneModel}`;
    }
    searchKeys.add(_phoneModel);

    const problemData = PREPAIR_PROBLEMS_PRICES[problem];
    if (problemData.args) {
        searchKeys.add(...problemData.args);
    }
    return [...searchKeys];
};
