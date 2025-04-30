import React from "react";
import { useAvailableQuantityStore } from "../../store/productPageStore";
import {
  useProductStore,
  useCartStore,
  useImageColorStore,
  useImageSizeStore,
} from "../../store/productPageStore";
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
const AddToCartButton = () => {
  const availableQuantityfn = useAvailableQuantityStore(
    (state) => state.getAvailableQuantity
  );
  const {productId} = useParams()
  const queryClient = useQueryClient();
  const product = queryClient.getQueryData(["products", productId]);
  
  const selectedColor = useImageColorStore((state) => state.selectedColor);
  const selectedSize = useImageSizeStore((state) => state.selectedSize);
  const items = useCartStore((state) => state.items);
  const addToCart = useCartStore((state) => state.addToCart);
  const availableQuantity = availableQuantityfn(product[0]);
  return (
    <>
      <button
        onClick={
          availableQuantity > 0
            ? () => addToCart(product[0], selectedColor, selectedSize, 1)
            : null
        }
        className={`${
          availableQuantity <= 0 ? "bg-black/20" : "bg-black"
        } text-white px-16 py-4 rounded-4xl cursor-pointer w-full`}
      >
        Buy It Now
      </button>
    </>
  );
};

export default AddToCartButton;
