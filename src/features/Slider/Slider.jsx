import React, { useRef, useEffect, useState } from "react";
import Product from "../Product/Product";
import SliderButton from "./SliderButton";
import CustomButton from "../../components/CustomButton";
import Header from "../../components/Header";
import Track from "./Track";
import { getProductsForSlider } from "../Filters/hooks/getProductsForSlider";
import { useQuery } from "@tanstack/react-query";
const Slider = ({category}) => {
  const queryData = getProductsForSlider(
    category
  );

  const { data:products, isLoading, isError, error } = useQuery({
    queryKey: queryData.queryKey,
    queryFn: queryData.queryFn,
    staleTime: 1000 * 60 * 5,
  });
  const [hovered, setHovered] = useState(0);
  // Refs for measuring container and item dimensions
  const firstProductRef = useRef(null);
  const sliderContainerRef = useRef(null);

  // State for controlling slider position and touch interactions
  const [maxSlideIndex, setMaxSlideIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  console.log(maxSlideIndex, currentSlideIndex)
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const MIN_SWIPE_DISTANCE = 50;

  // Handle navigation between slides
  function handleSlideNavigation(direction) {
    if (direction === "left") {
      setCurrentSlideIndex(
        currentSlideIndex === 0 ? maxSlideIndex : currentSlideIndex - 1
      );
    } else if (direction === "right") {
      setCurrentSlideIndex(
        currentSlideIndex === maxSlideIndex ? 0 : currentSlideIndex + 1
      );
    }
  }

  // Touch event handlers for mobile swipe functionality
  const handleTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const swipeDistance = touchStartX - touchEndX;
    const isLeftSwipe = swipeDistance > MIN_SWIPE_DISTANCE;
    const isRightSwipe = swipeDistance < -MIN_SWIPE_DISTANCE;

    if (isLeftSwipe) {
      handleSlideNavigation("right");
    } else if (isRightSwipe) {
      handleSlideNavigation("left");
    }
  };

  // Calculate maximum number of slides based on container width
  useEffect(() => {
    let resizeDebounceTimer;

    const calculateMaxSlideIndex = () => {
      if (firstProductRef.current && sliderContainerRef.current && products) {
        const productWidth = firstProductRef.current.offsetWidth;
        const containerWidth = sliderContainerRef.current.offsetWidth;
        const visibleProductCount = Math.floor(containerWidth / productWidth);
        const newMaxIndex =
          Math.max(products?.length - visibleProductCount, 0);

        setMaxSlideIndex(newMaxIndex);
        setCurrentSlideIndex((prev) => Math.min(prev, newMaxIndex));
      }
    };

    const handleResize = () => {
      clearTimeout(resizeDebounceTimer);
      resizeDebounceTimer = setTimeout(calculateMaxSlideIndex, 200);
    };

    calculateMaxSlideIndex();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeDebounceTimer);
    };
  }, [products]);

  // Auto-slide functionality
  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      handleSlideNavigation("right");
    }, 5000);

    return () => clearInterval(autoSlideInterval);
  }, [currentSlideIndex]); // Add dependency to prevent stale closure
  
  console.log('this one', products)
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;


  return (
    <>
      <div className="mx-10 mt-20">
        <Header
          title="New Arrivals"
          subtitle="Discover the latest styles made for you."
          buttonProps={{
            text: "See What's New",
            to: "/about",
            className: "bg-[#7d7d7d] rounded-3xl pt-2 text-lg text-white",
            animated: true,
          }}
          direction="row"
          alignment="between"
          className="items-start md:items-center"
        />
      </div>
      <div ref={sliderContainerRef} className="w-full relative overflow-hidden ">
        <Track
          products={products}
          firstProductRef={firstProductRef}
          currentSlideIndex={currentSlideIndex}
          handleTouchStart={handleTouchStart}
          handleTouchMove={handleTouchMove}
          handleTouchEnd={handleTouchEnd}
        />

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
    </>
  );
};

export default Slider;
