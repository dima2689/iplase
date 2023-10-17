import Link from 'next/link';
import PropTypes from 'prop-types';

function Breadcrumb({ product, itemPath, item }) {
    return (
        <div className="breadcrumb bg-[#f4f5f7] py-[25px]">
            <div className="container">
                <div className="grid grid-cols-12 items-center">
                    <div className="lm:col-span-6 col-span-12">
                        <h1 className="text-[24px] lm:text-start text-center">
                            {product?.title}
                        </h1>
                    </div>
                    <div className="lm:col-span-6 col-span-12">
                        <ul className="breadcrumb-list flex lm:justify-end justify-center uppercase text-[14px]">
                            <li className='relative after:pr-[15px] after:ml-[15px] after:content-["/"]'>
                                <Link href={itemPath}>
                                    <a>{item}</a>
                                </Link>
                            </li>
                            <li>
                                <span className="text-[#777777] font-medium">
                                    {product?.title}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

Breadcrumb.propTypes = {
    product: PropTypes.instanceOf(Object).isRequired,
    itemPath: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
};

export default Breadcrumb;
