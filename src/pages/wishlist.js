import PropTypes from 'prop-types';
import HeaderOne from '../components/HeaderComps';
import Breadcrumb from '../components/Breadcrumb';
import WishlistPageComps from '../components/WishlistPageComps';
import FooterComps from '../components/FooterComps';
import { getAllItems } from '../lib/ItemsUtil';

function WishlistPage({
    headerItems,
    products,
    wishlistPageItems,
    footerItems,
}) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <Breadcrumb
                breadcrumbContainer="container"
                title="Список желаний"
                item="Home"
                itemPath="/"
                activeItem="Список желаний"
            />
            <WishlistPageComps
                wishlistPageItems={wishlistPageItems}
                products={products}
            />
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
    const wishlistPageItems = getAllItems('wishlist-page');
    const footerItems = getAllItems('footer');

    return {
        props: {
            headerItems,
            products,
            wishlistPageItems,
            footerItems,
        },
    };
}

WishlistPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    products: PropTypes.instanceOf(Object).isRequired,
    wishlistPageItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default WishlistPage;
