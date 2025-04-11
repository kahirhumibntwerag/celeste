const SliderButton = ({ direction, onClick }) => {
    const leftPath = "M20 9.5H2.5291M9.7355 1L1 9.5L9.7355 18";
    const rightPath = "M1 9.5H18.4709M11.2645 1L20 9.5L11.2645 18";

    return (
        <button 
            onClick={onClick}
            className='bg-[#7d7d7d] rounded-full text-white p-3 cursor-pointer'
        >
            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                    d={direction === 'left' ? leftPath : rightPath} 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
};

export default SliderButton; 