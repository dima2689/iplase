import PropTypes from 'prop-types';
import HeaderOne from '../components/HeaderComps';
import Error404 from '../components/Error404';
import FooterComps from '../components/FooterComps';
import { getAllItems } from '../lib/ItemsUtil';

function Error404Page({ headerItems, errorItems, footerItems }) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <Error404 errorItems={errorItems} />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export function getStaticProps() {
    const headerItems = getAllItems('header');
    const errorItems = getAllItems('error404');
    const footerItems = getAllItems('footer');

    return {
        props: {
            headerItems,
            errorItems,
            footerItems,
        },
    };
}

Error404Page.propTypes = {
    headerItems: PropTypes.instanceOf(Array).isRequired,
    errorItems: PropTypes.instanceOf(Array).isRequired,
    footerItems: PropTypes.instanceOf(Array).isRequired,
};

export default Error404Page;
