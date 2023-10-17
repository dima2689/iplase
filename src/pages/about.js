import PropTypes from 'prop-types';
import HeaderOne from '../components/HeaderComps';
import Breadcrumb from '../components/Breadcrumb';
import AboutUs from '../components/AboutUs';
import FooterComps from '../components/FooterComps';
import { getAllItems } from '../lib/ItemsUtil';

function AboutPage({ headerItems, aboutItems, footerItems }) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <Breadcrumb
                breadcrumbContainer="container"
                title="О нас"
                item="О нас"
                itemPath="/"
                activeItem="О нас"
            />
            <AboutUs aboutItems={aboutItems} />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export function getStaticProps() {
    const headerItems = getAllItems('header');
    const aboutItems = getAllItems('about');
    const footerItems = getAllItems('footer');

    return {
        props: {
            headerItems,
            aboutItems,
            footerItems,
        },
    };
}

AboutPage.propTypes = {
    headerItems: PropTypes.instanceOf(Array).isRequired,
    aboutItems: PropTypes.instanceOf(Array).isRequired,
    footerItems: PropTypes.instanceOf(Array).isRequired,
};

export default AboutPage;
