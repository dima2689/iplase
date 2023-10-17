import { IoCloseOutline } from 'react-icons/io5';

import { useDispatch, useSelector } from 'react-redux';

import { filterActions } from '../../store/product-filter/filter-slice';

function ProductActiveFilter() {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filter);
    return (
        <ul className="active-filter-list flex flex-wrap items-center pb-[20px] -mb-[10px]">
            {filter.filterData.map((item) => (
                <li className="mr-[10px] mb-[10px]" key={item.key}>
                    <button
                        type="button"
                        className="bg-[#e8e8e8] flex items-center text-[14px] px-[10px]  rounded-[20px] transition-all hover:bg-black hover:text-white"
                    >
                        <span className="mr-[5px]">{item.title}</span>
                        <IoCloseOutline
                            onClick={() =>
                                dispatch(
                                    filterActions.removeFilter({
                                        key: item.key,
                                    })
                                )
                            }
                        />
                    </button>
                </li>
            ))}

            {filter.filterData.length !== 0 && (
                <li className="mb-[10px]">
                    <button
                        onClick={() => dispatch(filterActions.clearAll())}
                        type="button"
                        className="clear-btn text-[14px] transition-all hover:text-primary"
                    >
                        Clear All
                    </button>
                </li>
            )}
        </ul>
    );
}

export default ProductActiveFilter;
