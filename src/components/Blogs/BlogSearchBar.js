import PropTypes from 'prop-types';
import { IoSearchOutline } from 'react-icons/io5';

function BlogSearchBar({ value, changeInput }) {
    return (
        <form>
            <div className="input-field relative w-full">
                <input
                    placeholder="Search ..."
                    type="text"
                    value={value}
                    onChange={changeInput}
                    className="bg-transparent border-0 border-b border-[rgba(0,0,0,.25)] outline-none w-full p-[10px_0_10px_35px] focus-visible:border-primary"
                />
                <div className="absolute top-1/2 -translate-y-1/2 left-0 text-xl opacity-50">
                    <IoSearchOutline />
                </div>
            </div>
        </form>
    );
}

BlogSearchBar.propTypes = {
    changeInput: PropTypes.instanceOf(Function).isRequired,
    value: PropTypes.string.isRequired,
};

export default BlogSearchBar;
