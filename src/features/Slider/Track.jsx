import React from 'react';
import Product from '../Product/Product';
import { AnimatePresence, motion } from "framer-motion"; // use framer-motion not motion/react

const containerVariants = {
    animate: {
        transition: {
            staggerChildren: 0.1, // delay between children
        },
    },
};

const childVariants = {
    initial: { opacity: 0, y: 600 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Track = ({ 
    products, 
    firstProductRef,
    currentSlideIndex,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd 
}) => {
    return (
        <motion.div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
                transform: `translateX(-${currentSlideIndex * (firstProductRef?.current?.offsetWidth)}px)`,
            }}
            className="flex p-4 transition-all duration-500"
            variants={containerVariants}
            initial="initial"
            animate="animate"
        >
            {products.map((product, idx) => (
                <motion.div
                    variants={childVariants}
                    ref={idx === 0 ? firstProductRef : null}
                    key={product['product_id']}
                    className="flex-shrink-0 w-[300px]"
                >
                    <Product product={product} />
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Track;
