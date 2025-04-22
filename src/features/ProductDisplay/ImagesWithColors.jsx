import React from "react";
import {
  useProductStore,
  useImageColorStore,
} from "../../store/productPageStore";
import ResizableImage from "./ResizableImage";
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
const ImagesWithColors = () => {
  const {productId} = useParams()
  const queryClient = useQueryClient();
  const product = queryClient.getQueryData(["products", productId]);  
  const selectedColor = useImageColorStore((state) => state.selectedColor);

  return (
    <div className="flex flex-col gap-4">
      <span>
        Color: <span>{selectedColor}</span>
      </span>
      <div className="flex gap-4">
        {product[0].colors.map((color) => (
          <div className="relative">
            {" "}
            <div
              className={` top-0 right-0 p-1 text-white absolute rounded-full bg-[#7d7d7d] ${
                selectedColor === color.name ? "block" : "hidden"
              }`}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 18 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 6.5L6 11.5L17 0.5" stroke="currentColor"></path>
              </svg>
            </div>
            <ResizableImage
              key={color.name}
              className={"aspect-[2/3] max-w-[88px] cursor-pointer"}
              colorCode={color.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagesWithColors;
