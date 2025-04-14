import React from "react";
import {
  useImageColorStore,
  useProductStore,
  useImageSizeStore,
} from "../../store/productPageStore";

const useProductImageState = () => {
  return {
    selectedSize: useImageSizeStore((state) => state.selectedSize),
    selectedColor: useImageColorStore((state) => state.selectedColor),
    setSelectedColor: useImageColorStore((state) => state.setSelectedColor),
    isColorSelected: useImageColorStore((state) => state.isColorSelected),
    product: useProductStore((state) => state.product),
    hasColorInStock: useImageSizeStore((state) => state.hasColorInStock),
  };
};

const ResizableImage = ({ className, colorCode }) => {
  const {
    selectedSize,
    selectedColor,
    setSelectedColor,
    isColorSelected,
    product,
    hasColorInStock,
  } = useProductImageState();

  const src = product.colors.find((c) => c.name === colorCode)?.mainImage;

  return (
    <div
      onClick={() => {
        setSelectedColor(colorCode);
      }}
      className={`${className} ${
        isColorSelected(colorCode) ? " border-2 border-black" : ""
      } ${hasColorInStock(product, colorCode) ? " opacity-100" : " opacity-50"}`}
    >
      <img className="w-full h-full object-contain" src={src} />
    </div>
  );
};

export default ResizableImage;
