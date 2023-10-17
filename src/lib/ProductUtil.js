import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { geAllPhones } from '../utils/priceFetcher';
import { compareDates } from '../utils/dates';

export function getItemsFiles(type) {
    const itemsDirectory = path.join(process.cwd(), 'src/data', type);
    return fs.readdirSync(itemsDirectory);
}

export function getItemData(itemIdentifier, type) {
    const itemsDirectory = path.join(`${process.cwd()}/src/data/${type}`);
    const itemSlug = itemIdentifier.replace(/\.md$/, ''); // removes the file extension
    const filePath = path.join(itemsDirectory, `${itemSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const itemData = {
        slug: itemSlug,
        ...data,
        content,
    };

    return itemData;
}

async function mergeFetchedProducts(localProducts, type) {
    if (type === 'products') {
        const fetchedData = await getAllPhones.data();
        const fetchedProducts = fetchedData;

        const phonesDict = {};
        fetchedProducts.forEach((phone) => {
            phonesDict[phone.id] = phone;
        });

        localProducts.forEach((pr) => {
            const fetchedPr = phonesDict[pr.id];
            if (fetchedPr) {
                pr.price = fetchedPr.price;
            }
        });
        return localProducts;
    }
    return localProducts;
}

export async function getAllItems(type) {
    const itemFiles = getItemsFiles(type);

    let allItems = itemFiles.map((itemFile) => getItemData(itemFile, type));
    allItems = await mergeFetchedProducts(allItems, 'products');

    const sortedItems = allItems.sort((itemA, itemB) =>
        compareDates(itemA.date, itemB.date)
    );

    return sortedItems;
}
export function getFeaturedItems(items) {
    return items.filter((item) => item.isFeatured);
}
