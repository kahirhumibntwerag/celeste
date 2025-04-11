import React from "react";
import { Link } from "react-router-dom";

const Category = ({ to, name, src }) => {
  return (
    <div className="flex items-center w-[250px]">
      <img
        src={src}
        alt={name}
        className="w-1/2 object-cover "
      />
      <div className="flex flex-col gap-2">
        <h4 className="text-lg text-nowrap font-semibold">{name}</h4>
        <Link
          className="underline text-nowrap hover:text-gray-600 transition-colors"
          to={to}
        >
          Explore more
        </Link>
      </div>
    </div>
  );
};

export default Category;
