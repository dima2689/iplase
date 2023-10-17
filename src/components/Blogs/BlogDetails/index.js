import MarkdownIt from 'markdown-it';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FaQuoteRight } from 'react-icons/fa';
import DisqusForm from '../../DisqusForm';
import PageNavigation from './PageNavigation';

function BlogDetail({ blog, prevBlog, nextBlog }) {
    const formattedDate = new Date(blog?.date).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <div className="blog-detail border-b border-[#ededed] xl:py-[120px] lg:py-[100px] md:py-[80px] py-[50px]">
            <div className="container">
                <div className="blog-detail-item">
                    {blog?.extraLargeImage && (
                        <div className="blog-detail-img">
                            <img
                                className="object-cover object-center w-full"
                                src={`/images/blogs/${blog?.slug}/${blog?.extraLargeImage}`}
                                alt={blog?.altImage}
                                width={1170}
                                height={761}
                            />
                        </div>
                    )}

                    <div className="blog-detail-content pt-[25px]">
                        <h2 className="lm:text-[30px] text-[24px] mb-[15px]">
                            {blog?.title}
                        </h2>
                        <div className="inner-content lg:ml-[145px]">
                            <div className="blog-meta text-[14px] mb-[15px]">
                                <span className='date after:text-[#999999] after:px-[8px] after:content-["/"]'>
                                    {formattedDate}
                                </span>
                                <Link href="https://www.iplace163.ru/">
                                    <a className='author font-normal hover:text-primary transition-all after:text-[#999999] after:px-[8px] after:content-["/"]'>
                                        {blog?.author}
                                    </a>
                                </Link>
                                <span>
                                    {/* <span className="text-[#999999] mr-[5px]">
                                        раздел:
                                    </span> */}
                                    <span className="category font-norma">
                                        {blog?.categoryItem}
                                    </span>
                                </span>
                            </div>
                            <p className="lg:max-w-[810px]">{blog?.desc}</p>
                            <blockquote className="relative pt-[4px] pl-[35px] my-[35px] ml-[35px]">
                                <span className="absolute top-0 left-0 transform -rotate-[180deg]">
                                    <FaQuoteRight />
                                </span>
                                <p className="blockquote-desc font-medium leading-6">
                                    {blog?.blockquoteDesc}
                                </p>
                            </blockquote>
                        </div>

                        <div className="rich-text-item">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: new MarkdownIt().render(
                                        blog.content
                                    ),
                                }}
                            />
                            <div className="rich-text-img grid grid-cols-2 gap-[30px]">
                                <div className="single-img">
                                    <img
                                        className="w-full"
                                        src={blog?.singleImgOne}
                                        alt={blog?.singleImgAlt}
                                    />
                                </div>
                                <div className="single-img">
                                    <img
                                        className="w-full"
                                        src={blog?.singleImgTwo}
                                        alt={blog?.singleImgAlt}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PageNavigation prevBlog={prevBlog} nextBlog={nextBlog} />
                <DisqusForm />
            </div>
        </div>
    );
}

BlogDetail.propTypes = {
    blog: PropTypes.instanceOf(Object).isRequired,
    prevBlog: PropTypes.instanceOf(Object).isRequired,
    nextBlog: PropTypes.instanceOf(Object).isRequired,
};

export default BlogDetail;
