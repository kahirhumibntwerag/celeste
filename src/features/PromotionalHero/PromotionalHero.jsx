import React from "react";
import CustomButton from "../../components/CustomButton";

const PromotionalHero = () => {
  return (
    <div className="flex md:flex-row flex-col w-full mt-5 ">
      <div className="flex-1 m-10">
        <img
          className="w-full"
          src="https://mlameh.com/cdn/shop/files/IMG_0192.JPEG_2.jpg?v=1742815887&width=1100"
        />
      </div>
      <div className="flex flex-row justify-center flex-1 m-10">
        <div className="text-center my-auto">
          <p className="text-2xl md:text-6xl">
            Shop Now and Explore Our Ramadan Special Collection
          </p>
          <CustomButton 
            text="View All"
            variant="primary"
            size="md"
            className="mx-auto my-5 px-5"
          />
        </div>
      </div>
    </div>
  );
};

export default PromotionalHero;
