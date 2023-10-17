import PropTypes from 'prop-types';
import { getAllItems } from '../lib/ItemsUtil';
import HomeCollection from '../components/HomeCollection';
import HeaderFour from '../components/HeaderComps/index-4';
import HeroFour from '../components/Hero/index-4';
import NewsletterCompsThree from '../components/NewsletterComps/index-3';
import NewArrivalTwo from '../components/NewArrival/index-2';
import FooterCompsThree from '../components/FooterComps/index-3';

function HomeCarouselPage({
    footerItems,
    heroCollectionItems,
    newArrivalTwo,
    products,
    headerItems,
}) {
    return (
        <>
            <HomeCollection>
                <HeaderFour headerItems={headerItems} />
                <HeroFour
                    heroCollectionItems={heroCollectionItems}
                    btnText="Shop Now"
                />
                <NewsletterCompsThree
                    newsletterCName="newsletter-area lg:pt-[95px] md:pt-[75px] pt-[45px]"
                    sectionTitle="Sign Up To Get 50% Discount"
                    sectionDesc="Subscribe to our newsletter and get a 50% discount.The joy of our customersis a great honor for us."
                    containerCName="container"
                />
                <NewArrivalTwo
                    newArrivalTwo={newArrivalTwo}
                    products={products}
                    excerpt="Various versions have evolved over the years, some times by accident, some times on purpose."
                    btnText="Shop Now"
                />
            </HomeCollection>
            <FooterCompsThree footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const headerItems = getAllItems('header');
    const heroCollectionItems = getAllItems('hero-collection');
    const newArrivalTwo = getAllItems('new-arrival-two');
    const products = getAllItems('products');
    const footerItems = getAllItems('footer');

    return {
        props: {
            headerItems,
            heroCollectionItems,
            newArrivalTwo,
            products,
            footerItems,
        },
    };
}

HomeCarouselPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    heroCollectionItems: PropTypes.instanceOf(Object).isRequired,
    newArrivalTwo: PropTypes.instanceOf(Object).isRequired,
    products: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default HomeCarouselPage;
