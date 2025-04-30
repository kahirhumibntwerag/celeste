import React from 'react'
import { useImageColorStore, useProductStore } from '../../store/productPageStore'
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
const MainImage = ({className}) => {
  const selectedColor = useImageColorStore((state) => state.selectedColor);
  const {productId} = useParams()
  const queryClient = useQueryClient();
  const product = queryClient.getQueryData(["products", productId]); 
  return (
    <div className={className}>
      <img className="w-full h-full object-cover" src={product[0]?.colors?.find((c) => c.name === selectedColor)?.mainImage} alt={product[0].title} />
    </div>
  )
}

export default MainImage