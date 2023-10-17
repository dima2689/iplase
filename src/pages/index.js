import PropTypes from 'prop-types';
import HeaderOne from '../components/HeaderComps';
import CategoriesBanner from '../components/CategoriesBanner';
import VideoModalTwo from '../components/VideoModal/index-2';
import ProductTab from '../components/ProductTab';
import LatestBlogTwo from '../components/HomePage/LatestBlogTwo';
import NewsletterCompsTwo from '../components/NewsletterComps/index-2';
import FooterComps from '../components/FooterComps';
import { getAllItems } from '../lib/ItemsUtil';
import { getAllItems as getAllProducts } from '../lib/ProductUtil';

function HomeCategoriesPage({
    headerItems,
    categoryBanner,
    videoModalItems,
    products,
    productFilter,
    productTab,
    blogs,
    footerItems,
}) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <CategoriesBanner
                categoryBannerCName="category-banner-area pt-[25px]"
                categoryBanner={categoryBanner}
                products={products}
            />
            <VideoModalTwo
                videoModalItems={videoModalItems}
                containerCName="container"
            />
            <ProductTab
                products={products}
                productTab={productTab}
                tabTitle="Выбор покупателей"
                containerCName="container"
                productFilter={productFilter}
                productFilterPath="left-sidebar"
            />
            <LatestBlogTwo
                blogs={blogs}
                sectionTitle="Информация"
                btnPath="/blogs/sidebar"
                btnText="Загрузить все"
            />
            <NewsletterCompsTwo
                newsletterCName="newsletter-area border-b border-[#ededed] xl:pb-[120px] lg:pb-[100px] md:pb-[80px] pb-[50px]"
                sectionTitle="Новости"
                sectionDesc="Почувствуйте, насколько мы вас любим и будьте в курсе самых выгодных предложений"
                containerCName="container bg-[#f4f5f7] md:py-[20px] md:px-[50px] py-[10px] px-[20px]"
            />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export async function getStaticProps() {
    const headerItems = getAllItems('header');
    const categoryBanner = getAllItems('category-banner');
    const videoModalItems = getAllItems('video-modal');
    const products = getAllProducts('products');
    const productFilter = getAllItems('product-filter');
    const productTab = getAllItems('product-tab');
    const blogs = getAllItems('blogs');
    const footerItems = getAllItems('footer');

    return {
        props: {
            headerItems,
            categoryBanner,
            videoModalItems,
            products,
            productFilter,
            productTab,
            blogs,
            footerItems,
        },
    };
}

HomeCategoriesPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    categoryBanner: PropTypes.instanceOf(Object).isRequired,
    videoModalItems: PropTypes.instanceOf(Object).isRequired,
    products: PropTypes.instanceOf(Object).isRequired,
    productTab: PropTypes.instanceOf(Object).isRequired,
    productFilter: PropTypes.instanceOf(Object).isRequired,
    blogs: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default HomeCategoriesPage;
