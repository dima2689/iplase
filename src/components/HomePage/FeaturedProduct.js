import PropTypes from 'prop-types';
import Link from 'next/link';
import { IoArrowForwardOutline } from 'react-icons/io5';

function FeaturedProduct({ featuredProduct }) {
    const outlineButton =
        'inline-flex items-center border border-secondary text-secondary transition-all hover:bg-secondary hover:text-white leading-[38px] text-[15px] h-[38px] px-[35px]';

    return (
        <>
            <div
                className="featured-product xl:pt-[120px] lg:pt-[100px] md:pt-[80px] pt-[50px] relative before:content-[attr(data-count)] before:absolute before:text-[#F5F4F7] before:font-semibold before:xl:text-[70px] before:text-[40px] before:sm:bottom-[-15px] before:bottom-[-60px] before:right-0 before:z-[1]"
                data-count="Wood coth"
            >
                <div className="container">
                    <div className="grid md:grid-cols-2 grid-cols-12 lm:gap-x-[30px] md:gap-y-0 gap-y-[30px] group">
                        <div className="md:col-span-1 col-span-12">
                            <Link href={featuredProduct[0]?.path}>
                                <a className="featured-product-img block transition-all duration-500 group-hover:scale-[1.05]">
                                    <img
                                        src={featuredProduct[0]?.image}
                                        alt={featuredProduct[0]?.altImage}
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="md:col-span-1 col-span-12 self-center">
                            <div className="featured-product-content">
                                <span className="text-[14px] leading-5 font-medium uppercase block mb-[5px] text-[#999999]">
                                    {featuredProduct[0]?.subTitle}
                                </span>
                                <h2 className="relative after:bg-primary after:absolute after:left-0 after:bottom-0 after:h-[4px] after:w-[70px] pb-[10px] mb-[30px]">
                                    <Link href={featuredProduct[0]?.path}>
                                        <a className="transition-all hover:text-primary">
                                            {featuredProduct[0]?.title}
                                        </a>
                                    </Link>
                                </h2>
                                <p>{featuredProduct[0]?.excerpt}</p>
                                <div className="mt-[60px]">
                                    <Link href={featuredProduct[0]?.path}>
                                        <a className={outlineButton}>
                                            {featuredProduct[0]?.buttonText}
                                            <IoArrowForwardOutline className="ml-[5px]" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="featured-product xl:pt-[135px] lg:pt-[115px] md:pt-[95px] pt-[65px] relative before:content-[attr(data-count)] before:absolute before:text-[#F5F4F7] before:font-semibold before:xxl:text-[150px]  before:xl:text-[80px] before:text-[40px] before:bottom-[-75px] before:left-0 before:z-[1]"
                data-count="Pine"
            >
                <div className="container">
                    <div className="grid md:grid-cols-2 grid-cols-12 lm:gap-x-[30px] md:gap-y-0 gap-y-[30px] group">
                        <div className="md:col-span-1 col-span-12 order-2">
                            <Link href={featuredProduct[1]?.path}>
                                <a className="featured-product-img block transition-all duration-500 group-hover:scale-[1.05]">
                                    <img
                                        src={featuredProduct[1]?.image}
                                        alt={featuredProduct[1]?.altImage}
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="md:col-span-1 col-span-12 self-center order-1">
                            <div className="featured-product-content">
                                <span className="text-[14px] leading-5 font-medium uppercase block mb-[5px] text-[#999999]">
                                    {featuredProduct[1]?.subTitle}
                                </span>
                                <h2 className="relative after:bg-primary after:absolute after:left-0 after:bottom-0 after:h-[4px] after:w-[70px] pb-[10px] mb-[30px]">
                                    <Link href={featuredProduct[1]?.path}>
                                        <a className="transition-all hover:text-primary">
                                            {featuredProduct[1]?.title}
                                        </a>
                                    </Link>
                                </h2>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: featuredProduct[1]?.excerpt,
                                    }}
                                />
                                <div className="mt-[60px]">
                                    <Link href={featuredProduct[1]?.path}>
                                        <a className={outlineButton}>
                                            {featuredProduct[1]?.buttonText}
                                            <IoArrowForwardOutline className="ml-[5px]" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="featured-product xl:pt-[120px] lg:pt-[100px] md:pt-[80px] pt-[50px] xl:pb-[110px] lg:pb-[90px] pb-[60px] relative before:content-[attr(data-count)] before:absolute before:text-[#F5F4F7] before:font-semibold before:xxl:text-[150px]  before:xl:text-[80px] before:text-[40px] before:bottom-[35px] before:right-0 before:z-[1]"
                data-count="Art Deco"
            >
                <div className="container">
                    <div className="grid md:grid-cols-2 grid-cols-12 lm:gap-x-[30px] md:gap-y-0 gap-y-[30px] group">
                        <div className="md:col-span-1 col-span-12">
                            <Link href={featuredProduct[2]?.path}>
                                <a className="featured-product-img block transition-all duration-500 group-hover:scale-[1.05]">
                                    <img
                                        src={featuredProduct[2]?.image}
                                        alt={featuredProduct[2]?.altImage}
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="md:col-span-1 col-span-12 self-center">
                            <div className="featured-product-content">
                                <span className="text-[14px] leading-5 font-medium uppercase block mb-[5px] text-[#999999]">
                                    {featuredProduct[2]?.subTitle}
                                </span>
                                <h2 className="relative after:bg-primary after:absolute after:left-0 after:bottom-0 after:h-[4px] after:w-[70px] pb-[10px] mb-[30px]">
                                    <Link href={featuredProduct[2]?.path}>
                                        <a className="transition-all hover:text-primary">
                                            {featuredProduct[2]?.title}
                                        </a>
                                    </Link>
                                </h2>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: featuredProduct[2]?.excerpt,
                                    }}
                                />
                                <div className="mt-[60px]">
                                    <Link href={featuredProduct[2]?.path}>
                                        <a className={outlineButton}>
                                            {featuredProduct[2]?.buttonText}
                                            <IoArrowForwardOutline className="ml-[5px]" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

FeaturedProduct.propTypes = {
    featuredProduct: PropTypes.instanceOf(Object).isRequired,
};

export default FeaturedProduct;
