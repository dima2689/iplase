import PropTypes from 'prop-types';
import { getAllItems } from '../lib/ItemsUtil';
import HeaderThree from '../components/HeaderComps/index-3';
import HeroThree from '../components/Hero/index-3';
import NewArrival from '../components/NewArrival';
import FooterCompsThree from '../components/FooterComps/index-3';
import HomeCarousel from '../components/HomeCarousel';

function HomeCarouselPage({
    footerItems,
    heroCarouselItems,
    newArrival,
    products,
    headerItems,
}) {
    return (
        <>
            <HomeCarousel>
                <HeaderThree
                    headerItems={headerItems}
                    logoPath="/home-carousel"
                />
                <HeroThree heroCarouselItems={heroCarouselItems} />
                <NewArrival
                    title="New Arrival"
                    desc="On the other hand, we denounce with right indignation and dislike men demoralized by the charms."
                    path="/products/left-sidebar"
                    btnText="View more"
                    readmoreBtnText="Все товары"
                    newArrival={newArrival}
                    products={products}
                />
            </HomeCarousel>
            <FooterCompsThree footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const headerItems = getAllItems('header');
    const heroCarouselItems = getAllItems('hero-carousel');
    const newArrival = getAllItems('new-arrival');
    const products = getAllItems('products');
    const footerItems = getAllItems('footer');

    return {
        props: {
            headerItems,
            heroCarouselItems,
            newArrival,
            products,
            footerItems,
        },
    };
}

HomeCarouselPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    heroCarouselItems: PropTypes.instanceOf(Object).isRequired,
    newArrival: PropTypes.instanceOf(Object).isRequired,
    products: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default HomeCarouselPage;
