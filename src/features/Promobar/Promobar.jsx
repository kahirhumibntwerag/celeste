import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Promobar = () => {
  const [showFirstText, setShowFirstText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstText((prev) => !prev);
    }, 10000);
    return () => clearInterval(interval);
  }, []);//this is wrong i know you should not use useEffect for this type of stuff sorry i am lazy!!!!!!

  return (
    <div className="bg-black text-white text-center py-2 hidden md:flex justify-center items-center">
      <div className="relative w-100 h-5 flex justify-center text-center items-center ">
        <div
          className={` absolute top-0 transition-opacity duration-500 ${
            showFirstText ? "opacity-100" : "opacity-0"
          }`}
        >
          Enjoy Shipping on Us
        </div>
        <div
          className={`absolute top-0 transition-opacity duration-500 ${
            showFirstText ? "opacity-0" : "opacity-100"
          }`}
        >
          Enjoy Up to 70% Off on Selected Products!{<Link to='/' className="underline ml-2 ">Shop Now</Link>}
        </div>
      </div>
    </div>
  );
};

export default Promobar;
