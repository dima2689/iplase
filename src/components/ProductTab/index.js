import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductItem from '../Products/ProductItem';

function ProductTab({
    products: initialProduct,
    containerCName,
    productTab,
    tabTitle,
    productFilter,
    productFilterPath,
}) {
    const [products, setProduct] = useState(initialProduct);
    const [currentFilter, setCurrentFilter] = useState('all-products');

    const onFilterHandler = (e) => {
        e.preventDefault();
        const { target } = e;
        const filterValue = target.dataset.filter;
        setCurrentFilter(filterValue);
        const filteredProduct = initialProduct.filter(
            (pro) => pro.category === filterValue
        );
        filterValue === 'all-products'
            ? setProduct(initialProduct)
            : setProduct(filteredProduct);
    };

    const [noOfElement, setNoOfElement] = useState(4);
    const productSlice = products.slice(0, noOfElement);

    const loadMore = () => {
        setNoOfElement(noOfElement + noOfElement);
    };

    return (
        <div className="product-tab lg:pt-[70px] md:pt-[50px] pt-[30px]">
            <div className={containerCName}>
                <div className="grid grid-cols-12 items-center">
                    <div className="md:col-span-4 col-span-12">
                        <h2 className="md:text-start text-center text-[30px] max-lm:mb-[20px]">
                            {tabTitle}
                        </h2>
                    </div>
                    <div className="md:col-span-8 col-span-12">
                        <div className="tab-menu max-lm:text-center text-end">
                            {productTab[0]?.tabList?.map((item) => (
                                <button
                                    key={item.id}
                                    className={`${
                                        currentFilter === item.filterValue
                                            ? 'active'
                                            : ''
                                    }`}
                                    type="button"
                                    onClick={onFilterHandler}
                                    data-filter={item.filterValue}
                                >
                                    {item.title}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-[25px] md:pt-[80px] pt-[50px]">
                    {productSlice.map((product) => (
                        <div
                            className="lg:col-span-3 md:col-span-4 lm:col-span-6 col-span-12"
                            key={product.slug}
                        >
                            <ProductItem
                                product={product}
                                productFilter={productFilter}
                                productFilterPath={productFilterPath}
                            />
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 text-center">
                    {noOfElement < products.length && (
                        <div className="pt-[80px]">
                            <button
                                className="bg-black text-white transition-all hover:bg-primary px-[40px] h-[40px] leading-[40px]"
                                type="button"
                                onClick={loadMore}
                            >
                                Загрузить еще
                            </button>
                        </div>
                    )}
                    {noOfElement > products.length && (
                        <div className="pt-[85px]">
                            <span>Загружены все товары!</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

ProductTab.propTypes = {
    products: PropTypes.instanceOf(Object).isRequired,
    containerCName: PropTypes.string.isRequired,
    productTab: PropTypes.instanceOf(Object).isRequired,
    tabTitle: PropTypes.string.isRequired,
    productFilter: PropTypes.instanceOf(Object).isRequired,
    productFilterPath: PropTypes.string.isRequired,
};

export default ProductTab;
