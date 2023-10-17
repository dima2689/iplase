import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { IoCallOutline } from 'react-icons/io5';
import LogoComps from '../LogoComps';
import HeaderRightTwo from './HeaderRightSideTwo';

function HeaderThree({ headerItems, logoPath }) {
    const header = useRef();
    useEffect(() => {
        window.addEventListener('scroll', isSticky);

        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    }, []);

    const isSticky = (e) => {
        const scrollTop = window.scrollY;

        scrollTop >= 90
            ? header.current?.classList.add('is-sticky')
            : header.current?.classList.remove('is-sticky');
    };

    return (
        <header
            ref={header}
            className="flex items-center w-full h-[90px] top-0 z-30"
        >
            <div className="container-fluid md:px-[100px] px-[15px]">
                <div className="grid grid-cols-12">
                    <div className="md:col-span-4 self-center hidden md:block">
                        <div className="header-contact">
                            {headerItems[0]?.headerNumberInfo?.map((item) => (
                                <Link href={item.numberUrl} key={item.id}>
                                    <a className="flex transition-all hover:text-primary">
                                        <IoCallOutline className="text-[18px] mr-[5px]" />
                                        <span className="font-normal">
                                            {item.numberInText}
                                        </span>
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-4 hidden md:block">
                        <LogoComps
                            headerItems={headerItems}
                            logoPath={logoPath}
                            headerLogoCName="flex justify-center"
                        />
                    </div>
                    <div className="md:col-span-4 col-span-12 self-center">
                        <HeaderRightTwo headerItems={headerItems} />
                    </div>
                </div>
            </div>
        </header>
    );
}

HeaderThree.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    logoPath: PropTypes.string.isRequired,
};

export default HeaderThree;
