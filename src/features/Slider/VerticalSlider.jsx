import React, { useRef, useEffect, useState } from "react";
import VerticalTrack from "./VerticalTrack";
import VerticalSliderButton from "./VerticalSliderButton";

const VerticalSlider = ({ images }) => {
    const firstImageRef = useRef(null);
    const sliderContainerRef = useRef(null);

    const [maxSlideIndex, setMaxSlideIndex] = useState(0);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [touchStartY, setTouchStartY] = useState(null);
    const [touchEndY, setTouchEndY] = useState(null);

    const MIN_SWIPE_DISTANCE = 50;

    function handleSlideNavigation(direction) {
        if (direction === "up") {
            setCurrentSlideIndex(
                currentSlideIndex === 0 ? maxSlideIndex : currentSlideIndex - 1
            );
        } else if (direction === "down") {
            setCurrentSlideIndex(
                currentSlideIndex === maxSlideIndex ? 0 : currentSlideIndex + 1
            );
        }
    }

    const handleTouchStart = (e) => {
        setTouchEndY(null);
        setTouchStartY(e.targetTouches[0].clientY);
    };

    const handleTouchMove = (e) => {
        setTouchEndY(e.targetTouches[0].clientY);
    };

    const handleTouchEnd = () => {
        if (!touchStartY || !touchEndY) return;

        const swipeDistance = touchStartY - touchEndY;
        const isUpSwipe = swipeDistance > MIN_SWIPE_DISTANCE;
        const isDownSwipe = swipeDistance < -MIN_SWIPE_DISTANCE;

        if (isUpSwipe) {
            handleSlideNavigation("down");
        } else if (isDownSwipe) {
            handleSlideNavigation("up");
        }
    };

    useEffect(() => {
        let resizeDebounceTimer;

        const calculateMaxSlideIndex = () => {
            if (firstImageRef.current && sliderContainerRef.current) {
                const imageHeight = firstImageRef.current.offsetHeight;
                const containerHeight = sliderContainerRef.current.offsetHeight;
                const visibleImageCount = Math.floor(containerHeight / imageHeight);
                const newMaxIndex = Math.max(images.length - visibleImageCount, 0);

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
    }, [images.length]);

    return (
        <div className="flex flex-col gap-2">
        <div ref={sliderContainerRef} className="relative flex flex-col h-[40%] overflow-hidden">
            <VerticalTrack
                images={images}
                firstImageRef={firstImageRef}
                currentSlideIndex={currentSlideIndex}
                handleTouchStart={handleTouchStart}
                handleTouchMove={handleTouchMove}
                handleTouchEnd={handleTouchEnd}
            />

            {/* Navigation buttons */}
        </div>
        <div className="flex gap-4">
                <VerticalSliderButton
                    direction="up"
                    onClick={() => handleSlideNavigation("up")}
                />
                <VerticalSliderButton
                    direction="down"
                    onClick={() => handleSlideNavigation("down")}
                />
            </div>
        </div>
    );
};

export default VerticalSlider; 