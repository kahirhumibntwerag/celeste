import React from 'react';

const VerticalSliderButton = ({ direction, onClick }) => {
    const upPath = "M9.5 20V2.5291M1 9.7355L9.5 1L18 9.7355";
    const downPath = "M9.5 1V18.4709M1 11.2645L9.5 20L18 11.2645";

    return (
        <button 
            onClick={onClick}
            className='bg-white rounded-full text-gray-700 p-2 cursor-pointer border-1 border-gray-700'
        >
            <svg width="15" height="15" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                    d={direction === 'up' ? upPath : downPath} 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
};

export default VerticalSliderButton; 