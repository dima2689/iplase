import PropTypes from 'prop-types';
import { IoArrowForwardOutline } from 'react-icons/io5';

function NewsletterCompsTwo({
    newsletterCName,
    sectionTitle,
    sectionDesc,
    containerCName,
}) {
    return (
        <div className={newsletterCName}>
            <div className={containerCName}>
                <div className="grid grid-cols-12">
                    <div className="lg:col-span-6 md:col-span-5 col-span-12">
                        <div className="section-wrap md:pb-[10px] pb-[40px]">
                            <h2 className="title text-[26px]">
                                {sectionTitle}
                            </h2>
                            <p className="desc">{sectionDesc}</p>
                        </div>
                    </div>
                    <div className="lg:col-span-6 md:col-span-7 col-span-12 self-center">
                        <form className="newsletter-form relative">
                            <input
                                className="w-full bg-white h-[54px] p-[10px_80px_10px_20px] focus:outline-none"
                                type="email"
                                placeholder="Введите ваш email"
                                required
                            />
                            <button
                                type="submit"
                                className="absolute top-0 right-[15px] h-[54px] px-[30px]"
                            >
                                <IoArrowForwardOutline />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

NewsletterCompsTwo.propTypes = {
    newsletterCName: PropTypes.string.isRequired,
    sectionTitle: PropTypes.string.isRequired,
    containerCName: PropTypes.string.isRequired,
    sectionDesc: PropTypes.string.isRequired,
};

export default NewsletterCompsTwo;
