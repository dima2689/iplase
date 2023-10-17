import PropTypes from 'prop-types';

function HomeBoxed({ children }) {
    return (
        <div className="homebox bg-[#f4f5f7]">
            <div className="homebox-inner bg-white xxl:w-[1330px] xl:w-[1140px] m-auto">
                {children}
            </div>
        </div>
    );
}

HomeBoxed.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
};

export default HomeBoxed;
