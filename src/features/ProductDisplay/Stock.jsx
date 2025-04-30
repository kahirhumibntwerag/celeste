import React from 'react'
import {useQuantityStore, useProductStore, useImageColorStore, useImageSizeStore} from '../../store/productPageStore'
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
const Stock = () => {
    const selectedQuantity = useQuantityStore((state) => state.selectedQuantity);
    const getMaxQuantity = useQuantityStore((state) => state.getMaxQuantity);
    const selectedColor = useImageColorStore((state) => state.selectedColor);
    const selectedSize = useImageSizeStore((state) => state.selectedSize);

    const {productId} = useParams()
    const queryClient = useQueryClient();
    const product = queryClient.getQueryData(["products", productId]);  
    

    const maxStock = getMaxQuantity(product[0]);
    
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