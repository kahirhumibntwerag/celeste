import React from "react";
import SliderButton from "../Slider/SliderButton";
import Product from "../Product/Product";
import { products } from "../Product/data/Products";
import {useState, useEffect, useRef} from 'react'

const SingleImageSlider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const ref = useRef(null)
  const newProducts = [products[products.length-1], ...products, products[0]]

  console.log(currentSlideIndex, products.length)
  
  function handleSlideNavigation(direction) {
    if (isTransitioning) return; // 👈 prevent racing
  
    setIsTransitioning(true);
  
    if (direction === "left") {
      setCurrentSlideIndex((prev) => prev - 1);
    } else if (direction === "right") {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  }
  

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (currentSlideIndex === newProducts.length - 1) {
        ref.current.style.transition = 'none';
        ref.current.style.transform = `translateX(-${300}px)`; // real first
        ref.current.offsetHeight;
        ref.current.style.transition = 'all 0.3s ease-in-out';
        setCurrentSlideIndex(1);
      }
    
      if (currentSlideIndex === 0) {
        ref.current.style.transition = 'none';
        ref.current.style.transform = `translateX(-${300 * (products.length)}px)`; // real last
        ref.current.offsetHeight;
        ref.current.style.transition = 'all 0.3s ease-in-out';
        setCurrentSlideIndex(products.length);
      }
    
      // ✅ Re-enable buttons
      setIsTransitioning(false);
    };
  
    const current = ref.current;
    current?.addEventListener('transitionend', handleTransitionEnd);
  
    return () => {
      current?.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [currentSlideIndex, products.length]);
  
  
  return (
    <div className="max-w-[300px] mx-auto relative overflow-hidden ">
      <div
      >
        <div
          ref={ref}
          className="flex w-fit transition-all duration-500 ease-[cubic-bezier(.89,.28,.7,.48)]"
          style={{
            animation: 'scaleIn',
            transform: `translateX(-${300 * currentSlideIndex}px)`
          }}
                  >
          {newProducts.map((product, idx) => (
            <div
              key={idx}
              className="flex w-[300px] shrink-0"
            >
              <Product product={product} />
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="w-[95%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-between">
          <SliderButton
            direction="left"
            onClick={() => handleSlideNavigation("left")}
          />
          <SliderButton
            direction="right"
            onClick={() => handleSlideNavigation("right")}
          />
        </div>
      </div>
      {/* <Product
      product={products[0]}/> */}
    </div>
  );
};

export default SingleImageSlider;
