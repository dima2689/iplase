import PropTypes from 'prop-types';
import { IoCloseOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import CartItem from './CartItem';

const minicartGroupBtn = `flex items-center justify-center border border-[#222222]  w-full h-[50px]`;
function Cart({ minicart, showMiniCart }) {
    const cartItems = useSelector((state) => state.cart.items);

    const initialValue = 0;
    const SubTotal = cartItems.reduce(
        (accumulator, current) =>
            accumulator + current.price * current.quantity,
        initialValue
    );

    return (
        <div
            className={minicart ? 'minicart-area active' : 'minicart-area'}
            onClick={showMiniCart}
        >
            <div
                className="minicart-inner"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="minicart-top ml-[-8px]">
                    <IoCloseOutline
                        className="text-[#212121] text-[32px] cursor-pointer"
                        onClick={showMiniCart}
                    />
                </div>
                <div className="minicart-body pt-[25px]">
                    <div className="minicart-container">
                        {cartItems.length <= 0 && (
                            <h2 className="text-[20px]">Корзина пуста.</h2>
                        )}
                        <ul className="overflow-auto max-h-[205px]">
                            {cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={{
                                        id: item.id,
                                        title: item.name,
                                        quantity: item.quantity,
                                        total: item.totalPrice,
                                        price: item.price,
                                        slug: item.slug,
                                        image: item.image,
                                    }}
                                />
                            ))}
                        </ul>
                        {cartItems.length <= 0 ||
                            (initialValue === 0 && (
                                <>
                                    <div className="minicart-subtotal flex justify-between text-[24px] font-medium pt-[40px]">
                                        <span>Итого:</span>
                                        <span>{SubTotal.toFixed(0)}р.</span>
                                    </div>
                                    <ul className="minicart-group-btn pt-[40px]">
                                        <li className="mb-[15px]">
                                            <Link href="/cart">
                                                <a
                                                    className={`${minicartGroupBtn} transition-all duration-500 hover:bg-[#222222] hover:text-white`}
                                                >
                                                    Корзина
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/checkout">
                                                <a
                                                    className={`${minicartGroupBtn} bg-[#222222] text-white`}
                                                >
                                                    Подтвердить заказ
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    minicart: PropTypes.bool.isRequired,
    showMiniCart: PropTypes.func.isRequired,
};

export default Cart;
