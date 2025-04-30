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
import Sidbar from "../../components/Sidbar";
import { useState } from "react";
import SidbarNavLinks from "./components/SidbarNavLinks";
const Navbar = () => {
  const [showFilter, setShowFilter] = useState("hidden");

  return (
    <div className="fixed w-full z-100 top-0 md:relative">
      <nav className="flex h-20 px-10 justify-between items-center bg-white align-middle lg:relative  w-full  border-b-2 border-gray-300 ">
        <NavLinks
          className={"flex-1 hidden lg:flex items-center text-[1rem] flex-wrap"}
        />

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
            <SubmitButton className="rounded-full p-2 bg-[#7d7d7d] text-white absolute right-1" />
          </Searchbar>
          <LoginIcon
            className={
              "hover:underline hover:underline-offset-4 hidden lg:flex justify-center gap-2 items-center text-center font-bold text-[0.9rem] cursor-pointer"
            }
          />
          <BagIcon />
          <SidebarIcon onClick={() => setShowFilter(true)} />
          <Sidbar
            className={"flex flex-col h-full gap-4 justify-between"}
            showFilter={showFilter}
            setShowFilter={setShowFilter}
          >
            <div>
              {" "}
              <Searchbar className="flex gap-2 items-center rounded-4xl border-2 border-gray-300 px-3 py-1 relative">
                <SearchIcon className="size-5 text-gray-500" />
                <SearchInput
                  placeholder="Enter your email..."
                  className="bg-transparent p-1 outline-none text-black placeholder:text-gray-500 flex-1"
                />
                <SubmitButton className="rounded-full p-2 bg-[#7d7d7d] text-white absolute right-1" />
              </Searchbar>
              <SidbarNavLinks
                className={"flex flex-col items-start gap-8 pt-8"}
              />
            </div>
            <LoginIcon
              className={
                "hover:underline hover:underline-offset-4 flex gap-2 items-center text-center  text-[0.9rem] cursor-pointer"
              }
            />
          </Sidbar>
        </div>
      </nav>
{/* {    true &&  <div className=" bg-white w-[100%] h-[50vh] absolute z-10"></div>
} */}
    </div>
  );
};

export default Navbar;
