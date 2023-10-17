import PropTypes from 'prop-types';
import { getAllItems, getFeaturedItems } from '../lib/ItemsUtil';
import TransparentHeader from '../components/HeaderComps/TransparentHeader';
import HeroOne from '../components/Hero';
import FeaturedProduct from '../components/HomePage/FeaturedProduct';
import BestSellingProduct from '../components/HomePage/BestSellingProduct';
import OfferColection from '../components/OfferColection';
import LatestBlog from '../components/HomePage/LatestBlog';
import NewsletterComps from '../components/NewsletterComps';
import FooterComps from '../components/FooterComps';

function HomePage({
    headerItems,
    heroDefaultItems,
    featuredProduct,
    products,
    productFilter,
    offerColection,
    blogs,
    footerItems,
}) {
    return (
        <>
            <TransparentHeader headerItems={headerItems} />
            <HeroOne heroDefaultItems={heroDefaultItems} />
            <FeaturedProduct featuredProduct={featuredProduct} />
            <BestSellingProduct
                products={products}
                productFilter={productFilter}
                sectionTitle="Best Selling"
                productFilterPath="left-sidebar"
            />
            <OfferColection offerColection={offerColection} />
            <LatestBlog blogs={blogs} sectionTitle="Our Blog" />
            <NewsletterComps sectionTitle="Новости" />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export function getStaticProps() {
    const headerItems = getAllItems('header');
    const heroDefaultItems = getAllItems('hero-default');
    const featuredProduct = getAllItems('featured-product');
    const products = getAllItems('products');
    const productFilter = getAllItems('product-filter');
    const BestSellingProduct = getFeaturedItems(products);
    const offerColection = getAllItems('offer-colection');
    const blogs = getAllItems('blogs');
    const LatestBlog = getFeaturedItems(blogs);
    const footerItems = getAllItems('footer');

    return {
        props: {
            headerItems,
            heroDefaultItems,
            featuredProduct,
            products: BestSellingProduct,
            productFilter,
            offerColection,
            blogs: LatestBlog,
            footerItems,
        },
    };
}

HomePage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    heroDefaultItems: PropTypes.instanceOf(Object).isRequired,
    featuredProduct: PropTypes.instanceOf(Object).isRequired,
    products: PropTypes.instanceOf(Object).isRequired,
    productFilter: PropTypes.instanceOf(Object).isRequired,
    offerColection: PropTypes.instanceOf(Object).isRequired,
    blogs: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default HomePage;
