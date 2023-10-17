import PropTypes from 'prop-types';
import BlogWithSidebar from '../../../components/Blogs/BlogWithSidebar';
import Breadcrumb from '../../../components/Breadcrumb';
import FooterComps from '../../../components/FooterComps';
import HeaderOne from '../../../components/HeaderComps';
import { getBlogTags } from '../../../lib/BlogTags';
import { getBlogCategories } from '../../../lib/BlogCategories';
import { getAllItems } from '../../../lib/ItemsUtil';

function BlogCategoryPage({
    headerItems,
    blogs,
    categories,
    tags,
    footerItems,
}) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <Breadcrumb
                breadcrumbContainer="container"
                title="Публикации"
                item="Home"
                itemPath="/"
                activeItem="Публикации"
            />
            <BlogWithSidebar
                blogs={blogs}
                categories={categories}
                tags={tags}
            />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export const getStaticProps = ({ params }) => {
    const { slug } = params;
    const headerItems = getAllItems('header');
    const blogs = getAllItems('blogs');
    const filteredblogs = blogs
        .map((blog) => ({
            ...blog,
            uniqueCategory: blog.category.find(
                (cate) => cate?.split('|')[0]?.trim() === slug
            ),
        }))
        .filter((blog) => blog.uniqueCategory?.split('|')[0]?.trim() === slug);
    const categories = getBlogCategories();
    const tags = getBlogTags();
    const footerItems = getAllItems('footer');

    return {
        props: {
            headerItems,
            blogs: filteredblogs,
            categories,
            tags,
            footerItems,
        },
    };
};

export const getStaticPaths = () => {
    const categories = getBlogCategories();

    return {
        paths: categories.map((category) => ({
            params: { slug: category.split('|')[0].trim() },
        })),
        fallback: false,
    };
};

BlogCategoryPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    blogs: PropTypes.instanceOf(Object).isRequired,
    categories: PropTypes.instanceOf(Object).isRequired,
    tags: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default BlogCategoryPage;
