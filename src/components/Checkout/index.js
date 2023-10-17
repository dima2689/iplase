import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { IoCheckmarkCircle } from 'react-icons/io5';
import EmptyCheckout from './EmptyCheckout';

const CustomerOrderFields = {
    Name: 'name',
    Street: 'street',
    Flat: 'flat',
    City: 'city',
    Tel: 'tel',
    Email: 'email',
    Additioanl: 'additional',
};

const singleField = `flex flex-col w-full`;
const inputField = `border border-[#e8e8e8] focus-visible:outline-0 placeholder:text-[#7b7975] py-[10px] px-[20px] w-full h-[50px]`;
const textareaField = `border border-[#e8e8e8] focus-visible:outline-0 placeholder:text-[#7b7975] py-[10px] px-[20px] w-full min-h-[120px]`;
const secondaryButton =
    'flex bg-secondary text-white leading-[38px] text-[15px] h-[40px] px-[32px]';

const isInitial = true;

function Checkout({ checkoutItems, onSendEmail }) {
    const [returningCustomer, setReturningCustomer] = useState(false);
    const openReturningCustomer = () => {
        setReturningCustomer(!returningCustomer);
    };

    const [coupon, setCoupon] = useState(false);
    const openCoupon = () => {
        setCoupon(!coupon);
    };

    const [customerOrderData, setCustomerOrderData] = useState({});
    const onUpdateCustomerOrderData = (field, event) => {
        setCustomerOrderData((prev) => ({
            ...prev,
            [field]: event.target.value,
        }));
    };

    const cartItems = useSelector((state) => state.cart.items);

    const initialValue = 0;
    const SubTotal = cartItems.reduce(
        (accumulator, current) =>
            accumulator + current.price * current.quantity,
        initialValue
    );

    const onSubmitOrder = () => {
        const order = {
            customer: customerOrderData,
            products: cartItems,
            total: SubTotal,
        };
        onSendEmail(order);
    };

    return (
        <div className="checkout border-b border-[#ededed] lg:py-[90px] md:py-[80px] py-[50px]">
            {cartItems.length <= 0 && <EmptyCheckout />}
            {cartItems.length <= 0 ||
                (initialValue === 0 && (
                    <>
                        <div className="customer-info">
                            <div className="container">
                                <div className="grid grid-cols-12 lg:gap-x-[25px] max-md:gap-y-[30px]">
                                    <div className="xl:col-span-7 lg:col-span-6 col-span-12">
                                        <div className="customer-zone flex items-center bg-[#f4f5f7] p-[14px_30px_14px]">
                                            <div className="icon text-green-500 mr-[10px]">
                                                <IoCheckmarkCircle />
                                            </div>
                                            <h2 className="title text-[16px] leading-[28px] max-sm:whitespace-nowrap max-sm:text-ellipsis overflow-hidden">
                                                {
                                                    checkoutItems[0]
                                                        ?.customerzoneTitle
                                                }
                                                <button
                                                    type="button"
                                                    className="ml-[5px] transition-all hover:text-primary"
                                                    onClick={
                                                        openReturningCustomer
                                                    }
                                                >
                                                    {
                                                        checkoutItems[0]
                                                            ?.customerzoneBtnText
                                                    }
                                                </button>
                                            </h2>
                                        </div>
                                        {returningCustomer && (
                                            <div className="returning-form-wrap border border-[#dddddd] p-[30px] mt-[30px]">
                                                <p className="text-[#777777] text-[16px] font-normal mb-[20px]">
                                                    {
                                                        checkoutItems[0]
                                                            ?.customerzoneDesc
                                                    }
                                                </p>
                                                <form className="returning-form">
                                                    <div
                                                        className={`${singleField}  mb-[20px]`}
                                                    >
                                                        <label
                                                            htmlFor="returning-email"
                                                            className="mb-[5px]"
                                                        >
                                                            Username or email *
                                                        </label>
                                                        <input
                                                            className={`${inputField}`}
                                                            type="email"
                                                            id="returning-email"
                                                        />
                                                    </div>
                                                    <div
                                                        className={`${singleField}  mb-[20px]`}
                                                    >
                                                        <label
                                                            htmlFor="returning-password"
                                                            className="mb-[5px]"
                                                        >
                                                            Password *
                                                        </label>
                                                        <input
                                                            className={`${inputField}`}
                                                            type="password"
                                                            id="returning-password"
                                                            placeholder="Password"
                                                        />
                                                    </div>
                                                    <button
                                                        type="submit"
                                                        className={`${secondaryButton}`}
                                                    >
                                                        Login
                                                    </button>
                                                </form>
                                            </div>
                                        )}
                                    </div>
                                    <div className="xl:col-span-5 lg:col-span-6 col-span-12">
                                        <div className="coupon-zone flex items-center bg-[#f4f5f7] p-[14px_30px_14px]">
                                            <div className="icon text-green-500 mr-[10px]">
                                                <IoCheckmarkCircle />
                                            </div>
                                            <h2 className="title text-[16px] leading-[28px] max-sm:whitespace-nowrap max-sm:text-ellipsis overflow-hidden">
                                                {
                                                    checkoutItems[0]
                                                        ?.couponZoneTitle
                                                }

                                                <button
                                                    type="button"
                                                    className="ml-[5px] transition-all hover:text-primary"
                                                    onClick={openCoupon}
                                                >
                                                    {
                                                        checkoutItems[0]
                                                            ?.couponZoneBtnText
                                                    }
                                                </button>
                                            </h2>
                                        </div>
                                        {coupon && (
                                            <div className="returning-form-wrap border border-[#dddddd] p-[30px] mt-[30px]">
                                                <p className="text-[#777777] text-[16px] font-normal mb-[20px]">
                                                    {
                                                        checkoutItems[0]
                                                            ?.returningFormDesc
                                                    }
                                                </p>
                                                <form className="returning-form">
                                                    <div
                                                        className={`${singleField}  mb-[20px]`}
                                                    >
                                                        <input
                                                            className={`${inputField}`}
                                                            type="text"
                                                            placeholder="Coupon code"
                                                        />
                                                    </div>
                                                    <button
                                                        type="submit"
                                                        className={`${secondaryButton} transition-all hover:bg-primary hover:text-white`}
                                                    >
                                                        {
                                                            checkoutItems[0]
                                                                ?.returningBtnText
                                                        }
                                                    </button>
                                                </form>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="checkout-wrap pt-[25px]">
                            <div className="container">
                                <div className="grid grid-cols-12 lg:gap-x-[25px] max-md:gap-y-[50px]">
                                    <div className="lg:col-span-7 col-span-12">
                                        <div className="billing">
                                            <h2 className="title text-[18px] mb-[20px]">
                                                Оформление заказа
                                            </h2>
                                            <form className="billing-form">
                                                <div className="group-field flex mb-[20px]">
                                                    <div
                                                        className={`${singleField} mr-[25px]`}
                                                    >
                                                        <label
                                                            htmlFor="billing-firstname"
                                                            className="mb-[5px]"
                                                        >
                                                            Имя
                                                        </label>
                                                        <input
                                                            className={`${inputField}`}
                                                            type="text"
                                                            id="billing-firstname"
                                                            onChange={(e) =>
                                                                onUpdateCustomerOrderData(
                                                                    CustomerOrderFields.Name,
                                                                    e
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                    {/* <div
                                                        className={`${singleField}`}
                                                    >
                                                        <label
                                                            htmlFor="billing-lastname"
                                                            className="mb-[5px]"
                                                        >
                                                            Фамилия
                                                        </label>
                                                        <input
                                                            className={`${inputField}`}
                                                            type="text"
                                                            id="billing-lastname"
                                                        />
                                                    </div> */}
                                                </div>
                                                {/* <div
                                                    className={`${singleField} mb-[20px]`}
                                                >
                                                    <label
                                                        htmlFor="billing-companyname"
                                                        className="mb-[5px]"
                                                    >
                                                        Название компании
                                                    </label>
                                                    <input
                                                        className={`${inputField}`}
                                                        type="text"
                                                        id="billing-companyname"
                                                    />
                                                </div> */}
                                                {/* <div
                                                    className={`${singleField} mb-[20px]`}
                                                >
                                                    <label
                                                        htmlFor="billing-companyname"
                                                        className="mb-[5px]"
                                                    >
                                                        Страна
                                                    </label>
                                                    <select
                                                        className={`${inputField}`}
                                                    >
                                                        <option>
                                                            Россия
                                                        </option>
                                                        <option>Romania</option>
                                                        <option>Mexico</option>
                                                        <option>Canada</option>
                                                        <option>
                                                            Bangladesh
                                                        </option>
                                                    </select>
                                                </div> */}
                                                <div
                                                    className={`${singleField} mb-[20px]`}
                                                >
                                                    <label>
                                                        Адрес (если доставка)
                                                        <input
                                                            className={`${inputField} mt-[5px] mb-[20px]`}
                                                            type="text"
                                                            placeholder="Название улицы, номер дома"
                                                            onChange={(e) =>
                                                                onUpdateCustomerOrderData(
                                                                    CustomerOrderFields.Street,
                                                                    e
                                                                )
                                                            }
                                                        />
                                                        <input
                                                            className={`${inputField}`}
                                                            type="text"
                                                            placeholder="Номер подъезда/квартиры/этаж"
                                                            onChange={(e) =>
                                                                onUpdateCustomerOrderData(
                                                                    CustomerOrderFields.Flat,
                                                                    e
                                                                )
                                                            }
                                                        />
                                                    </label>
                                                </div>
                                                <div
                                                    className={`${singleField} mb-[20px]`}
                                                >
                                                    <label
                                                        htmlFor="billing-city"
                                                        className="mb-[5px]"
                                                    >
                                                        Город*
                                                    </label>
                                                    <input
                                                        className={`${inputField}`}
                                                        type="text"
                                                        id="billing-city"
                                                        onChange={(e) =>
                                                            onUpdateCustomerOrderData(
                                                                CustomerOrderFields.City,
                                                                e
                                                            )
                                                        }
                                                    />
                                                </div>
                                                {/* <div
                                                    className={`${singleField} mb-[20px]`}
                                                >
                                                    <label
                                                        htmlFor="billing-district"
                                                        className="mb-[5px]"
                                                    >
                                                        Округ
                                                    </label>
                                                    <select
                                                        className={`${inputField}`}
                                                    >
                                                        <option>Sydney</option>
                                                        <option>
                                                            Brisbane
                                                        </option>
                                                        <option>
                                                            Adelaide
                                                        </option>
                                                        <option>Hobart</option>
                                                        <option>
                                                            Melbourne
                                                        </option>
                                                    </select>
                                                </div> */}
                                                {/* <div
                                                    className={`${singleField} mb-[20px]`}
                                                >
                                                    <label
                                                        htmlFor="billing-postcode"
                                                        className="mb-[5px]"
                                                    >
                                                        Почтовый индекс
                                                    </label>
                                                    <input
                                                        className={`${inputField}`}
                                                        type="text"
                                                        id="billing-postcode"
                                                    />
                                                </div> */}
                                                <div
                                                    className={`${singleField} mb-[20px]`}
                                                >
                                                    <label
                                                        htmlFor="billing-phone"
                                                        className="mb-[5px]"
                                                    >
                                                        Номер телефона*
                                                    </label>
                                                    <input
                                                        className={`${inputField}`}
                                                        type="text"
                                                        id="billing-phone"
                                                        onChange={(e) =>
                                                            onUpdateCustomerOrderData(
                                                                CustomerOrderFields.Tel,
                                                                e
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className={`${singleField} mb-[20px]`}
                                                >
                                                    <label
                                                        htmlFor="billing-email"
                                                        className="mb-[5px]"
                                                    >
                                                        Адрес электронной почты*
                                                    </label>
                                                    <input
                                                        className={`${inputField}`}
                                                        type="email"
                                                        id="billing-email"
                                                        onChange={(e) =>
                                                            onUpdateCustomerOrderData(
                                                                CustomerOrderFields.Email,
                                                                e
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div className="additional-info">
                                                    <h3 className="text-[18px] mb-[15px]">
                                                        Дополнительная
                                                        информация
                                                    </h3>
                                                    <div
                                                        className={`${singleField} lg:mb-[20px]`}
                                                    >
                                                        <label
                                                            htmlFor="billing-notes"
                                                            className="mb-[5px]"
                                                        >
                                                            Пожелания к заказу
                                                        </label>
                                                        <textarea
                                                            className={`${textareaField}`}
                                                            type="text"
                                                            id="billing-notes"
                                                            onChange={(e) =>
                                                                onUpdateCustomerOrderData(
                                                                    CustomerOrderFields.Additioanl,
                                                                    e
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-5 col-span-12">
                                        <div className="order-info">
                                            <div className="inner bg-[#f6f6f6] border border-[#bfbfbf] p-[40px_45px_50px]">
                                                <h2 className="title text-[18px] mb-[20px]">
                                                    Заказ
                                                </h2>
                                                <table className="w-full text-sm text-left">
                                                    <thead className="text-[18px] bg-[#f4f5f7]">
                                                        <tr>
                                                            <th
                                                                scope="col"
                                                                className="font-normal py-3"
                                                            >
                                                                Товар
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="font-normal py-3 text-right"
                                                            >
                                                                Цена
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="border-t border-[#cdcdcd]">
                                                        {cartItems?.map(
                                                            (item) => (
                                                                <tr
                                                                    className="border-t border-[#cdcdcd]"
                                                                    key={
                                                                        item.id
                                                                    }
                                                                >
                                                                    <th
                                                                        scope="row"
                                                                        className="py-[15px] font-normal whitespace-nowrap"
                                                                    >
                                                                        {
                                                                            item.name
                                                                        }{' '}
                                                                        X
                                                                        {
                                                                            item.quantity
                                                                        }
                                                                    </th>
                                                                    <td className="py-[15px] text-right">
                                                                        {item.price.toFixed(
                                                                            0
                                                                        )}
                                                                        р.
                                                                    </td>
                                                                </tr>
                                                            )
                                                        )}
                                                        <tr className="border-t border-[#cdcdcd]">
                                                            <th
                                                                scope="row"
                                                                className="py-[15px] font-bold whitespace-nowrap"
                                                            >
                                                                Подитог
                                                            </th>
                                                            <td className="py-[15px] text-right">
                                                                {SubTotal.toFixed(
                                                                    0
                                                                )}
                                                                р.
                                                            </td>
                                                        </tr>
                                                        <tr className="border-t border-[#cdcdcd]">
                                                            <th
                                                                scope="row"
                                                                className="py-[15px] font-bold whitespace-nowrap"
                                                            >
                                                                Итого
                                                            </th>
                                                            <td className="py-[15px] text-right">
                                                                {SubTotal.toFixed(
                                                                    0
                                                                )}
                                                                р.
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="check pt-[30px] border-t border-[#cdcdcd]">
                                                    <div className="payment-info pb-[20px]">
                                                        <h2 className="text-[18px] mb-[10px]">
                                                            {
                                                                checkoutItems[0]
                                                                    ?.checkTitle
                                                            }
                                                        </h2>
                                                        <p>
                                                            {
                                                                checkoutItems[0]
                                                                    ?.checkDesc
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className="payment-info">
                                                        <h2 className="text-[18px] mb-[10px]">
                                                            {
                                                                checkoutItems[0]
                                                                    ?.paymentTitle
                                                            }
                                                        </h2>
                                                        <p>
                                                            {
                                                                checkoutItems[0]
                                                                    ?.paymentDesc
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="pt-[35px]">
                                                {checkoutItems[0]?.additionDesc}
                                                <Link href="/privacy">
                                                    <a className="ml-[5px]">
                                                        {
                                                            checkoutItems[0]
                                                                ?.privacyText
                                                        }
                                                    </a>
                                                </Link>
                                            </p>
                                            <div className="payment-btn-wrap pt-[35px]">
                                                <button
                                                    className="bg-[#222222] text-white w-full px-[42px] h-[46px] leading-[44px]"
                                                    type="submit"
                                                    onClick={onSubmitOrder}
                                                >
                                                    {
                                                        checkoutItems[0]
                                                            ?.orderBtnText
                                                    }
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
        </div>
    );
}

Checkout.propTypes = {
    checkoutItems: PropTypes.instanceOf(Object).isRequired,
    onSendEmail: PropTypes.func.isRequired,
};

export default Checkout;
