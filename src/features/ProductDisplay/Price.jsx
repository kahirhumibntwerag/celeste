import React from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
const Price = () => {
  const {productId} = useParams()
  const queryClient = useQueryClient();
  const product = queryClient.getQueryData(["products", productId]);    return (
    <>
        <span className='text-2xl font-bold'>{product[0].price} EGP</span>
    </>
  )
}

export default Price