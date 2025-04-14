import React from "react";
import { useAvailableQuantityStore } from "../../store/productPageStore";
import {
  useProductStore,
  useCartStore,
  useImageColorStore,
  useImageSizeStore,
} from "../../store/productPageStore";
const AddToCartButton = () => {
  const availableQuantityfn = useAvailableQuantityStore(
    (state) => state.getAvailableQuantity
  );
  const product = useProductStore((state) => state.product);
  const selectedColor = useImageColorStore((state) => state.selectedColor);
  const selectedSize = useImageSizeStore((state) => state.selectedSize);
  const items = useCartStore((state) => state.items);
  const addToCart = useCartStore((state) => state.addToCart);
  const availableQuantity = availableQuantityfn(product);
  return (
    <>
      <button
        onClick={
          availableQuantity > 0
            ? () => addToCart(product, selectedColor, selectedSize, 1)
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
