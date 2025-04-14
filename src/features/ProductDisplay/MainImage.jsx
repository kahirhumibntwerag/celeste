import React from 'react'
import { useImageColorStore, useProductStore } from '../../store/productPageStore'

const MainImage = ({className}) => {
  const product = useProductStore((state) => state.product);
  const selectedColor = useImageColorStore((state) => state.selectedColor);
  return (
    <div className={className}>
      <img className="w-full h-full object-cover" src={product.colors.find((c) => c.name === selectedColor)?.mainImage} alt={product.title} />
    </div>
  )
}

export default MainImage