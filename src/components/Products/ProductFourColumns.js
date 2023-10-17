import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductItem from './ProductItem';
import ProductToolBars from './ProductToolBars';
import ProductActiveFilter from './ProductActiveFilter';

function ProductFourColumns({
    products,
    productFilter,
    productFilterPath,
    gridTabItems,
}) {
    const { filterData } = useSelector((state) => state.filter);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setitemPerPage] = useState(9);

    const [pageNumberLimit, setPageNumberLimit] = useState(9);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(9);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const filteredProduct = products.filter((singleProduct) => {
        const filterGroupResult = {};

        filterData.forEach((singleFilterData) => {
            if (singleFilterData.key === 'priceFilter') {
                filterGroupResult[singleFilterData.group] =
                    singleFilterData.data.fromPrice <= singleProduct.price &&
                    singleProduct.price <= singleFilterData.data.toPrice;
            } else if (!filterGroupResult[singleFilterData.group]) {
                filterGroupResult[singleFilterData.group] =
                    singleProduct[singleFilterData.group] ===
                    singleFilterData.key;
            }
        });

        return !Object.values(filterGroupResult).includes(false);
    });

    const pages = [];
    for (let i = 1; i <= Math.ceil(filteredProduct.length / itemPerPage); i++) {
        pages.push(i);
    }

    const indexofLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexofLastItem - itemPerPage;
    const currentItems = filteredProduct.slice(
        indexOfFirstItem,
        indexofLastItem
    );

    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li className="px-[5px]" key={number}>
                    <span
                        className={`${
                            currentPage === number ? 'active' : ''
                        } bg-[#f5f5f5] cursor-pointer flex items-center px-[13px] h-[34px] text-[12px] font-medium`}
                        id={number}
                        onClick={handleClick}
                    >
                        {number}
                    </span>
                </li>
            );
        }
        return null;
    });

    const handleNextbtn = () => {
        setCurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };
    const handlePrevbtn = () => {
        setCurrentPage(currentPage - 1);

        if ((currentPage - 1) % maxPageNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextbtn}>&hellip;</li>;
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevbtn}>&hellip;</li>;
    }

    // Tab
    const [tabState, setTabState] = useState(2);
    const productTab = (index) => {
        setTabState(index);
    };

    return (
        <div className="product border-b border-[#ededed] xl:py-[120px] lg:py-[100px] md:py-[80px] py-[50px]">
            <div className="container">
                <div className="grid grid-cols-12 lg:gap-x-[25px]">
                    <div className="col-span-12">
                        <ProductActiveFilter />
                        <ProductToolBars
                            totalProductNumber={filteredProduct.length}
                            startItemNumber={
                                (currentPage - 1) * itemPerPage + 1
                            }
                            endItemNumber={
                                filteredProduct.length >
                                currentPage * itemPerPage
                                    ? currentPage * itemPerPage
                                    : filteredProduct.length
                            }
                            productTab={productTab}
                            tabState={tabState}
                            setTabState={setTabState}
                            gridTabItems={gridTabItems}
                        />
                        <div
                            className={
                                tabState === 1
                                    ? 'grid-content-03 tab-style-common active'
                                    : 'grid-content-03 tab-style-common'
                            }
                        >
                            <div className="grid lg:grid-cols-3 lm:grid-cols-2 grid-cols-1 lm:gap-x-[25px] gap-y-[40px] ">
                                {currentItems &&
                                    currentItems.map((product) => (
                                        <ProductItem
                                            product={product}
                                            productFilter={productFilter}
                                            productFilterPath={
                                                productFilterPath
                                            }
                                            key={product.id}
                                        />
                                    ))}
                            </div>
                        </div>
                        <div
                            className={
                                tabState === 2
                                    ? 'grid-content-04 tab-style-common active'
                                    : 'grid-content-04 tab-style-common'
                            }
                        >
                            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-x-[25px] gap-y-[40px]">
                                {currentItems &&
                                    currentItems.map((product) => (
                                        <ProductItem
                                            product={product}
                                            productFilter={productFilter}
                                            productFilterPath={
                                                productFilterPath
                                            }
                                            key={product.id}
                                        />
                                    ))}
                            </div>
                        </div>
                        <div
                            className={
                                tabState === 3
                                    ? 'grid-content-05 tab-style-common active'
                                    : 'grid-content-05 tab-style-common'
                            }
                        >
                            <div className="grid lg:grid-cols-5 md:grid-cols-4 lm:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-x-[25px] gap-y-[40px]">
                                {currentItems &&
                                    currentItems.map((product) => (
                                        <ProductItem
                                            product={product}
                                            productFilter={productFilter}
                                            productFilterPath={
                                                productFilterPath
                                            }
                                            key={product.id}
                                        />
                                    ))}
                            </div>
                        </div>
                        <ul className="pagination flex justify-center pt-[40px]">
                            <li className="px-[5px]">
                                <button
                                    className={`${
                                        currentPage === pages[0] ? 'hidden' : ''
                                    } bg-[#f5f5f5] cursor-pointer flex items-center text-[14px] px-[13px] h-[34px]`}
                                    type="button"
                                    onClick={handlePrevbtn}
                                    disabled={currentPage === pages[0]}
                                >
                                    Предыдущая страница
                                </button>
                            </li>
                            {pageDecrementBtn}
                            {renderPageNumbers}
                            {pageIncrementBtn}
                            <li className="px-[5px]">
                                <button
                                    className={`${
                                        currentPage === pages[pages.length - 1]
                                            ? 'hidden'
                                            : ''
                                    } bg-[#f5f5f5] cursor-pointer flex items-center text-[14px] px-[13px] h-[34px]`}
                                    type="button"
                                    onClick={handleNextbtn}
                                    disabled={
                                        currentPage === pages[pages.length - 1]
                                    }
                                >
                                    Следующая
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

ProductFourColumns.propTypes = {
    products: PropTypes.instanceOf(Object).isRequired,
    productFilter: PropTypes.instanceOf(Object).isRequired,
    productFilterPath: PropTypes.string.isRequired,
    gridTabItems: PropTypes.instanceOf(Object).isRequired,
};

export default ProductFourColumns;
