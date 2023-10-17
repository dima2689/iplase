import PropTypes from 'prop-types';
import Link from 'next/link';
import { IoAddSharp } from 'react-icons/io5';

function BlogItem({ blog }) {
    const formattedDate = new Date(blog?.date).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    return (
        <div className="blog-item overflow-hidden group">
            <div className="blog-img relative">
                {blog?.mediumImage && (
                    <Link href={`/blogs/${blog?.slug}`}>
                        <a className="blog-img block">
                            <img
                                className="object-cover object-center w-full"
                                src={`/images/blogs/${blog?.slug}/${blog?.mediumImage}`}
                                alt={blog?.altImage}
                                width={374}
                                height={243}
                            />
                        </a>
                    </Link>
                )}
                <Link href={`/blogs/${blog?.slug}`}>
                    <a className="flex items-center font-normal leading-7 transition ease-in-out duration-500 bg-white absolute right-0 transform translate-x-full bottom-0 group-hover:translate-x-0 py-[5px] px-[14px]">
                        Читать далее
                        <IoAddSharp className="ml-[5px]" />
                    </a>
                </Link>
            </div>
            <div className="blog-content pt-[25px]">
                <h2 className="text-[20px] leading-7 ">
                    <Link href={`/blogs/${blog?.slug}`}>
                        <a className="relative block pb-[15px] mb-[10px] before:bg-[#cacaca] before:absolute before:left-0 before:bottom-[-3px] before:h-[1.5px] before:w-[70px]  before:transition before:ease-in-out before:duration-[800ms] after:bg-primary after:absolute after:left-0 after:bottom-[-3px] after:h-[1.5px] after:w-0 after:transform after:transition-all after:duration-500 group-hover:after:w-[70px]">
                            {blog?.title}
                        </a>
                    </Link>
                </h2>
                <div className="blog-meta text-[14px]">
                    <span className='date after:text-[#999999] after:px-[8px] after:content-["/"]'>
                        {formattedDate}
                    </span>
                    <Link href="https://www.iplace163.ru/">
                        <a className='author font-normal hover:text-primary transition-all after:text-[#999999] after:px-[8px] after:content-["/"]'>
                            {blog?.author}
                        </a>
                    </Link>
                    <span>
                        <span className="text-[#999999] mr-[5px]">раздел:</span>
                        <Link href={`/blogs/${blog?.slug}`}>
                            <a className="category font-normal hover:text-primary transition-all">
                                {blog?.categoryItem}
                            </a>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

BlogItem.propTypes = {
    blog: PropTypes.instanceOf(Object).isRequired,
};

export default BlogItem;
