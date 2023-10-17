import PropTypes from 'prop-types';

function HomeCollection({ children }) {
    return (
        <div className="home-collection bg-white relative lg:mb-[515px] sm:mb-[745px]">
            {children}
        </div>
    );
}

HomeCollection.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
};

export default HomeCollection;
