import React from 'react'
import { useProductStore } from '../../store/productPageStore'  
const Description = () => {
  const product = useProductStore((state) => state.product)
  return (
    <div>
        <span className=''>{product.description}</span>
    </div>
  )
}

export default Description