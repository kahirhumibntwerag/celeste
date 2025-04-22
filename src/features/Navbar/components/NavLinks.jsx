import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

const NavLinks = () => {
  return (
    <ul className="md:flex items-center hidden text-[1rem] flex-wrap">
      <li className="hover:underline hover:underline-offset-4 cursor-pointer px-3">
        <Link to="/collections/all">All Products</Link>
      </li>

      {/* Summer Collection */}
      <li className="cursor-pointer px-3 relative group">
        <Link className="flex items-center gap-1 justify-center" to="/about">
          <span className="hover:underline hover:underline-offset-4">
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

        <div
          className={
            "absolute z-50  top-2.5  mt-2 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto opacity-0 translate-y-10 pointer-events-none"
          }
        >
          <DropdownMenu />
        </div>
      </li>

      <li className="cursor-pointer px-3 group relative">
        <Link to="/collections/ramadan-new" className="hover:underline hover:underline-offset-4">
          Ramadan
        </Link>
      </li>

      {/* Winter Collection */}
      <li
        className="cursor-pointer px-3 relative group"
        onMouseEnter={() => setHovered("winter")}
        onMouseLeave={() => setHovered(null)}
      >
        <Link className="flex items-center gap-1 justify-center" to="/about">
          <span className="hover:underline hover:underline-offset-4">
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

        <div
          className={
            "absolute z-50  top-2.5  mt-2 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto opacity-0 translate-y-10 pointer-events-none"
          }
        >
          <DropdownMenu />
        </div>
      </li>
    </ul>
  );
};

export default NavLinks;
