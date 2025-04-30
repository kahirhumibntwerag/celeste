import React from "react";
import { useAvailableQuantityStore } from "../../store/productPageStore";
import {
  useProductStore,
  useCartStore,
  useImageColorStore,
  useImageSizeStore,
  useQuantityStore
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
  const selectedQuantity = useQuantityStore((state) => state.selectedQuantity);
  return (
    <>
      <button
        onClick={
          availableQuantity > 0
            ? () => addToCart(product[0], selectedColor, selectedSize, selectedQuantity)
            : null
        }
        className={`${
        "bg-[#d7d7d7]"
        } text-white px-8 py-4 rounded-4xl cursor-pointer w-full`}
      >
        Add to cart
      </button>
    </>
  );
};

export default AddToCartButton;
