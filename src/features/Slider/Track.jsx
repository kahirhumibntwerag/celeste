import React from 'react';
import Product from '../Product/Product';

const Track = ({ 
    products, 
    firstProductRef,
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
                transform: `translateX(-${currentSlideIndex * (firstProductRef?.current?.offsetWidth)}px)`,
            }}
            className="flex p-4 transition-all duration-500"
        >
            {products.map((product, idx) => (
                <div
                    ref={idx === 0 ? firstProductRef : null}
                    key={product.id}
                    className="flex-shrink-0 w-[300px]"
                >
                    <Product product={product} />
                </div>
            ))}
        </div>
    );
};

export default Track; 