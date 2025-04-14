import React from "react";
import { useState, useRef } from "react";
import FilterDropdown from "../FilterDropdown/FilterDropdown";
import useClickOutside from "../../hooks/useClickOutside";
import Availability from "../Filters/Availability";
import Product from "../Product/Product";
import { products } from "../Product/data/Products";
import FilterSidbar from "../Filters/FilterSidbar";
import Price from "../Filters/Price";

const Collections = () => {
  const [showList, setShowList] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const dropdownRef = useRef(null);
  const filterRef = useRef(null);
  useClickOutside(dropdownRef, () => setShowList(false));
  useClickOutside(filterRef, () => setShowFilter(false));

  return (
    <div className="w-full pt-32 md:pt-16">

      {/* Filter Dropdown Section */}
        
        <div className={`fixed inset-0 bg-black/30 z-40 block lg:hidden ${showFilter ? 'block' : 'hidden'}`} onClick={() => setShowFilter(false)} />
        <div
          ref={filterRef}
          className={`fixed top-0  w-[60%] h-full bg-white p-4 z-50 block lg:hidden ${showFilter ? 'slide-in' : 'slide-out'}`}
        >
          <FilterSidbar showFilter={showFilter} setShowFilter={setShowFilter} />
        </div>

      <div
        ref={dropdownRef}
        className="w-[95%] mx-auto border-b-2 border-gray-300 p-2"
      >
        <div className="flex justify-between items-center">
          {" "}
          <div>25 products</div>
          <FilterDropdown showList={showList} setShowList={setShowList} />
        </div>
        <button
          onClick={() => setShowFilter(true)}
          className="bg-white border-1 border-black mt-4 w-full text-black px-4 py-2 rounded-4xl block lg:hidden cursor-pointer"
        >
          Filter
        </button>
      </div>

      {/* Main Shop Layout */}
      <div className="w-[95%] mx-auto p-2">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64  flex-col gap-4 hidden lg:flex flex-shrink-0">
            <Availability />
            <Price />
          </div>

          {/* Products Grid */}
          <div className="flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
              {products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  showColorSwatches={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
