import PropTypes from 'prop-types';
import HeaderOne from '../components/HeaderComps';
import Breadcrumb from '../components/Breadcrumb';
import ComingSoon from '../components/ComingSoon';
import FooterComps from '../components/FooterComps';
import { getAllItems } from '../lib/ItemsUtil';

function ComingSoonPage({ headerItems, comingSoonItems, footerItems }) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <Breadcrumb
                breadcrumbContainer="container"
                title="Обновляем информацию..."
                item="Главная"
                itemPath="/"
                activeItem="Обновляем информацию..."
            />
            <ComingSoon comingSoonItems={comingSoonItems} />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export function getStaticProps() {
    const headerItems = getAllItems('header');
    const comingSoonItems = getAllItems('coming-soon');
    const footerItems = getAllItems('footer');

    return {
        props: {
            headerItems,
            comingSoonItems,
            footerItems,
        },
    };
}

ComingSoonPage.propTypes = {
    headerItems: PropTypes.instanceOf(Array).isRequired,
    comingSoonItems: PropTypes.instanceOf(Array).isRequired,
    footerItems: PropTypes.instanceOf(Array).isRequired,
};

export default ComingSoonPage;
