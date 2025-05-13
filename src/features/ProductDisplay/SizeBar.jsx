import React from "react";
import Size from "./Size";
import { useImageSizeStore } from "../../store/productPageStore";

const SizeBar = () => {
  const selectedSize = useImageSizeStore((state) => state.selectedSize);
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="font-bold">Size: <span className="font-normal">{selectedSize}</span></div>
      <div className="flex justify-start md:justify-evenly gap-4 relative flex-wrap lg:flex-nowrap">
        {["S", "M", "L", "XL"].map((size) => (
          <div className="relative">
                        <div
              className={` top-0 right-0 p-1 text-white absolute rounded-full z-10 bg-[#7d7d7d] ${
                selectedSize === size ? "block" : "hidden"
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
            <Size
            key={size}
            className="relative w-[90px] text-center flex items-center justify-center  rounded-4xl text-xl"
            size={size}
          /></div>
        ))}
      </div>
    </div>
  );
};

export default SizeBar;
