import React from "react";
import { useAvailableQuantityStore } from "../../store/productPageStore";
import {
  useProductStore,
  useImageColorStore,
  useImageSizeStore,
  useQuantityStore
} from "../../store/productPageStore";
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import useCartStore from "../../store/cartStore";
import { v4 as uuidv4 } from 'uuid';

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
  const addItem = useCartStore((state) => state.addItem);
  const availableQuantity = availableQuantityfn(product[0]);
  const selectedQuantity = useQuantityStore((state) => state.selectedQuantity);
  
  const handleAddToCart = () => {
    if (availableQuantity > 0) {
      const cartItem = {
        id: productId,
        color: selectedColor,
        size: selectedSize,
        quantity: selectedQuantity,
        image: `${product[0].colors[0].mainImage}`,
        title: product[0].title,
        price: product[0].price
      };
      console.log('Adding to cart with quantity:', selectedQuantity);
      addItem(cartItem);
    }
  };

  return (
    <>
      <button
        onClick={handleAddToCart}
        className={`${
           "bg-[#d7d7d7]"
        } text-white px-8 py-4 rounded-4xl cursor-pointer w-full`}
      >
        {availableQuantity > 0 ? "Add to cart" : "Out of stock"}
      </button>
    </>
  );
};

export default AddToCartButton;
