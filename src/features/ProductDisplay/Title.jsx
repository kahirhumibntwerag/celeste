import React from 'react'
import { useProductStore } from '../../store/productPageStore'  
const Title = () => {
  const product = useProductStore((state) => state.product)
  return (
    <div>
        <span className='text-4xl font-bold'>{product.title}</span>
    </div>
  )
}

export default Title