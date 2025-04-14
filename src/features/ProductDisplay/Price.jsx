import React from 'react'
import { useProductStore } from '../../store/productPageStore'
const Price = () => {
  const product = useProductStore((state) => state.product)
  return (
    <>
        <span className='text-2xl font-bold'>{product.price}</span>
    </>
  )
}

export default Price