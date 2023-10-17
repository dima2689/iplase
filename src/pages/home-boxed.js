import PropTypes from 'prop-types';
import HomeBoxed from '../components/HomeBoxed';
import HeaderTwo from '../components/HeaderComps/index-2';
import HeroTwo from '../components/Hero/index-2';
import VideoModalTwo from '../components/VideoModal/index-2';
import ProductTab from '../components/ProductTab';
import Brand from '../components/Brand';
import NewsletterCompsTwo from '../components/NewsletterComps/index-2';
import FooterCompsTwo from '../components/FooterComps/index-2';
import { getAllItems } from '../lib/ItemsUtil';

function HomeBoxedPage({
    headerItems,
    heroBoxedItems,
    videoModalItems,
    products,
    productTab,
    productFilter,
    brandItems,
    footerItems,
}) {
    return (
        <HomeBoxed>
            <HeaderTwo headerItems={headerItems} logoPath="/home-boxed" />
            <HeroTwo heroBoxedItems={heroBoxedItems} />
            <VideoModalTwo
                videoModalItems={videoModalItems}
                containerCName="homebox-container xl:mx-[100px] mx-[15px]"
            />
            <ProductTab
                products={products}
                productTab={productTab}
                tabTitle="Выбор покупателей"
                containerCName="homebox-container xl:mx-[100px] mx-[15px]"
                productFilter={productFilter}
                productFilterPath="left-sidebar"
            />
            <Brand brandItems={brandItems} />
            <NewsletterCompsTwo
                newsletterCName="newsletter-area"
                sectionTitle="Новости"
                sectionDesc="Subscribe our newsletter and get discount"
                containerCName="homebox-container xl:mx-[100px] mx-[15px] bg-[#f4f5f7] py-[50px] lg:px-[70px] px-[15px]"
            />
            <FooterCompsTwo footerItems={footerItems} />
        </HomeBoxed>
    );
}

export function getStaticProps() {
    const headerItems = getAllItems('header');
    const heroBoxedItems = getAllItems('hero-boxed');
    const videoModalItems = getAllItems('video-modal');
    const products = getAllItems('products');
    const productFilter = getAllItems('product-filter');
    const productTab = getAllItems('product-tab');
    const brandItems = getAllItems('brand');
    const footerItems = getAllItems('footer');

    return {
        props: {
            headerItems,
            heroBoxedItems,
            videoModalItems,
            products,
            productFilter,
            productTab,
            brandItems,
            footerItems,
        },
    };
}

HomeBoxedPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    heroBoxedItems: PropTypes.instanceOf(Object).isRequired,
    videoModalItems: PropTypes.instanceOf(Object).isRequired,
    products: PropTypes.instanceOf(Object).isRequired,
    productFilter: PropTypes.instanceOf(Object).isRequired,
    productTab: PropTypes.instanceOf(Object).isRequired,
    brandItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default HomeBoxedPage;
