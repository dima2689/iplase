import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoChevronDownSharp } from 'react-icons/io5';

function PhoneProblems({ problemItems, checkedProblem, onClick }) {
    return (
        <>
            {problemItems.map((problem) => {
                const btnColor =
                    checkedProblem === problem
                        ? 'bg-[#A2D109]'
                        : 'bg-[#f5f5f5]';

                return (
                    <button
                        className={`${btnColor} cursor-pointer m-[5px] px-[13px] h-[34px] text-[12px] uppercase font-medium`}
                        type="button"
                        onClick={(e) => onClick(problem)}
                        // disabled={currentPage === pages[pages.length - 1]}
                        key={Math.random()}
                    >
                        <span className="ml-[10px]">{problem}</span>
                    </button>
                );
            })}
        </>
    );
}

PhoneProblems.propTypes = {
    problemItems: PropTypes.instanceOf(Object).isRequired,
    checkedProblem: PropTypes.string,
    onClick: PropTypes.instanceOf(Object).isRequired,
};

export default PhoneProblems;
