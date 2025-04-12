import React from "react";
import logo from "../../assets/image_1.jpg";
import NavLinks from "./components/NavLinks";
import Logo from "./components/Logo";
import Searchbar, { SearchInput } from "./components/Searchbar";
import SubmitButton from "./components/SubmitButton";
import LoginIcon from "./components/LoginIcon";
import BagIcon from "./components/BagIcon";
import SidebarIcon from "./components/SidebarIcon";
import SearchIcon from "./components/SearchIcon";
const Navbar = () => {
  return (
    <>
      <nav className="flex h-20 px-10 justify-between items-center bg-white align-middle lg:relative fixed top-0 left-0 w-full z-50 border-b-2 border-gray-300">
        <div className="flex-1 hidden lg:flex ">
          <NavLinks />
        </div>

        <div className="flex-shrink flex justify-start md:justify-center">
          <Logo />
        </div>

        <div className="flex-1 flex justify-end items-center text-center gap-6">
          <Searchbar className="hidden md:flex gap-2 items-center rounded-4xl border-2 border-gray-300 px-3 py-1 relative">
            <SearchIcon className="size-5 text-gray-500" />
            <SearchInput
              placeholder="Enter your email..."
              className="bg-transparent p-1 outline-none text-black placeholder:text-gray-500 flex-1"
            />
            <SubmitButton
              className="rounded-full p-2 bg-[#7d7d7d] text-white absolute right-1"
            />
          </Searchbar>
          <LoginIcon />
          <BagIcon />
          <SidebarIcon />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
