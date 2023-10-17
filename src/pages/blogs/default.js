import PropTypes from 'prop-types';
import HeaderOne from '../../components/HeaderComps';
import Breadcrumb from '../../components/Breadcrumb';
import BlogDefault from '../../components/Blogs/BlogDefault';
import FooterComps from '../../components/FooterComps';
import { getAllItems } from '../../lib/ItemsUtil';

function BlogDefaultPage({ headerItems, blogs, footerItems }) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <Breadcrumb
                breadcrumbContainer="container"
                title="Blog Default"
                item="Home"
                itemPath="/"
                activeItem="Blog Default"
            />
            <BlogDefault blogs={blogs} />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export function getStaticProps() {
    const headerItems = getAllItems('header');
    const blogs = getAllItems('blogs');
    const footerItems = getAllItems('footer');

    return {
        props: {
            headerItems,
            blogs,
            footerItems,
        },
    };
}

BlogDefaultPage.propTypes = {
    headerItems: PropTypes.instanceOf(Array).isRequired,
    blogs: PropTypes.instanceOf(Array).isRequired,
    footerItems: PropTypes.instanceOf(Array).isRequired,
};

export default BlogDefaultPage;
