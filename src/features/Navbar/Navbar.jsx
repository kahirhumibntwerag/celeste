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
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  StateMachine,
  StateTrigger,
  StateContent,
  useStateMachineContext,
} from "../../components/Muti";
import { SidebarNav, SidebarNavItem } from "./components/Nav";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const sidebarVariants = {
  open: {
    height: "100vh",
    transition: {
      type: "spring",
      duration: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  closed: {
    height: 0,
    transition: {
      duration: 0.2,
      when: "afterChildren",
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const childVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
  closed: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 },
  },
};

const listItemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 }
  },
  closed: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 }
  }
};

// Add new summer menu variants
const summerMenuVariants = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.01,
    },
  },
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      duration: 0.1,
      when: "afterChildren",
      staggerChildren: 0.01,
      staggerDirection: -1,
    },
  },
};

const summerItemVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3 }
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

// Add winter menu variants (same as summer)
const winterMenuVariants = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      duration: 0.3,
      when: "afterChildren",
      staggerChildren: 0.01,
      staggerDirection: -1,
    },
  },
};

const NavbarContent = () => {
  const { state } = useStateMachineContext();
  console.log(state);

  return (
    <div className="fixed w-full z-100 top-0 md:relative">
      <nav className="flex h-20 px-10 justify-between items-center bg-white align-middle lg:relative w-full border-b-2 border-gray-300">
        <NavLinks className="flex-1 hidden lg:flex items-center text-[1rem] flex-wrap" />
        <div className="flex-shrink flex justify-start md:justify-center">
          <StateTrigger to="idle">
            <Logo />
          </StateTrigger>
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

          <LoginIcon className="hover:underline hover:underline-offset-4 hidden lg:flex justify-center gap-2 items-center text-center font-bold text-[0.9rem] cursor-pointer" />

          <BagIcon />

          <AnimatePresence mode="wait" initial={false}>
            {state !== "idle" ? (
              <StateTrigger to="idle" key="close" asChild>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl text-gray-600 cursor-pointer"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 17.0757L17.0001 1.07563"
                      stroke="currentColor"
                    />
                    <path
                      d="M1 0.995361L17.0001 16.9954"
                      stroke="currentColor"
                    />
                  </svg>
                </motion.div>
              </StateTrigger>
            ) : (
              <StateTrigger to="menu" key="trigger" asChild>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <SidebarIcon />
                </motion.div>
              </StateTrigger>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Main Menu */}
      <StateContent when="menu" forceMount asChild>
        <AnimatePresence>
          {state === "menu" && (
            <motion.div
              key="sidebar"
              layoutRoot
              layout
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="bg-white w-full absolute z-10 max-h-[100vh] overflow-hidden"
            >
              <motion.div layout className="p-6 overflow-y-auto h-[calc(100vh-2rem)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden flex flex-col">
                <motion.div layout variants={childVariants}>
                  <Searchbar className="flex gap-2 items-center rounded-4xl border-2 border-gray-300 px-3 py-1 relative">
                    <SearchIcon className="size-5 text-gray-500" />
                    <SearchInput
                      placeholder="Enter your email..."
                      className="bg-transparent p-1 outline-none text-black placeholder:text-gray-500 flex-1"
                    />
                    <SubmitButton className="rounded-full p-2 bg-[#7d7d7d] text-white absolute right-1" />
                  </Searchbar>
                </motion.div>

                <motion.div layout variants={childVariants} className="mt-8 flex-1">
                  <SidebarNav className="items-start gap-8">
                    <SidebarNavItem>
                      <StateTrigger to="idle" asChild>
                        <Link to="/collections/all">All Products</Link>
                      </StateTrigger>{" "}
                    </SidebarNavItem>
                    <SidebarNavItem>
                      <StateTrigger to="summer" asChild>
                        <button className="w-full flex items-center justify-between cursor-pointer">
                          <span>Summer Collection</span>
                          <ChevronRightIcon className="h-5 w-5" />
                        </button>
                      </StateTrigger>
                    </SidebarNavItem>{" "}
                    <SidebarNavItem>
                      <StateTrigger to='idle' asChild>
                        {" "}
                        <Link to="/collections/ramadan-new">Ramadan</Link>
                      </StateTrigger>
                    </SidebarNavItem>
                    <SidebarNavItem>
                      <StateTrigger to="winter" asChild>
                        <button className="w-full flex items-center justify-between cursor-pointer">
                          <span>Winter Collection</span>
                          <ChevronRightIcon className="h-5 w-5" />
                        </button>
                      </StateTrigger>
                    </SidebarNavItem>
                  </SidebarNav>
                </motion.div>

                <motion.div layout variants={childVariants} className="mt-8 pt-8 border-t-2 border-gray-300">
                  <StateTrigger to="idle">
                    <LoginIcon className="w-full hover:underline hover:underline-offset-4 flex gap-2 items-center text-[0.9rem] cursor-pointer" />
                  </StateTrigger>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </StateContent>

      {/* Summer Collection Submenu */}
      <StateContent when="summer" forceMount asChild>
        <AnimatePresence>
          {state === "summer" && (
            <motion.div
              key="summer-collection"
              layout
              variants={summerMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="bg-white w-full absolute z-10 max-h-[100vh] overflow-hidden"
            >
              <motion.div layout className="p-6 overflow-y-auto h-[calc(100vh-2rem)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <motion.div layout variants={summerItemVariants}>
                  <SidebarNav className="items-start gap-8">
                    <SidebarNavItem>
                      <StateTrigger to="menu" asChild>
                        <button className="w-full flex items-center justify-between text-gray-500 hover:underline text-sm">
                          ← Back to menu
                        </button>
                      </StateTrigger>
                    </SidebarNavItem>
                    <SidebarNavItem>
                      <StateTrigger to="idle" asChild>
                        <Link to="/collections/jackets" className="text-base">Jackets</Link>
                      </StateTrigger>
                    </SidebarNavItem>
                    <SidebarNavItem>
                      <StateTrigger to="idle" asChild>
                        <Link to="/collections/shirts" className="text-base">Shirts</Link>
                      </StateTrigger>
                    </SidebarNavItem>
                    <SidebarNavItem>
                      <StateTrigger to="idle" asChild>
                        <Link to="/collections/pants" className="text-base">Pants</Link>
                      </StateTrigger>
                    </SidebarNavItem>
                    <SidebarNavItem>
                      <StateTrigger to="idle" asChild>
                        <Link to="/collections/dresses" className="text-base">Dresses</Link>
                      </StateTrigger>
                    </SidebarNavItem>
                    <SidebarNavItem>
                      <StateTrigger to="idle" asChild>
                        <Link to="/collections/abaya" className="text-base">Abaya</Link>
                      </StateTrigger>
                    </SidebarNavItem>
                    <SidebarNavItem>
                      <StateTrigger to="idle" asChild>
                        <Link to="/collections/blazers" className="text-base">Blazers</Link>
                      </StateTrigger>
                    </SidebarNavItem>
                    <SidebarNavItem>
                      <StateTrigger to="idle" asChild>
                        <Link to="/collections/tops" className="text-base">Tops</Link>
                      </StateTrigger>
                    </SidebarNavItem>
                    <SidebarNavItem>
                      <StateTrigger to="idle" asChild>
                        <Link to="/collections/blouses" className="text-base">Blouses</Link>
                      </StateTrigger>
                    </SidebarNavItem>
                  </SidebarNav>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </StateContent>

      {/* Winter Collection Submenu */}
      <StateContent when="winter" forceMount asChild>
        <AnimatePresence>
          {state === "winter" && (
            <motion.div
              key="winter-collection"
              layout
              variants={winterMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="bg-white w-full absolute z-10 max-h-[100vh] overflow-hidden"
            >
              <motion.div layout className="p-6 overflow-y-auto h-[calc(100vh-2rem)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <motion.div layout variants={summerItemVariants}>
                  <SidebarNav className="items-start gap-8">
                    <SidebarNavItem>
                      <StateTrigger to="menu" asChild>
                        <button className="w-full flex items-center justify-between text-gray-500 hover:underline text-sm">
                          ← Back to menu
                        </button>
                      </StateTrigger>
                    </SidebarNavItem>
                    <SidebarNavItem>
                      <StateTrigger to="idle" asChild>
                        <Link to="/collections/jackets" className="text-base">Jackets</Link>
                      </StateTrigger>
                    </SidebarNavItem>
                    <SidebarNavItem>
                      <StateTrigger to="idle" asChild>
                        <Link to="/collections/shirts" className="text-base">Shirts</Link>
                      </StateTrigger>
                    </SidebarNavItem>
                    <SidebarNavItem>
                      <StateTrigger to="idle" asChild>
                        <Link to="/collections/pants" className="text-base">Pants</Link>
                      </StateTrigger>
                    </SidebarNavItem>
                    <SidebarNavItem>
                      <StateTrigger to="idle" asChild>
                        <Link to="/collections/dresses" className="text-base">Dresses</Link>
                      </StateTrigger>
                    </SidebarNavItem>
                    <SidebarNavItem>
                      <StateTrigger to="idle" asChild>
                        <Link to="/collections/abaya" className="text-base">Abaya</Link>
                      </StateTrigger>
                    </SidebarNavItem>
                    <SidebarNavItem>
                      <StateTrigger to="idle" asChild>
                        <Link to="/collections/blazers" className="text-base">Blazers</Link>
                      </StateTrigger>
                    </SidebarNavItem>
                    <SidebarNavItem>
                      <StateTrigger to="idle" asChild>
                        <Link to="/collections/tops" className="text-base">Tops</Link>
                      </StateTrigger>
                    </SidebarNavItem>
                    <SidebarNavItem>
                      <StateTrigger to="idle" asChild>
                        <Link to="/collections/blouses" className="text-base">Blouses</Link>
                      </StateTrigger>
                    </SidebarNavItem>
                  </SidebarNav>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </StateContent>
    </div>
  );
};

const Navbar = () => (
  <StateMachine defaultValue="idle">
    <NavbarContent />
  </StateMachine>
);

export default Navbar;
