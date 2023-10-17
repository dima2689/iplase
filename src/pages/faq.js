import PropTypes from 'prop-types';
import HeaderOne from '../components/HeaderComps';
import Breadcrumb from '../components/Breadcrumb';
import Faq from '../components/FAQ';
import FooterComps from '../components/FooterComps';
import { getAllItems } from '../lib/ItemsUtil';

function FAQPage({ headerItems, faqItems, footerItems }) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <Breadcrumb
                breadcrumbContainer="container"
                title="FAQ"
                item="Home"
                itemPath="/"
                activeItem="FAQ"
            />
            <Faq
                faqItems={faqItems}
                title="Вопросы/Ответы"
                desc="На страние мы сохраняем наиболее популярные вопросы, которые получаем от вас."
            />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export function getStaticProps() {
    const headerItems = getAllItems('header');
    const faqItems = getAllItems('faq');
    const footerItems = getAllItems('footer');

    return {
        props: {
            headerItems,
            faqItems,
            footerItems,
        },
    };
}

FAQPage.propTypes = {
    headerItems: PropTypes.instanceOf(Array).isRequired,
    faqItems: PropTypes.instanceOf(Array).isRequired,
    footerItems: PropTypes.instanceOf(Array).isRequired,
};

export default FAQPage;
