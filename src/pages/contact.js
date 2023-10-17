import PropTypes from 'prop-types';
import HeaderOne from '../components/HeaderComps';
import Breadcrumb from '../components/Breadcrumb';
import ContactUs from '../components/Contact';
import FooterComps from '../components/FooterComps';
import { getAllItems } from '../lib/ItemsUtil';

function ContactPage({ headerItems, contactItems, footerItems }) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <Breadcrumb
                breadcrumbContainer="container"
                title="Контакты"
                item="Контакты"
                itemPath="/"
                activeItem="Contact"
            />
            <ContactUs contactItems={contactItems} />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export function getStaticProps() {
    const headerItems = getAllItems('header');
    const contactItems = getAllItems('contact');
    const footerItems = getAllItems('footer');

    return {
        props: {
            headerItems,
            contactItems,
            footerItems,
        },
    };
}

ContactPage.propTypes = {
    headerItems: PropTypes.instanceOf(Array).isRequired,
    contactItems: PropTypes.instanceOf(Array).isRequired,
    footerItems: PropTypes.instanceOf(Array).isRequired,
};

export default ContactPage;
