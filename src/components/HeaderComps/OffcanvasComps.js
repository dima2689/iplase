import PropTypes from 'prop-types';
import Link from 'next/link';
import * as FaIcons from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import OffcanvasMenu from './OffcanvasMenu';

function OffcanvasComps({ headerItems, offcanvas, showOffcanvas }) {
    return (
        <div
            className={offcanvas ? 'offcanvas-menu active' : 'offcanvas-menu'}
            onClick={showOffcanvas}
        >
            <div
                className="offcanvas-menu-inner overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="offcanvas-top flex">
                    <button
                        type="button"
                        className="offcanvas-close-btn text-[32px]"
                        aria-label="Right Align"
                    >
                        <IoCloseOutline onClick={showOffcanvas} />
                    </button>
                </div>
                <div className="offcanvas-setting grid grid-cols-2 pt-[40px]">
                    <div className="language-widget">
                        <h3 className="text-[16px] mb-[15px]">
                            {headerItems[0]?.languageTitle}
                        </h3>
                        <ul>
                            {headerItems[0]?.languageList?.map((items) => (
                                <li
                                    className="mb-[10px] last:mb-0"
                                    key={items.id}
                                >
                                    <Link href={`${items.path}`}>
                                        <a className="text-[#999999] font-normal transition-all hover:text-primary block">
                                            {items.text}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="currency-widget">
                        <h3 className="text-[16px] mb-[10px]">
                            {headerItems[0]?.currencyTitle}
                        </h3>
                        <ul>
                            {headerItems[0]?.currencyList?.map((items) => (
                                <li
                                    className="mb-[15px] last:mb-0"
                                    key={items.id}
                                >
                                    <Link href={items.path}>
                                        <a className="text-[#999999] font-normal transition-all hover:text-primary block">
                                            {items.text}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <OffcanvasMenu />
                <div className="offcanvas-contact-info pt-[60px]">
                    <h3 className="text-[16px]">
                        {headerItems[0]?.contactInfoTitle}
                    </h3>
                    <p
                        className="text-[#666666] pt-[20px]"
                        dangerouslySetInnerHTML={{
                            __html: headerItems[0]?.contactInfo,
                        }}
                    />
                    <div className="offcanvas-social-link flex justify-between items-center pt-[55px]">
                        <h3 className="text-[16px]">
                            {headerItems[0]?.socialTitle}
                        </h3>
                        <ul className="flex">
                            {headerItems[0]?.socialList?.map((item) => {
                                const Social = FaIcons[item.socialIcon];
                                return (
                                    <li
                                        className="mr-[25px] last:mr-0"
                                        key={item.id}
                                    >
                                        <Link href={item?.path} target="_blank">
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
    );
}

OffcanvasComps.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    offcanvas: PropTypes.bool.isRequired,
    showOffcanvas: PropTypes.func.isRequired,
};

export default OffcanvasComps;
