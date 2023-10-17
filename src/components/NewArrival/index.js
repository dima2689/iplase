import Link from 'next/link';
import PropTypes from 'prop-types';

function NewArrival({
    title,
    desc,
    path,
    btnText,
    readmoreBtnText,
    newArrival,
    products,
}) {
    return (
        <div className="newarrival-area md:pt-[80px] pt-[50px] md:pb-[80px] sm:pb-[50px]">
            <div className="container">
                <div className="sm:columns-2 columns-1 xl:w-[1145px] mx-auto gap-x-[25px] sm:space-y-[130px] space-y-[30px]">
                    <div className="section-title break-inside-avoid">
                        <h2 className="mb-[30px]">{title}</h2>
                        <p className="mb-[25px]">{desc}</p>
                        <Link href={path}>
                            <a className="underline text-[18px] leading-[18px] transition-all hover:text-primary">
                                {btnText}
                            </a>
                        </Link>
                    </div>
                    {newArrival[0]?.newArrivalItems?.map((newArrivalItem) => (
                        <div
                            className="newarrival-item break-inside-avoid"
                            key={newArrivalItem?.id}
                        >
                            <div className="product-img">
                                <Link
                                    href={`/products/${
                                        products.find(
                                            (item) =>
                                                item.id === newArrivalItem.id
                                        )?.slug
                                    }`}
                                >
                                    <a>
                                        <img
                                            className="w-full"
                                            src={`/images/products/${
                                                products.find(
                                                    (item) =>
                                                        item.id ===
                                                        newArrivalItem.id
                                                )?.slug
                                            }/${
                                                products.find(
                                                    (item) =>
                                                        item.id ===
                                                        newArrivalItem.id
                                                )?.mdImage
                                            }`}
                                            alt={
                                                products.find(
                                                    (item) =>
                                                        item.id ===
                                                        newArrivalItem.id
                                                )?.altImage
                                            }
                                            width={585}
                                            height={585}
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="product-content">
                                <h3 className="mt-[15px] mb-[5px]">
                                    <Link
                                        href={`/products/${
                                            products.find(
                                                (item) =>
                                                    item.id ===
                                                    newArrivalItem.id
                                            )?.slug
                                        }`}
                                    >
                                        <a className="transition-all hover:text-primary text-[18px]">
                                            {
                                                products.find(
                                                    (item) =>
                                                        item.id ===
                                                        newArrivalItem.id
                                                )?.title
                                            }
                                        </a>
                                    </Link>
                                </h3>
                                <span className="product-price text-[18px] leading-[31px] text-[#666666]">
                                    {products
                                        .find(
                                            (item) =>
                                                item.id === newArrivalItem.id
                                        )
                                        ?.price.toFixed(0)}
                                    р.
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="btn-wrap flex justify-center pt-[60px]">
                    <Link href={path}>
                        <a className="underline text-[18px] leading-[18px] transition-all hover:text-primary">
                            {readmoreBtnText}
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

NewArrival.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired,
    readmoreBtnText: PropTypes.string.isRequired,
    newArrival: PropTypes.instanceOf(Object).isRequired,
    products: PropTypes.instanceOf(Object).isRequired,
};

export default NewArrival;
