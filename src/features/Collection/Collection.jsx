import React from "react";
import { useState } from "react";

const collectionItems = [
  {
    name: "SUMMER",
    image: "//mlameh.com/cdn/shop/collections/IMG_0267_JPEG.jpg?v=1742809997&width=1500"
  },
  {
    name: "DRESS",
    image: "//mlameh.com/cdn/shop/collections/B094-S5528-S5543_2.jpg?v=1742164115&width=1500"
  },
  {
    name: "BLOUSE",
    image: "//mlameh.com/cdn/shop/collections/S5402-S5402-1_5.jpg?v=1742164323&width=1500"
  },
  {
    name: "PANTS",
    image: "//mlameh.com/cdn/shop/collections/S5570-S5570-1_2_ac4bf876-6b0c-4890-8ed3-fb437f50ce87.jpg?v=1742164284&width=1500"
  },
  {
    name: "SHIRT",
    image: "https://mlameh.com/cdn/shop/collections/B094-S5528-S5543_8.jpg?v=1742164210&width=1100"
  }
];

const Collection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className=" mx-auto mt-32">
      <div className="flex flex-col items-start justify-center mx-8">
        <p className=" text-xl font-extrabold">Explore our collections</p>
        <h2 className="text-4xl  ">Shop our exclusive winter collections</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex-1 m-8">
          <img 
            src={collectionItems[selectedIndex].image} 
            alt={collectionItems[selectedIndex].name}
            className="w-full h-full object-cover transition-transform duration-700" 
          />
        </div>
        <div className="flex flex-col flex-1 m-8 gap-8">
          {collectionItems.map((item, index) => (
            <div 
              key={item.name}
              className="cursor-pointer"
              onMouseEnter={() => setSelectedIndex(index)}
            >
              <div className={`flex justify-between items-center border-b-2 ${selectedIndex===index?'text-black':'text-[#b2b2b2]'} border-[#b2b2b2] py-4 transition-colors duration-500 `}>
                <p className="text-4xl md:text-5xl font-medium">{item.name}</p>
                <button className={`p-3 bg-transparent rounded-full border-2 border-black cursor-pointer ${selectedIndex===index?'block':'hidden'}`}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 11L11 1M11 1H3M11 1V9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
