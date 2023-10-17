import PropTypes from 'prop-types';
import HeaderOne from '../../components/HeaderComps';
import Breadcrumb from '../../components/Breadcrumb';
import CategoriesBanner from '../../components/CategoriesBanner';
import ProductThreeColumns from '../../components/Products/ProductThreeColumns';
import FooterComps from '../../components/FooterComps';
import { getAllItems } from '../../lib/ProductUtil';

function ProductThreeColumnsPage({
    headerItems,
    products,
    productFilter,
    categoryBanner,
    gridTabItems,
    footerItems,
}) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <Breadcrumb
                breadcrumbContainer="container"
                title="Product"
                item="Home"
                itemPath="/"
                activeItem="Product Categories"
            />
            <CategoriesBanner
                categoryBannerCName="category-banner-area lg:pt-[100px] md:pt-[80px] pt-[50px]"
                categoryBanner={categoryBanner}
                products={products}
            />
            <ProductThreeColumns
                products={products}
                gridTabItems={gridTabItems}
                productFilter={productFilter}
                productFilterPath="/categories"
            />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export async function getStaticProps() {
    const headerItems = await getAllItems('header');
    const products = await getAllItems('products');
    const productFilter = await getAllItems('product-filter');
    const categoryBanner = await getAllItems('category-banner');
    const gridTabItems = await getAllItems('grid-tab-2');
    const footerItems = await getAllItems('footer');

    return {
        props: {
            headerItems,
            products,
            productFilter,
            categoryBanner,
            gridTabItems,
            footerItems,
        },
    };
}

ProductThreeColumnsPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    products: PropTypes.instanceOf(Object).isRequired,
    productFilter: PropTypes.instanceOf(Object).isRequired,
    categoryBanner: PropTypes.instanceOf(Object).isRequired,
    gridTabItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ProductThreeColumnsPage;
