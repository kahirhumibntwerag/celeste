import React from 'react'
import {useParams} from 'react-router-dom'

const Product = () => {
    const {productId} = useParams()
  return (
    <>
        <div className='text-center mt-[20%]'>Product number {productId}</div>
    </>
  )
}

export default Product