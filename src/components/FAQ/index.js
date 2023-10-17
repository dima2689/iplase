import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoChevronDownSharp } from 'react-icons/io5';

function Faq({ faqItems, title, desc }) {
    const [selected, setSelected] = useState({});
    const toggle = (items) => {
        if (selected === items) {
            setSelected({});
            return;
        }

        setSelected(items);
    };
    return (
        <div className="faq text-center border-b border-[#ededed] xl:py-[40px] lg:py-[25px] md:py-[15px] py-[10px]">
            <div className="container max-w-4xl">
                <h2 className="mb-[1px]">{title}</h2>
                <p className="mb-[15px]">{desc}</p>
                <div className="accorddion p-[15px] -m-[15px]">
                    {faqItems?.map((items) => (
                        <div
                            className={`${
                                selected === items ? 'item active' : 'item'
                            } bg-white shadow-[0_18px_40px_rgba(51,_51,_51,_0.1)] mb-[15px] last:mb-0`}
                            key={items.id}
                        >
                            <div
                                className="title flex items-center justify-between cursor-pointer"
                                onClick={() => toggle(items)}
                            >
                                <h2 className="sm:text-[18px] text-[16px] leading-[22px]">
                                    {items.question}
                                </h2>
                                <span className="navigation">
                                    <IoChevronDownSharp />
                                </span>
                            </div>
                            <div className="content p-[30px]">
                                {items.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

Faq.propTypes = {
    faqItems: PropTypes.instanceOf(Object).isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
};

export default Faq;
