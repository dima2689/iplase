import PropTypes from 'prop-types';
import HeaderOne from '../../components/HeaderComps';
import Breadcrumb from '../../components/Breadcrumb';
import ProductSixColumns from '../../components/Products/ProductSixColumns';
import FooterComps from '../../components/FooterComps';
import { getAllItems } from '../../lib/ProductUtil';

function ProductFiveColumnsPage({
    headerItems,
    products,
    productFilter,
    gridTabItems,
    footerItems,
}) {
    return (
        <>
            <HeaderOne
                headerItems={headerItems}
                headerContainer="container-fluid xxl:px-[100px] px-[15px]"
            />
            <Breadcrumb
                breadcrumbContainer="container-fluid xxl:px-[100px] px-[15px]"
                title="Product"
                item="Home"
                itemPath="/"
                activeItem="Product 6 columns"
            />
            <ProductSixColumns
                productSixColumnsContainer="container-fluid xxl:px-[100px] px-[15px]"
                products={products}
                productFilter={productFilter}
                productFilterPath="6-columns"
                gridTabItems={gridTabItems}
            />
            <FooterComps
                footerContainer="container-fluid xxl:px-[100px] px-[15px]"
                footerItems={footerItems}
            />
        </>
    );
}

export async function getStaticProps() {
    const headerItems = await getAllItems('header');
    const products = await getAllItems('products');
    const productFilter = await getAllItems('product-filter');
    const gridTabItems = await getAllItems('grid-tab-3');
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

ProductFiveColumnsPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    products: PropTypes.instanceOf(Object).isRequired,
    productFilter: PropTypes.instanceOf(Object).isRequired,
    gridTabItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ProductFiveColumnsPage;
