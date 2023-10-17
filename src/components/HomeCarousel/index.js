import PropTypes from 'prop-types';

function HomeCarousel({ children }) {
    return (
        <div className="home-carousel bg-white relative lg:mb-[515px] sm:mb-[745px]">
            {children}
        </div>
    );
}

HomeCarousel.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
};

export default HomeCarousel;
