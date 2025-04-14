import React from 'react'
import { useQuantityStore, useProductStore } from '../../store/productPageStore'

const QuantityBar = () => {
    const selectedQuantity = useQuantityStore((state) => state.selectedQuantity);
    const setSelectedQuantity = useQuantityStore((state) => state.setSelectedQuantity);
    const getMaxQuantity = useQuantityStore((state) => state.getMaxQuantity);
    const product = useProductStore((state) => state.product);

    const decrementQuantity = () => {
        if (selectedQuantity > 1) {
            setSelectedQuantity(selectedQuantity - 1);
        }
    };

    const incrementQuantity = () => {
        const maxQuantity = getMaxQuantity(product);
        if (selectedQuantity < maxQuantity) {
            setSelectedQuantity(selectedQuantity + 1);
        }
    };

    return (
        <div className="flex gap-4 justify-between border-1 border-gray-400 p-2">
            <span className="cursor-pointer text-2xl" onClick={decrementQuantity}>-</span>
            <span className='text-2x'>{selectedQuantity}</span>
            <span className="cursor-pointer text-2xl" onClick={incrementQuantity}>+</span>
        </div>
    )
}

export default QuantityBar