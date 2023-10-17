import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import SearchBarComps from '../SearchBarComps';
import LogoComps from '../LogoComps';
import HeaderRight from './HeaderRightSide';

function TransparentHeader({ headerItems }) {
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
            className="flex items-center px-[20px] h-[90px] w-full absolute top-0 z-30"
        >
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="md:col-span-4 max-lm:hidden">
                        {/* <SearchBarComps placeholdertext="Поиск..." /> */}
                    </div>
                    <div className="md:col-span-4 sm:col-span-6 col-span-4">
                        <LogoComps
                            headerItems={headerItems}
                            headerLogoCName="flex md:justify-center"
                            logoPath="/"
                        />
                    </div>
                    <div className="md:col-span-4 sm:col-span-6 col-span-8 self-center">
                        <HeaderRight headerItems={headerItems} />
                    </div>
                </div>
            </div>
        </header>
    );
}

TransparentHeader.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
};

export default TransparentHeader;
