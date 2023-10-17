import PropTypes from 'prop-types';
import HeaderOne from '../../components/HeaderComps';
import Breadcrumb from '../../components/Breadcrumb';
import ProductFourColumns from '../../components/Products/ProductFourColumns';
import FooterComps from '../../components/FooterComps';
import { getAllItems } from '../../lib/ProductUtil';

function ProductFourColumnsPage({
    headerItems,
    products,
    productFilter,
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
                activeItem="Product 4 columns"
            />
            <ProductFourColumns
                products={products}
                gridTabItems={gridTabItems}
                productFilter={productFilter}
                productFilterPath="4-columns"
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
    const gridTabItems = await getAllItems('grid-tab-2');
    const footerItems = await getAllItems('footer');

    return {
        props: {
            headerItems,
            products,
            productFilter,
            gridTabItems,
            footerItems,
        },
    };
}

ProductFourColumnsPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    products: PropTypes.instanceOf(Object).isRequired,
    productFilter: PropTypes.instanceOf(Object).isRequired,
    gridTabItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ProductFourColumnsPage;
