import React from "react";
import InfiniteSlider from "./InfiniteSlider";
import Category from "./Category";

const CategorySlider = () => {
  const categories = [
    {
      to: "/",
      name: "Jacket",
      src: "//mlameh.com/cdn/shop/files/JACKET.png?v=1735640420&width=1500",
    },
    {
      to: "/",
      name: "Cardigan",
      src: "//mlameh.com/cdn/shop/files/CARDIGAIN.png?v=1735640418&width=1500",
    },
    {
      to: "/",
      name: "T-Shirt",
      src: "//mlameh.com/cdn/shop/files/SHIRT.png?v=1735640418&width=1500",
    },
    {
      to: "/",
      name: "Formal Pants",
      src: "//mlameh.com/cdn/shop/files/FORMAL_PANTS.png?v=1735640417&width=1500",
    },
    {
      to: "/",
      name: "Abaya",
      src: "//mlameh.com/cdn/shop/files/Abaya.png?v=1736240228&width=1500",
    },
    {
      to: "/",
      name: "Sweatshirt",
      src: "//mlameh.com/cdn/shop/files/SWEATSHIRT.png?v=1735640421&width=1500",
    },
    {
      to: "/",
      name: "vest",
      src: "//mlameh.com/cdn/shop/files/VEST.png?v=1735640422&width=1500",
    },
    {
      to: "/",
      name: "Coat",
      src: "//mlameh.com/cdn/shop/files/COAT.png?v=1735640418&width=1500",
    },
    {
      to: "/",
      name: "Sweatpants",
      src: "//mlameh.com/cdn/shop/files/SWEATPANTS.png?v=1735640417&width=1500",
    },
    {
      to: "/",
      name: "Denim",
      src: "//mlameh.com/cdn/shop/files/DENIM.png?v=1735640421&width=1500",
    },
  ];

  return (
    <>
      {" "}
      <InfiniteSlider>
        {categories.map((category, index) => (
          <Category key={index} {...category} />
        ))}
      </InfiniteSlider>
      <div className="hidden xl:block w-full border-b-2 border-gray-400"></div>
    </>
  );
};

export default CategorySlider;
