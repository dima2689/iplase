import PropTypes from 'prop-types';

function PhoneModels({ brand, phoneModels, checkedModel, onClick }) {
    return (
        <>
            {phoneModels.map((phoneModel) => {
                const btnColor =
                    checkedModel === phoneModel
                        ? 'bg-[#A2D109]'
                        : 'bg-[#f5f5f5]';
                return (
                    <button
                        className={`${btnColor} cursor-pointer m-[3px] px-[5px] h-[34px] text-[12px] uppercase font-medium`}
                        type="button"
                        onClick={(e) => onClick(brand, phoneModel)}
                        // disabled={currentPage === pages[pages.length - 1]}
                        key={phoneModel}
                    >
                        <span className="m-[0px]">{phoneModel}</span>
                    </button>
                );
            })}
        </>
    );
}

PhoneModels.propTypes = {
    brand: PropTypes.string.isRequired,
    phoneModels: PropTypes.instanceOf(Object).isRequired,
    checkedModel: PropTypes.string,
    onClick: PropTypes.instanceOf(Object).isRequired,
};

export default PhoneModels;
