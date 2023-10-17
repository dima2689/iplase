import PropTypes from 'prop-types';
import HeaderOne from '../components/HeaderComps';
import Breadcrumb from '../components/Breadcrumb';
import Checkout from '../components/Checkout';
import FooterComps from '../components/FooterComps';
import { getAllItems } from '../lib/ItemsUtil';

function CheckoutPage({ headerItems, checkoutItems, footerItems }) {
    const onSendEmail = (order) => {
        fetch('/api/checkout', {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        });
        window.location.href = '/order-sent';
    };

    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <Breadcrumb
                breadcrumbContainer="container"
                title="Корзина"
                item="Корзина"
                itemPath="/"
                activeItem="Корзина"
            />
            <Checkout checkoutItems={checkoutItems} onSendEmail={onSendEmail} />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export function getStaticProps() {
    const headerItems = getAllItems('header');
    const checkoutItems = getAllItems('checkout');
    const footerItems = getAllItems('footer');

    return {
        props: {
            headerItems,
            checkoutItems,
            footerItems,
        },
    };
}

CheckoutPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    checkoutItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default CheckoutPage;
