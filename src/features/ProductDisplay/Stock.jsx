import React from 'react'
import {useQuantityStore, useProductStore, useImageColorStore, useImageSizeStore} from '../../store/productPageStore'
const Stock = () => {
    const selectedQuantity = useQuantityStore((state) => state.selectedQuantity);
    const getMaxQuantity = useQuantityStore((state) => state.getMaxQuantity);
    const product = useProductStore((state) => state.product);
    const selectedColor = useImageColorStore((state) => state.selectedColor);
    const selectedSize = useImageSizeStore((state) => state.selectedSize);
    

    const maxStock = getMaxQuantity(product);
    
    return (
        <div className='font-bold'>
            {maxStock === 0 ? (
                <span style={{ color: 'red' }}>Sold Out</span>
            ) : maxStock < 5 ? (
                `Only ${maxStock} stock left`
            ) : ""}
        </div>
    )
}

export default Stock