import React from "react";
import { useState } from "react";
import {
  useImageSizeStore,
  useProductStore,
  useImageColorStore,
} from "../../store/productPageStore";
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const useProductImageState = () => {
  const setSelectedSize = useImageSizeStore((state) => state.setSelectedSize);
  const selectedSize = useImageSizeStore((state) => state.selectedSize);
  const isSizeSelected = useImageSizeStore((state) => state.isSizeSelected);
  const hasSizeInStock = useImageColorStore((state) => state.hasSizeInStock);
  const {productId} = useParams()
  const queryClient = useQueryClient();
  const product = queryClient.getQueryData(["products", productId]);  
  const selectedColor = useImageColorStore((state) => state.selectedColor);
  return {
    selectedSize,
    isSizeSelected,
    hasSizeInStock,
    product,
    selectedColor,
    setSelectedSize,
  };
};


const Size = ({ className, size }) => {
  const {
    selectedSize,
    isSizeSelected,
    hasSizeInStock,
    product,
    selectedColor,
    setSelectedSize,
  } = useProductImageState();

  const isInStock = hasSizeInStock(product[0], size);
  
  return (
    <div
      onClick={() => setSelectedSize(size)}
      className={`${className} cursor-pointer border-1 ${
        isSizeSelected(size) ? 'border-black' : 'border-gray-400'
      } ${isInStock ? 'text-black' : 'text-gray-400'}`}
    >
      <span>{size}</span>
      <div
        className={`absolute top-1/2 left-0 w-full border-t-2 border-gray-400 ${
          isInStock ? 'hidden' : ''
        }`}
      />
    </div>
  );
};

export default Size;
