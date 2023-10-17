import PropTypes from 'prop-types';
import { getAllItems, getItemData, getItemsFiles } from '../../lib/ProductUtil';
import HeaderOne from '../../components/HeaderComps';
import Breadcrumb from '../../components/Breadcrumb/index-2';
import ProductDetails from '../../components/Products/ProductDetails';
import FooterComps from '../../components/FooterComps';
import { getPhoneDataById } from '../../utils/priceFetcher';

function ProductDetailPage({
    product,
    headerItems,
    productDetailTabItems,
    footerItems,
}) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <Breadcrumb
                breadcrumbContainer="container"
                product={product}
                item="Главная"
                itemPath="/"
            />
            <ProductDetails
                product={product}
                productDetailTabItems={productDetailTabItems}
                productFilterPath="carousel"
            />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export async function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const headerItems = await getAllItems('header');
    const product = getItemData(slug, 'products');
    const productDetailTabItems = await getAllItems('product-detail-tab');
    const footerItems = await getAllItems('footer');

    // fetch current price from Google DB
    const productData = await getPhoneDataById(product.id);
    if (productData.success) {
        const fetchedPrice = productData.data.price || product.price;
        product.price = fetchedPrice;
    }

    return {
        props: {
            headerItems,
            product,
            productDetailTabItems,
            footerItems,
        },
    };
}

export function getStaticPaths() {
    const productFilenames = getItemsFiles('products');

    const slugs = productFilenames.map((fileName) =>
        fileName.replace(/\.md$/, '')
    );

    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false,
    };
}

ProductDetailPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    product: PropTypes.instanceOf(Object).isRequired,
    productDetailTabItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ProductDetailPage;
