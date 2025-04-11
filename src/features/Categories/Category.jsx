import React from "react";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const categories = [
    {
      id: "abaya",
      image: "https://mlameh.com/cdn/shop/collections/S5570-S5570-1_2_ac4bf876-6b0c-4890-8ed3-fb437f50ce87.jpg?v=1742164284&width=1100",
      name: "BLOUSE",
    },
    {
      id: "dress",
      image: "https://mlameh.com/cdn/shop/collections/B094-S5528-S5543_8.jpg?v=1742164210&width=1100",
      name: "DRESS",
    },
    {
      id: "skirt",
      image: "https://mlameh.com/cdn/shop/collections/S5402-S5402-1_5.jpg?v=1742164323&width=1100",
      name: "SKIRT",
    },
    {
      id: "pants",
      image: "https://mlameh.com/cdn/shop/collections/B094-S5528-S5543_2.jpg?v=1742164115&width=1100",
      name: "PANTS",
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-4 justify-center">
      {categories.map((category) => (
        <div key={category.id} className=" flex flex-col gap-2 ">
          <div className="w-full h-[90%] overflow-hidden">
            <img
              onClick={() => navigate("/products/" + category.id)}
              className="w-full h-full object-cover hover:scale-102 transition-scale duration-500 cursor-pointer"
              src={category.image}
            />
          </div>
          <h2
            onClick={() => navigate("/products/" + category.id)}
            className="text-2xl font-bold hover:underline cursor-pointer"
          >
            {category.name}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Category;
