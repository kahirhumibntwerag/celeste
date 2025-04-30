import { useState } from "react";
import Availability from "./Availability";
import Price from "./Price";

const FilterSidbar = () => {

  return <div className="w-full flex flex-col gap-4 flex-shrink-0">
    <Availability className="w-full" />
    <Price className="w-full" />
    <button className="bg-[#7d7d7d] border-1 border-black mt-4 w-full text-white px-4 py-2 rounded-4xl cursor-pointer">Apply Filters</button>
  </div>;
};

export default FilterSidbar;
