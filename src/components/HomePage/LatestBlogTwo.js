import Link from 'next/link';
import PropTypes from 'prop-types';
import { IoArrowForwardOutline } from 'react-icons/io5';
import BlogItem from '../Blogs/BlogItem';

function LatestBlogTwo({ sectionTitle, blogs, btnPath, btnText }) {
    const slice = blogs.slice(0, 3);
    return (
        <div className="latest-blog lg:py-[90px] md:py-[70px] py-[40px]">
            <div className="container">
                <div className="section-title flex items-center justify-between pb-[50px]">
                    <h2>{sectionTitle}</h2>
                    <div className="view-all">
                        <Link href={btnPath}>
                            <a className="flex items-center transition-all hover:text-primary">
                                {btnText}
                                <IoArrowForwardOutline className="ml-[5px]" />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 lm:grid-cols-2 gap-[25px]">
                    {slice.map((blog) => (
                        <BlogItem blog={blog} key={blog.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

LatestBlogTwo.propTypes = {
    blogs: PropTypes.instanceOf(Array).isRequired,
    sectionTitle: PropTypes.string.isRequired,
    btnPath: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired,
};

export default LatestBlogTwo;
