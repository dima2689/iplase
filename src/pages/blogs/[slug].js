import PropTypes from 'prop-types';
import HeaderOne from '../../components/HeaderComps';
import BlogDetail from '../../components/Blogs/BlogDetails';
import FooterComps from '../../components/FooterComps';
import { getAllItems, getItemData, getItemsFiles } from '../../lib/ItemsUtil';

function BlogDetailPage({
    blog,
    headerItems,
    footerItems,
    prevBlog,
    nextBlog,
}) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <BlogDetail blog={blog} prevBlog={prevBlog} nextBlog={nextBlog} />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const headerItems = getAllItems('header');
    const blog = getItemData(slug, 'blogs');
    const blogs = getAllItems('blogs');
    const currentBlogIndex = blogs.findIndex((blog) => blog.slug === slug);
    const nextBlog = blogs[currentBlogIndex + 1]
        ? blogs[currentBlogIndex + 1]
        : {};
    const prevBlog = blogs[currentBlogIndex - 1]
        ? blogs[currentBlogIndex - 1]
        : {};
    const footerItems = getAllItems('footer');
    return {
        props: {
            headerItems,
            blog,
            prevBlog,
            nextBlog,
            footerItems,
        },
    };
}

export function getStaticPaths() {
    const blogFilenames = getItemsFiles('blogs');

    const slugs = blogFilenames.map((fileName) =>
        fileName.replace(/\.md$/, '')
    );

    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false,
    };
}

BlogDetailPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    blog: PropTypes.instanceOf(Object).isRequired,
    prevBlog: PropTypes.instanceOf(Object).isRequired,
    nextBlog: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default BlogDetailPage;
