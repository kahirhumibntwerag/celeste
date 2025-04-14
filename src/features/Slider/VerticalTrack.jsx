import React from 'react';
const VerticalTrack = ({ 
    images,
    firstImageRef,
    currentSlideIndex,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd 
}) => {
    
    return (
        <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
                transform: `translateY(-${currentSlideIndex * (firstImageRef?.current?.offsetHeight)}px)`,
            }}
            className="flex flex-col gap-2 transition-all duration-500 w-[88px] h-[400px] "
        >
            {images.map((image, idx) => (
                <div
                    ref={idx === 0 ? firstImageRef : null}
                    key={idx}
                    className="aspect-[1/1] w-[88px] shrink-0 cursor-pointer"
                >
                    <img 
                        src={image} 
                        alt={`Product view ${idx + 1}`} 
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            ))}
        </div>
    );
};

export default VerticalTrack; 