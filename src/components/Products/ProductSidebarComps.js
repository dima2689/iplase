import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from '../../store/product-filter/filter-slice';

const textHover = `transition-all hover:text-primary`;
const swatchColor = `w-[18px] h-[18px] rounded-full inline-block cursor-pointer opacity-80`;

function ProductSidebarComps({ productFilter }) {
    const dispatch = useDispatch();

    const [fromPrice, setFromPrice] = useState('');
    const [toPrice, setToPrice] = useState('');

    const fromPriceRef = useRef();
    const toPriceRef = useRef();

    const filter = useSelector((state) => state.filter);

    const filterChangeHandler = (isAdd, data) => {
        if (isAdd) {
            dispatch(filterActions.addFilter(data));
        } else {
            dispatch(filterActions.removeFilter(data));
        }
    };

    useEffect(() => {
        // price validation
        if (fromPrice >= 0) {
            // there is no issue
            fromPriceRef.current.setCustomValidity('');
        } else {
            // price is lower then zero.
            fromPriceRef.current.setCustomValidity(
                'Цена должна быть больше 0.'
            );
        }
    }, [fromPrice, fromPriceRef]);

    useEffect(() => {
        // price validation
        if (toPrice >= 0) {
            // there is no issue
            toPriceRef.current.setCustomValidity('');
        } else {
            // price is lower then zero.
            toPriceRef.current.setCustomValidity('Цена должна быть больше 0.');
        }
    }, [toPrice, toPriceRef]);

    const priceFilterSubmitHandler = (e) => {
        e.preventDefault();

        filterChangeHandler(true, {
            title: `$${fromPrice} - $${toPrice}`,
            key: 'priceFilter',
            group: 'priceFilter',
            data: {
                fromPrice,
                toPrice,
            },
        });
    };

    return (
        <div className="product-sidebar">
            <div className="product-sidebar-widget border-b border-[#dddddd] pb-[30px] mb-[25px]">
                <h2 className="widget-title text-[18px]">Категории</h2>
                <div className="flex flex-col items-start pt-[20px]">
                    {productFilter[0]?.categoryList?.map(
                        (singleCategoryList) => (
                            <button
                                type="button"
                                className={`${textHover} capitalize mb-[10px] last:mb-0`}
                                key={singleCategoryList.id}
                                onClick={() =>
                                    filterChangeHandler(true, {
                                        title: singleCategoryList.categoryListTitle,
                                        key: singleCategoryList.categoryListTitle,
                                        group: 'category',
                                    })
                                }
                            >
                                {singleCategoryList.categoryListTitle}
                            </button>
                        )
                    )}
                </div>
            </div>
            <div className="product-sidebar-widget border-b border-[#dddddd] pb-[30px] mb-[25px]">
                <h2 className="widget-title text-[18px]">Наличие</h2>
                <ul className="flex flex-col pt-[20px]">
                    {productFilter[0]?.availabilityList?.map((item) => (
                        <li className="mb-[10px]" key={item.id}>
                            <label
                                htmlFor={item.filterLabel}
                                className={`${textHover}`}
                            >
                                <input
                                    className="mr-[10px]"
                                    type="checkbox"
                                    id={item.filterLabel}
                                    checked={
                                        !!filter.filterData.find(
                                            (data) => data.key === item.checked
                                        )
                                    }
                                    onChange={(data) =>
                                        filterChangeHandler(
                                            data.target.checked,
                                            {
                                                title: item.name,
                                                key: item.key,
                                                group: item.group,
                                            }
                                        )
                                    }
                                />
                                {item.title}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="product-sidebar-widget border-b border-[#dddddd] pb-[30px] mb-[25px]">
                <h2 className="widget-title text-[18px]">Размер</h2>
                <ul className="flex flex-col pt-[20px]">
                    {productFilter[0]?.productSizeList?.map((item) => (
                        <li className="mb-[10px]" key={item.id}>
                            <label
                                htmlFor={item.filterLabel}
                                className={`${textHover}`}
                            >
                                <input
                                    className="mr-[10px]"
                                    type="checkbox"
                                    id={item.filterLabel}
                                    checked={
                                        !!filter.filterData.find(
                                            (data) => data.key === item.checked
                                        )
                                    }
                                    onChange={(data) =>
                                        filterChangeHandler(
                                            data.target.checked,
                                            {
                                                title: item.name,
                                                key: item.key,
                                                group: item.group,
                                            }
                                        )
                                    }
                                />
                                {item.title}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="product-sidebar-widge border-b border-[#dddddd] pb-[30px] mb-[25px]">
                <h2 className="widget-title text-[18px]">Цена</h2>
                <form
                    className="price-filter-form pt-[20px]"
                    onSubmit={priceFilterSubmitHandler}
                >
                    <div className="price-form-field mb-[15px]">
                        <label className="flex mb-[5px]" htmlFor="priceForm">
                            От
                        </label>
                        <div className="flex items-center border border-[#dddddd] px-[10px] h-[45px]">
                            <span className="text-[#777777] pr-[5px]">р.</span>
                            <input
                                required
                                ref={fromPriceRef}
                                id="priceForm"
                                value={fromPrice}
                                onChange={(e) => setFromPrice(e.target.value)}
                                type="number"
                                className="w-full focus:outline-none"
                                placeholder="0"
                                min="0"
                                max="90"
                            />
                        </div>
                    </div>
                    <div className="price-form-field">
                        <label className="flex mb-[5px]" htmlFor="priceTo">
                            До
                        </label>
                        <div className="flex items-center border border-[#dddddd] px-[10px] h-[45px]">
                            <span className="text-[#777777] pr-[5px]">р.</span>
                            <input
                                required
                                ref={toPriceRef}
                                id="priceTo"
                                value={toPrice}
                                onChange={(e) => setToPrice(e.target.value)}
                                type="number"
                                className="w-full focus:outline-none"
                                placeholder="1000"
                                min="0"
                                max="150000"
                            />
                        </div>
                    </div>
                    <div className="price-btn-wrap pt-[20px]">
                        <button
                            type="submit"
                            className="flex items-center bg-black text-white px-[25px] py-[8px] h-[40px] transition-all hover:bg-primary"
                        >
                            Фильтр
                        </button>
                    </div>
                </form>
            </div>
            <div className="product-sidebar-widget border-b border-[#dddddd] pb-[30px] mb-[25px]">
                <h2 className="widget-title text-[18px]">Цвет</h2>
                <ul className="flex flex-wrap pt-[20px]">
                    {productFilter[0]?.colorList?.map((singleColorList) => (
                        <li
                            className="mr-[20px] mb-[6px]"
                            key={singleColorList.id}
                            onClick={() =>
                                filterChangeHandler(true, {
                                    title: singleColorList.colorOption,
                                    key: singleColorList.colorOption,
                                    group: 'color',
                                })
                            }
                        >
                            <span
                                className={`${swatchColor} ${singleColorList.colorOption}`}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="product-sidebar-widget">
                <h2 className="widget-title text-[18px]">Разделы</h2>
                <div className="flex flex-wrap pt-[20px]">
                    {productFilter[0]?.tagList?.map((singleTagList) => (
                        <button
                            type="button"
                            className={`${textHover} ${singleTagList.marginRight} capitalize after:content-[","] last:after:content-none`}
                            key={singleTagList.id}
                            onClick={() =>
                                filterChangeHandler(true, {
                                    title: singleTagList.tagTitle,
                                    key: singleTagList.tagTitle,
                                    group: 'tag',
                                })
                            }
                        >
                            <span className={`${singleTagList.tagTitle}`}>
                                {singleTagList.tagTitle}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

ProductSidebarComps.propTypes = {
    productFilter: PropTypes.instanceOf(Object).isRequired,
};

export default ProductSidebarComps;
