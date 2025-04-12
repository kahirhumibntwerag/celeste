import React from "react";
import { useState } from "react";
import DropdownButton from "./DropdownButton";
import DropdownList from "./DropdownList";

const FilterDropdown = ({ showList, setShowList }) => {
  const [filter, setFilter] = useState("Featured");

  const options = [
    "Featured",
    "Best selling",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, low to high",
    "Price, high to low",
    "Date, old to new",
    "Date, new to old",
  ];

  return (
    <div className="flex justify-center gap-2 items-center relative">
      <p className="font-bold">Sort by</p>
      <div className="flex flex-col w-[200px]">
        <DropdownButton 
          showList={showList} 
          setShowList={setShowList}
          selectedValue={filter}
        />
        {showList && (
          <DropdownList 
            options={options}
            currentFilter={filter}
            onSelect={(option) => {
              setFilter(option);
              setShowList(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default FilterDropdown;
