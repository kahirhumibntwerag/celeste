import React from 'react'
import BlurImage from '../../components/BlurImage'
import { useImageColorStore } from '../../store/productPageStore'
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const MainImage = ({className}) => {
  const selectedColor = useImageColorStore((state) => state.selectedColor);
  const {productId} = useParams()
  const queryClient = useQueryClient();
  const product = queryClient.getQueryData(["products", productId]); 

  return (
    <div className={className}>
      <BlurImage 
        className="w-full h-full"
        src={product[0]?.colors?.find((c) => c.name === selectedColor)?.mainImage} 
        alt={product[0].title} 
        height='600px'
        width='300px'
      />
    </div>
  )
}

export default MainImage