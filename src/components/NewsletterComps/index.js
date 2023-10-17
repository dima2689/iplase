import PropTypes from 'prop-types';

function NewsletterComps({ sectionTitle }) {
    return (
        <div className="newsletter-area">
            <div className="container">
                <div className="grid md:grid-cols-2">
                    <div className="section-title pb-[10px] md:mb-0 mb-[30px] relative after:bg-primary after:absolute after:left-0 after:transform after:bottom-0 after:h-[4px] after:w-[70px]">
                        <h2>{sectionTitle}</h2>
                    </div>
                    <form className="newsletter-form relative">
                        <input
                            className="w-full bg-[#f4f5f7] h-[54px] lm:p-[10px_170px_10px_20px] p-[10px] focus:outline-none"
                            type="email"
                            placeholder="Your email address"
                        />
                        <button
                            type="submit"
                            className="bg-black text-white lm:absolute lm:top-0 lm:right-0 px-[40px] h-[54px] max-sm:mt-[30px]"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

NewsletterComps.propTypes = {
    sectionTitle: PropTypes.string.isRequired,
};

export default NewsletterComps;
