import PropTypes from 'prop-types';
import Link from 'next/link';

function CategoriesBanner({ products, categoryBanner, categoryBannerCName }) {
    return (
        <div className={categoryBannerCName}>
            <div className="container">
                <div className="grid grid-cols-12 md:gap-[10px] gap-y-[15px]">
                    {categoryBanner[0]?.categoryBannerItems?.map(
                        (categoryBannerItem) => (
                            <div
                                className={categoryBannerItem.CName}
                                key={categoryBannerItem.id}
                            >
                                <div className="category-banner-item relative overflow-hidden group">
                                    <div className="product-img">
                                        <Link
                                            href={`/products/${
                                                products.find(
                                                    (item) =>
                                                        item.id ===
                                                        categoryBannerItem.id
                                                )?.slug
                                            }`}
                                        >
                                            <a>
                                                <img
                                                    className="w-full transition-all duration-[400ms] group-hover:scale-[1.05]"
                                                    src={`/images/products/${
                                                        products.find(
                                                            (item) =>
                                                                item.id ===
                                                                categoryBannerItem.id
                                                        )?.slug
                                                    }/${
                                                        products.find(
                                                            (item) =>
                                                                item.id ===
                                                                categoryBannerItem.id
                                                        )?.categoryBannerImg
                                                    }`}
                                                    alt={
                                                        products.find(
                                                            (item) =>
                                                                item.id ===
                                                                categoryBannerItem.id
                                                        )?.altImage
                                                    }
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="product-content absolute top-[10px] left-[15px]">
                                        <h3 className="group-hover:text-[#999999]">
                                            <Link
                                                href={`/products/${
                                                    products.find(
                                                        (item) =>
                                                            item.id ===
                                                            categoryBannerItem.id
                                                    )?.slug
                                                }`}
                                            >
                                                <a className="transition-all hover:text-primary lg:text-[18px] text-[16px]">
                                                    {
                                                        products.find(
                                                            (item) =>
                                                                item.id ===
                                                                categoryBannerItem.id
                                                        )?.title
                                                    }
                                                </a>
                                            </Link>
                                        </h3>
                                        {/* <span className="capitalize font-medium leading-[23px] group-hover:text-primary">
                                            {
                                                products.find(
                                                    (item) =>
                                                        item.id ===
                                                        categoryBannerItem.id
                                                )?.category
                                            }
                                        </span> */}
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

CategoriesBanner.propTypes = {
    categoryBannerCName: PropTypes.string,
    products: PropTypes.instanceOf(Object).isRequired,
    categoryBanner: PropTypes.instanceOf(Object).isRequired,
};

export default CategoriesBanner;
