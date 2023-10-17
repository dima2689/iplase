import PropTypes from 'prop-types';
import HeaderOne from '../components/HeaderComps';
import Breadcrumb from '../components/Breadcrumb';
import CartPageComps from '../components/CartPageComps';
import FooterComps from '../components/FooterComps';
import { getAllItems } from '../lib/ItemsUtil';

function CartPage({ headerItems, products, cartPageItems, footerItems }) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <Breadcrumb
                breadcrumbContainer="container"
                title="Cart"
                item="Корзина"
                itemPath="/"
                activeItem="Cart"
            />
            <CartPageComps cartPageItems={cartPageItems} products={products} />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export function getStaticProps() {
    const headerItems = getAllItems('header');
    const products = getAllItems('products');
    const cartPageItems = getAllItems('cart-page');
    const footerItems = getAllItems('footer');

    return {
        props: {
            headerItems,
            products,
            cartPageItems,
            footerItems,
        },
    };
}

CartPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    products: PropTypes.instanceOf(Object).isRequired,
    cartPageItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default CartPage;
