import { useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { GiAutoRepair } from 'react-icons/gi';
import {
    IoMenuOutline,
    IoBagHandleOutline,
    IoHeartOutline,
    IoPersonOutline,
} from 'react-icons/io5';

import Cart from '../Cart';
import OffcanvasComps from './OffcanvasComps';

// Tailwind Related Stuff
const badge =
    'bg-primary text-[12px] text-center absolute bottom-[-10px] right-[-10px] h-[20px] leading-[20px] rounded-[20px] px-[6px] transition-all group-hover:text-white';

function HeaderRight({ headerItems }) {
    const [offcanvas, setOffcanvas] = useState(false);
    const showOffcanvas = () => setOffcanvas(!offcanvas);

    const [minicart, setMiniCart] = useState(false);
    const showMiniCart = () => setMiniCart(!minicart);

    const cartQuantity = useSelector((state) => state.cart.totalQuantity);
    const wishlistQuantity = useSelector(
        (state) => state.wishlist.totalQuantity
    );

    return (
        <>
            <div className="flex justify-end">
                <div className="user-item md:mr-[35px] sm:mr-[25px] mr-[15px]">
                    <Link href="/repair">
                        <a className="text-2xl hover:text-primary transition-all">
                            <GiAutoRepair />
                        </a>
                    </Link>
                </div>
                <div className="user-item md:mr-[35px] sm:mr-[25px] mr-[15px]">
                    <Link href="/auth">
                        <a className="text-2xl hover:text-primary transition-all">
                            <IoPersonOutline />
                        </a>
                    </Link>
                </div>
                <div className="wishlist-item md:mr-[35px] sm:mr-[25px] mr-[15px]">
                    <Link href="/wishlist">
                        <a className="block text-2xl relative group hover:text-primary transition-all">
                            <IoHeartOutline />
                            <span className={badge}>{wishlistQuantity}</span>
                        </a>
                    </Link>
                </div>
                <div className="minicart-item md:mr-[35px] sm:mr-[25px] mr-[15px]">
                    <button
                        type="button"
                        className="text-2xl relative group hover:text-primary transition-all"
                        onClick={showMiniCart}
                    >
                        <IoBagHandleOutline />
                        <span className={badge}>{cartQuantity}</span>
                    </button>
                </div>
                <div className="menu-item">
                    <button
                        type="button"
                        className="text-2xl hover:text-primary transition-all"
                        onClick={showOffcanvas}
                    >
                        <IoMenuOutline />
                    </button>
                </div>
            </div>

            <OffcanvasComps
                headerItems={headerItems}
                offcanvas={offcanvas}
                showOffcanvas={showOffcanvas}
            />
            <Cart minicart={minicart} showMiniCart={showMiniCart} />
        </>
    );
}

HeaderRight.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
};

export default HeaderRight;
