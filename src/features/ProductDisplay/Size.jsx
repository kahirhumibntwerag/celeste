import React from "react";
import { useState } from "react";
import {
  useImageSizeStore,
  useProductStore,
  useImageColorStore,
} from "../../store/productPageStore";


const useProductImageState = () => {
  const setSelectedSize = useImageSizeStore((state) => state.setSelectedSize);
  const selectedSize = useImageSizeStore((state) => state.selectedSize);
  const isSizeSelected = useImageSizeStore((state) => state.isSizeSelected);
  const hasSizeInStock = useImageColorStore((state) => state.hasSizeInStock);
  const product = useProductStore((state) => state.product);
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

  const isInStock = hasSizeInStock(product, size);
  
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
