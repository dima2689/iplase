import PropTypes from 'prop-types';
import MainContent from './main-content';
import ProductDetailTab from './ProductDetailTab';

function ProductDetails({ product, productDetailTabItems }) {
    return (
        <main>
            <MainContent product={product} />
            {/* TODO skip for now tabs */}
            {/* <ProductDetailTab
                product={product}
                productDetailTabItems={productDetailTabItems}
            /> */}
        </main>
    );
}

ProductDetails.propTypes = {
    product: PropTypes.instanceOf(Object).isRequired,
    productDetailTabItems: PropTypes.instanceOf(Object).isRequired,
};

export default ProductDetails;
