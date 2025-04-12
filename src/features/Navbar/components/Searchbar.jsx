import React from "react";
import SearchIcon from "./SearchIcon";
import SubmitButton from "./SubmitButton";

const SearchInput = ({ 
  placeholder = "start typing...", 
  onChange,
  className = "bg-transparent p-1 outline-none"
}) => (
  <input
    className={className}
    type="text"
    placeholder={placeholder}
    onChange={onChange}
  />
);

const Searchbar = ({ 
  children,
  className = "justify-between sm:flex hidden items-center text-center" 
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default Searchbar;
export { SearchInput };
