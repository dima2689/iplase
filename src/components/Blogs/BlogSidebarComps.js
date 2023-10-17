import PropTypes from 'prop-types';
import Link from 'next/link';
import BlogSearchBar from './BlogSearchBar';

function BlogSidebarComps({
    blogs,
    categories,
    tags,
    searchInput,
    setSearchInput,
}) {
    return (
        <div className="blog-sidebar">
            <div className="blog-sidebar-widget">
                <BlogSearchBar
                    value={searchInput}
                    changeInput={(e) => setSearchInput(e.target.value)}
                />
            </div>
            <div className="blog-sidebar-widget">
                <h2 className="widget-title text-[18px] mt-[40px]">
                    Последние
                </h2>
                <ul className="pt-[15px]">
                    {blogs.slice(-3).map((recentBlog) => (
                        <li
                            key={recentBlog.id}
                            className="flex border-b border-[#dddddd] pb-[10px] mb-[10px] last:border-b-0 last:pb-0 last:mb-0"
                        >
                            <Link href={`/blogs/${recentBlog?.slug}`}>
                                <a className="text-[14px] leading-[24px] font-normal">
                                    {recentBlog?.title}
                                    <span className="text-[#999999] ml-[5px]">
                                        {recentBlog?.date}
                                    </span>
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="blog-sidebar-widget">
                <h2 className="widget-title text-[18px] mt-[40px]">Разделы</h2>
                <ul className="pt-[15px]">
                    {categories &&
                        categories?.map((category) => (
                            <li className="mb-[6px] last:mb-0" key={category}>
                                <Link
                                    href={`/blogs/category/${category
                                        .split('|')[0]
                                        .trim()}`}
                                >
                                    <a
                                        className="flex justify-between capitalize font-normal leading-[28px] transition-all hover:text-primary"
                                        dangerouslySetInnerHTML={{
                                            __html: category.replace('|', ''),
                                        }}
                                    />
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
            <div className="blog-sidebar-widget pt-[40px]">
                <img
                    src="/images/blog-sidebar/widget-banner.jpg"
                    alt="Widget Banner"
                />
            </div>
            <div className="blog-sidebar-widget">
                <h2 className="widget-title text-[18px] mt-[40px]">Теги</h2>
                <ul className="flex flex-wrap pt-[15px]">
                    {tags &&
                        tags?.map((tag) => (
                            <li key={tag}>
                                <Link href={`/blogs/tag/${tag}`}>
                                    <a className="bg-[#f3f4f7] rounded-[5px] transition-all duration-500 text-[#767676] capitalize font-normal m-[5px] py-[8px] px-[20px] inline-block align-middle hover:bg-black hover:text-white">
                                        {tag}
                                    </a>
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}

BlogSidebarComps.propTypes = {
    blogs: PropTypes.instanceOf(Object).isRequired,
    categories: PropTypes.instanceOf(Object).isRequired,
    tags: PropTypes.instanceOf(Object).isRequired,
    searchInput: PropTypes.string.isRequired,
    setSearchInput: PropTypes.instanceOf(Function).isRequired,
};

export default BlogSidebarComps;
