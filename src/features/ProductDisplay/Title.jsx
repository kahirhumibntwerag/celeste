import React from 'react'
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from 'react-router-dom';

const Title = () => {
  const {productId} = useParams()
  const queryClient = useQueryClient();
  const product = queryClient.getQueryData(["products", productId]);  

  return (
    <div>
        <span className='text-4xl font-bold'>{product[0]?.title}</span>
    </div>
  )
}

export default Title