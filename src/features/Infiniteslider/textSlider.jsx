import React, { useRef, useEffect, useState } from "react";
import InfiniteSlider from "./InfiniteSlider";

const TextSlider = () => {

  return (

        <InfiniteSlider itemWidth={2000}>
          {/* <p className="text-8xl text-nowrap">
          Celebrate Eid: 15% Off All Products!
          </p> */}
          <p className="text-8xl text-nowrap">
          Your Cart, Delivered Free: Enjoy Shipping on Us!
          </p>
          <p className="text-8xl text-nowrap">
            Celeberate Eid: Get 20% Off On All Products
          </p> 
          
        </InfiniteSlider>
      )
};

export default TextSlider;
