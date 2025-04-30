import React from "react";
import { Link } from "react-router-dom";

const SidbarNavLinks = ({ className }) => {
  return (
    <ul className={className}>
      <li className="w-full flex  cursor-pointer px-3 border-b-2 border-gray-300 pb-8">
        <Link to="/collections/all">All Products</Link>
      </li>

      {/* Summer Collection */}
      <li className="w-full flex cursor-pointer px-3 relative group border-b-2 border-gray-300 pb-8">
        <Link className="flex items-center gap-1 " to="/about">
          <span >
            Summer Collection
          </span>
          <svg
            className="mt-0.5"
            width="14"
            height="7"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7 7L13 1"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </li>

      <li className="w-full flex cursor-pointer px-3 group relative border-b-2 border-gray-300 pb-8">
        <Link
          to="/collections/ramadan-new"
        >
          Ramadan
        </Link>
      </li>

      {/* Winter Collection */}
      <li
        className="w-full cursor-pointer px-3 relative group border-b-2 border-gray-300 pb-8"
        onMouseEnter={() => setHovered("winter")}
        onMouseLeave={() => setHovered(null)}
      >
        <Link className="flex  gap-1 " to="/about">
          <span >
            Winter Collection
          </span>
          <svg
            className="mt-0.5"
            width="14"
            height="7"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7 7L13 1"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </li>
    </ul>
  );
};

export default SidbarNavLinks;
