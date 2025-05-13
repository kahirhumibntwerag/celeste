import React from 'react'
import { useQuantityStore } from '../../store/productPageStore'

const QuantityBar = () => {
    const selectedQuantity = useQuantityStore((state) => state.selectedQuantity);
    const setSelectedQuantity = useQuantityStore((state) => state.setSelectedQuantity);
    
    const decrementQuantity = () => {
        if (selectedQuantity > 1) {
            setSelectedQuantity(selectedQuantity - 1);
        }
    };

    const incrementQuantity = () => {
        setSelectedQuantity(selectedQuantity + 1);
    };

    return (
        <div className="flex gap-4 justify-between border border-gray-400 rounded p-2">
            <button 
                className={`text-2xl px-2 hover:bg-gray-100 rounded ${selectedQuantity === 1 ? 'text-gray-400 cursor-not-allowed' : 'cursor-pointer'}`}
                onClick={decrementQuantity}
                disabled={selectedQuantity === 1}
                aria-label="Decrease quantity"
            >
                -
            </button>
            <span className='text-2xl' aria-label={`Quantity: ${selectedQuantity}`}>
                {selectedQuantity}
            </span>
            <button 
                className="text-2xl px-2 hover:bg-gray-100 rounded cursor-pointer"
                onClick={incrementQuantity}
                aria-label="Increase quantity"
            >
                +
            </button>
        </div>
    )
}

export default QuantityBar