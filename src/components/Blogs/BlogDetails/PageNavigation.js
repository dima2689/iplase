import PropTypes from 'prop-types';
import Link from 'next/link';
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5';

function PageNavigation({ prevBlog, nextBlog }) {
    return (
        <div className="page-navigation pt-[60px]">
            <div className="page-navigation-inner border-t border-b border-[#cacaca] py-[40px]">
                <div className="grid lm:grid-cols-2 grid-cols-1 relative text-[18px] z-[1]">
                    <div className="page-navigation-holder flex">
                        <Link href={`/blogs/${prevBlog?.slug}`}>
                            <a
                                className={`prev flex justify-start ${
                                    !prevBlog?.slug
                                        ? 'pointer-events-none opacity-60'
                                        : 'text-[#666666]'
                                }`}
                            >
                                <span className="icon flex items-center justify-center bg-[#f4f5f7] min-w-[30px] h-[70px] mr-[40px] transition-all hover:bg-primary hover:text-white">
                                    <IoChevronBackSharp />
                                </span>
                            </a>
                        </Link>
                        <div className="page-navigation-item flex items-center">
                            <div className="page-navigation-info">
                                <h2 className="text-[16px] font-normal max-w-[320px] text-[#666666] mb-[15px]">
                                    {prevBlog?.title}
                                </h2>
                                <Link href={`/blogs/${prevBlog?.slug}`}>
                                    <a
                                        className={`prev text-[16px] font-normal ${
                                            !prevBlog?.slug
                                                ? 'pointer-events-none opacity-60'
                                                : 'text-[#666666]'
                                        }`}
                                    >
                                        Предыдущая
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="page-navigation-holder flex justify-end max-sm:border-t max-sm:pt-[30px] max-sm:mt-[30px]">
                        <div className="page-navigation-item flex items-center">
                            <div className="page-navigation-info">
                                <h2 className="text-[16px] font-normal max-w-[320px] text-[#666666] mb-[15px]">
                                    {nextBlog?.title}
                                </h2>
                                <Link href={`/blogs/${nextBlog?.slug}`}>
                                    <a
                                        className={`prev text-[16px] font-normal ${
                                            !nextBlog?.slug
                                                ? 'pointer-events-none opacity-60'
                                                : 'text-[#666666]'
                                        }`}
                                    >
                                        Следующая
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <Link href={`/blogs/${nextBlog.slug}`}>
                            <a
                                className={`prev flex justify-end ${
                                    !nextBlog?.slug
                                        ? 'pointer-events-none opacity-60'
                                        : 'text-[#666666]'
                                }`}
                            >
                                <span className="icon flex items-center justify-center bg-[#f4f5f7] min-w-[30px] h-[70px] ml-[40px] transition-all hover:bg-primary hover:text-white">
                                    <IoChevronForwardSharp />
                                </span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

PageNavigation.propTypes = {
    prevBlog: PropTypes.instanceOf(Object).isRequired,
    nextBlog: PropTypes.instanceOf(Object).isRequired,
};

export default PageNavigation;
