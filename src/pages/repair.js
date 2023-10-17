import PropTypes from 'prop-types';
import HeaderOne from '../components/HeaderComps';
import Breadcrumb from '../components/Breadcrumb';
import Repair from '../components/Repair';
import FooterComps from '../components/FooterComps';
import { getAllItems } from '../lib/ItemsUtil';

function FAQPage({ headerItems, faqItems, footerItems }) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <Breadcrumb
                breadcrumbContainer="container"
                title="Расчет стоимости ремонта"
                item="Главная"
                itemPath="/"
                activeItem="Расчет стоимости ремонта"
            />
            <Repair
                faqItems={faqItems}
                title="Отремонтируем при Вас за 20 минут"
                desc="При оформлении заказа доставку и проверку необходимых запчастей берем на себя."
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
    const faqItems = getAllItems('repair');
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
