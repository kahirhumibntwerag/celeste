import React from "react";

const Searchbar = () => {
  return (
    <div className="justify-between rounded-2xl px-1 border-1 border-gray-300 sm:flex hidden items-center text-center ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      <input
        className="bg-transparent p-1 outline-none border-0.5 border-[#D4CABA]"
        type="text"
        placeholder="start typing..."
      />

      <div className="bg-[#7d7d7d] rounded-full p-1 text-white cursor-pointer">
        <svg
          width="17"
          height="17"
          viewBox="0 0 21 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 9.5H18.4709M11.2645 1L20 9.5L11.2645 18"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Searchbar;
