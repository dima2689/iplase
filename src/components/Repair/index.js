import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoChevronDownSharp } from 'react-icons/io5';
import PhoneProblems from './PhoneProblems';
import PhoneModels from './PhoneModels';

function Repair({ faqItems, title, desc }) {
    const [selected, setSelected] = useState({});
    const toggle = (items) => {
        if (selected === items) {
            setSelected({});
            return;
        }

        setSelected(items);
    };

    const [showProblems, setShowProblems] = useState(false);
    const [problemData, setProblemData] = useState({
        brand: '',
        phoneModel: null,
        problem: '',
    });
    const [workPrice, setWorkPrice] = useState(800);
    const [spareParts, setSpareParts] = useState([]);
    const [showRepairLoader, setShowRepairLoader] = useState(false);

    const onRepairPriceRequest = async (problem) => {
        setShowRepairLoader(true);
        const requestData = {
            type: 'GET_REPAIR_PRICE',
            payload: {
                brand: problemData.brand,
                model: problemData.phoneModel,
                problem,
            },
        };
        const responseData = await fetch('/api/repair', {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        });
        if (responseData.status === 200) {
            const data = await responseData.json();
            setWorkPrice(data.data.workPrice);
            setSpareParts(data.data.spareParts);
            setShowRepairLoader(false);
        } else {
            setShowRepairLoader(false);
        }
    };

    return (
        <div className="faq text-center border-b border-[#ededed] xl:py-[30px] lg:py-[20px] md:py-[10px] py-[10px]">
            <div className="container max-w-4xl">
                <h2 className="mb-[10px]">{title}</h2>
                <p className="mb-[45px]">{desc}</p>
                <div className="accorddion p-[15px] -m-[15px]">
                    {faqItems?.map((items) => (
                        <div
                            className={`${
                                selected === items ? 'item active' : 'item'
                            } bg-white shadow-[0_18px_40px_rgba(51,_51,_51,_0.1)] mb-[15px] last:mb-0`}
                            key={items.id}
                        >
                            <div
                                className="title flex items-center justify-between cursor-pointer"
                                onClick={() => toggle(items)}
                            >
                                <h2 className="sm:text-[18px] text-[16px] leading-[22px]">
                                    {items.question}
                                </h2>

                                <span className="navigation">
                                    <IoChevronDownSharp />
                                </span>
                            </div>
                            <div className="content p-[10px]">
                                {items.answer}
                            </div>
                            <div className="content p-[10px]">
                                {items?.models && (
                                    <PhoneModels
                                        brand={items?.brand}
                                        phoneModels={items?.models}
                                        checkedModel={problemData.phoneModel}
                                        onClick={(brand, model) => {
                                            setProblemData({
                                                ...problemData,
                                                brand,
                                                phoneModel: model,
                                                problem: null,
                                            });
                                            setShowProblems(true);
                                            setSpareParts([]);
                                        }}
                                    />
                                )}
                            </div>
                            <div className="content p-[10px]">
                                {showProblems && items?.problems && (
                                    <PhoneProblems
                                        problemItems={items?.problems}
                                        checkedProblem={problemData.problem}
                                        onClick={(problem) => {
                                            setSpareParts([]);
                                            setProblemData({
                                                ...problemData,
                                                problem,
                                            });
                                            onRepairPriceRequest(problem);
                                        }}
                                    />
                                )}
                            </div>
                            {/* Calculated repair prices */}
                            {showRepairLoader &&
                                items.brand === problemData.brand && (
                                    <div>
                                        Ищем запчасти по данному запросу:
                                        <p>
                                            {problemData.brand}{' '}
                                            {problemData.phoneModel}{' '}
                                            {problemData.problem}
                                        </p>
                                        <p>
                                            Поиск по всем базам может занять
                                            около 5 - 15 сек...
                                        </p>
                                    </div>
                                )}
                            {spareParts.length > 0 &&
                                items.brand === problemData.brand &&
                                problemData.brand !== '' && (
                                    <div className="content p-[10px]">
                                        Стоимость работы <b>{workPrice}</b> руб.
                                        <p>Найденные запчасти на выбор:</p>
                                        {spareParts.map((part) => (
                                            <div
                                                key={part.id}
                                                className="content pl-[10px]"
                                            >
                                                - {part.title} - {part.retail}{' '}
                                                руб.
                                            </div>
                                        ))}
                                    </div>
                                )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

Repair.propTypes = {
    faqItems: PropTypes.instanceOf(Object).isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
};

export default Repair;
