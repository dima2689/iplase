import Link from 'next/link';
import PropTypes from 'prop-types';
import { IoArrowForwardOutline } from 'react-icons/io5';

function NewArrivalTwo({ newArrivalTwo, products, excerpt, btnText }) {
    return (
        <div className="newarrival-area md:pt-[80px] pt-[50px] sm:pb-[60px]">
            <div className="container-fluid md:px-[100px] px-[15px]">
                <div className="lg:columns-2 columns-1 mx-auto lg:gap-x-[25px] lg:space-y-[100px] md:space-y-[80px] space-y-[50px]">
                    {newArrivalTwo[0]?.newArrivalItemsTwo?.map(
                        (newArrivalItemTwo) => (
                            <div
                                className={`${newArrivalItemTwo.CName} break-inside-avoid`}
                                key={newArrivalItemTwo.id}
                            >
                                <div className="product-img overflow-hidden group">
                                    <Link
                                        href={`/products/${
                                            products.find(
                                                (item) =>
                                                    item.id ===
                                                    newArrivalItemTwo.id
                                            )?.slug
                                        }`}
                                    >
                                        <a>
                                            <img
                                                className="transition-all duration-[400ms] group-hover:scale-[1.02]"
                                                src={`/images/products/${
                                                    products.find(
                                                        (item) =>
                                                            item.id ===
                                                            newArrivalItemTwo.id
                                                    )?.slug
                                                }/${
                                                    products.find(
                                                        (item) =>
                                                            item.id ===
                                                            newArrivalItemTwo.id
                                                    )?.homeCollectionImg
                                                }`}
                                                alt={
                                                    products.find(
                                                        (item) =>
                                                            item.id ===
                                                            newArrivalItemTwo.id
                                                    )?.altImage
                                                }
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className="product-content relative sm:ml-[80px] ml-[15px] z-[1]">
                                    <h3 className="mb-[30px]">
                                        <Link
                                            href={`/products/${
                                                products.find(
                                                    (item) =>
                                                        item.id ===
                                                        newArrivalItemTwo.id
                                                )?.slug
                                            }`}
                                        >
                                            <a className="transition-all hover:text-primary md:text-[36px] text-[30px]">
                                                {
                                                    products.find(
                                                        (item) =>
                                                            item.id ===
                                                            newArrivalItemTwo.id
                                                    )?.title
                                                }
                                            </a>
                                        </Link>
                                    </h3>
                                    <p className="lg:max-w-[380px]">
                                        {excerpt}
                                    </p>
                                    <div className="btn-wrap mt-[60px]">
                                        <Link
                                            href={`/products/${
                                                products.find(
                                                    (item) =>
                                                        item.id ===
                                                        newArrivalItemTwo.id
                                                )?.slug
                                            }`}
                                        >
                                            <a className="flex items-center transition-all hover:text-primary">
                                                {btnText}
                                                <IoArrowForwardOutline className="light-stroke text-[18px] ml-[5px]" />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

NewArrivalTwo.propTypes = {
    newArrivalTwo: PropTypes.instanceOf(Object).isRequired,
    products: PropTypes.instanceOf(Object).isRequired,
    excerpt: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired,
};

export default NewArrivalTwo;
