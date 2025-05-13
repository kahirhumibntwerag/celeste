import React from "react";
import BlurImage from "../../components/BlurImage";
import {
  useImageColorStore,
  useProductStore,
  useImageSizeStore,
} from "../../store/productPageStore";
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const useProductImageState = () => {
  return {
    selectedSize: useImageSizeStore((state) => state.selectedSize),
    selectedColor: useImageColorStore((state) => state.selectedColor),
    setSelectedColor: useImageColorStore((state) => state.setSelectedColor),
    isColorSelected: useImageColorStore((state) => state.isColorSelected),
    hasColorInStock: useImageSizeStore((state) => state.hasColorInStock),
  };
};

const ResizableImage = ({ className, colorCode }) => {
  const {
    selectedSize,
    selectedColor,
    setSelectedColor,
    isColorSelected,
    hasColorInStock,
  } = useProductImageState();
  const {productId} = useParams()
  const queryClient = useQueryClient();
  const product = queryClient.getQueryData(["products", productId]); 

  const src = product[0]?.colors.find((c) => c.name === colorCode)?.mainImage;

  return (
    <div
      onClick={() => {
        setSelectedColor(colorCode);
      }}
      className={`${className} ${
        selectedColor === colorCode ? "border-2 border-black" : ""
      } ${hasColorInStock(product[0], colorCode) ? "opacity-100" : "opacity-50"}`}
    >
      <BlurImage 
        className="w-full h-full object-contain" 
        src={src} 
        alt={`Color variant ${colorCode}`}
        width='88px'
        height='132px'
      />
    </div>
  );
};

export default ResizableImage;
