import Link from 'next/link';
import {
    IoLocationSharp,
    IoCallSharp,
    IoArrowForwardOutline,
} from 'react-icons/io5';
import * as FaIcons from 'react-icons/fa';
import PropTypes from 'prop-types';

function FooterComps({ footerContainer, footerItems }) {
    return (
        <footer>
            <div className="footer-top xl:py-[115px] lg:py-[95px] md:py-[75px] py-[45px]">
                <div className={footerContainer}>
                    <div className="grid grid-cols-12 md:gap-y-0 gap-y-[30px]">
                        <div className="md:col-span-4 lm:col-span-6 col-span-12">
                            <div className="footer-widget">
                                <h2 className="text-[18px] mb-[15px]">
                                    {footerItems[0]?.addressTitle}
                                </h2>
                                <ul>
                                    <li className="flex items-center mb-[5px]">
                                        <IoLocationSharp />
                                        <span className="ml-[10px]">
                                            {footerItems[0]?.address}
                                        </span>
                                    </li>
                                    <li className="flex items-center">
                                        <IoCallSharp />
                                        <Link
                                            href={footerItems[0]?.contactNumber}
                                        >
                                            <a className="font-normal hover:text-primary transition-all ml-[10px]">
                                                {
                                                    footerItems[0]
                                                        ?.contactNumberText
                                                }
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                                <ul className="flex pt-[35px]">
                                    {footerItems[0]?.socialList?.map((item) => {
                                        const Social = FaIcons[item.socialIcon];
                                        return (
                                            <li
                                                className="mr-[25px] last:mr-0"
                                                key={item.id}
                                            >
                                                <Link href={item?.path}>
                                                    <a className="transition-all hover:text-primary">
                                                        <Social />
                                                    </a>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="md:col-span-3 lm:col-span-6 col-span-12">
                            <div className="footer-widget">
                                <h2 className="text-[18px] mb-[15px]">
                                    {footerItems[0]?.infoTitle}
                                </h2>
                                <ul>
                                    {footerItems[0]?.infoList?.map((item) => (
                                        <li
                                            className="mb-[5px] last:mb-0"
                                            key={item.id}
                                        >
                                            <Link href={item?.path}>
                                                <a className="font-normal transition-all hover:text-primary">
                                                    {item?.title}
                                                </a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:col-span-2 lm:col-span-6 col-span-12">
                            <div className="footer-widget">
                                <h2 className="text-[18px] mb-[15px]">
                                    {footerItems[0]?.aboutTitle}
                                </h2>
                                <ul>
                                    {footerItems[0]?.aboutList?.map((item) => (
                                        <li
                                            className="mb-[5px] last:mb-0"
                                            key={item.id}
                                        >
                                            <Link href={item?.path}>
                                                <a className="font-normal transition-all hover:text-primary">
                                                    {item?.title}
                                                </a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:col-span-3 lm:col-span-6 col-span-12">
                            <div className="footer-widget">
                                <h2 className="text-[18px] mb-[15px]">
                                    {footerItems[0]?.newsletterTitle}
                                </h2>
                                <form>
                                    <div className="input-field relative max-w-[270px]">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your email address"
                                            className="bg-transparent border-0 border-b border-[rgba(0,0,0,.25)] outline-none w-full p-[10px_35px_10px_0] focus-visible:border-primary focus-visible:text-primary"
                                        />
                                        <button
                                            type="submit"
                                            className="absolute top-1/2 -translate-y-1/2 right-0 text-[20px] text-[#99999] opacity-70"
                                        >
                                            <IoArrowForwardOutline />
                                        </button>
                                    </div>
                                </form>
                                <ul className="flex pt-[50px]">
                                    {footerItems[0]?.menuList?.map((item) => (
                                        <li
                                            className="xl:mr-[30px] mr-[20px] last:mr-0"
                                            key={item.id}
                                        >
                                            <Link href={item?.path}>
                                                <a className="font-normal transition-all hover:text-primary">
                                                    {item?.title}
                                                </a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className={footerContainer}>
                    <div className="grid grid-cols-12 md:gap-y-0 gap-y-[20px] items-center">
                        <div className="md:col-span-4 col-span-12">
                            <ul className="flex md:justify-start justify-center">
                                {footerItems[0]?.menuList?.map((item) => (
                                    <li
                                        className="xl:mr-[30px] mr-[20px] last:mr-0"
                                        key={item.id}
                                    >
                                        <Link href={item?.path}>
                                            <a className="font-normal transition-all hover:text-primary">
                                                {item?.title}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:col-span-4 col-span-12">
                            <div className="footer-logo flex justify-center">
                                <Link href={footerItems[0]?.footerLogoPath}>
                                    <a>
                                        <img
                                            src={footerItems[0]?.footerLogo}
                                            alt={footerItems[0]?.footerLogoAlt}
                                            width={120}
                                            height={30}
                                        />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="md:col-span-4 col-span-12">
                            <div className="social-link flex md:justify-end justify-center">
                                <h2 className="text-[16px] lg:pr-[65px] pr-[15px]">
                                    {footerItems[0]?.socialTitle}
                                </h2>
                                <ul className="flex">
                                    {footerItems[0]?.socialList?.map((item) => {
                                        const Social = FaIcons[item.socialIcon];
                                        return (
                                            <li
                                                className="xl:mr-[25px] mr-[20px] last:mr-0"
                                                key={item.id}
                                            >
                                                <Link
                                                    href={item?.path}
                                                    target="_blank"
                                                >
                                                    <a className="transition-all hover:text-primary">
                                                        <Social />
                                                    </a>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright pt-[35px] pb-[25px]">
                <div className="container">
                    <div className="grid grid-cols-1">
                        <span className="flex justify-center items-center">
                            © 2011-{new Date().getFullYear()} АйПлейс - Самара.
                            <Link href={footerItems[0]?.copyrightLink}>
                                <a className="font-normal ml-[5px]">
                                    Все права защищены.
                                </a>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

FooterComps.propTypes = {
    footerContainer: PropTypes.string,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default FooterComps;
