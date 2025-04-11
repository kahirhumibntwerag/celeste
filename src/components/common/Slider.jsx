import React, { useState, useEffect, useRef, useCallback } from 'react'
import { SliderButton } from '../../features/Slider/Components/SliderButton'

export const GenericSlider = ({
  children,
  slideWidth = 300,
  gap = 0,
  autoPlayInterval = 5000,
  autoPlay = true,
  className = '',
  showArrows = true,
}) => {
  const [index, setIndex] = useState(0)
  const [maxIndex, setMaxIndex] = useState(0)
  const [touching, setTouching] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchMove, setTouchMove] = useState(0)

  const containerRef = useRef(null)
  const slideRef = useRef(null)
  const innerSliderRef = useRef(null)


  const slideTo = useCallback((newIndex) => {
    if (newIndex < 0) {
      setIndex(maxIndex)
    } else if (newIndex > maxIndex) {
      setIndex(0)
    } else {
      setIndex(newIndex)
    }
  }, [maxIndex])

  const handleTouchStart = (e) => {
    setTouching(true)
    setTouchStart(e.touches[0].clientX)
    setTouchMove(e.touches[0].clientX)
  }

  const handleTouchMove = (e) => {
    if (!touching) return
    setTouchMove(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touching) return
    const diff = touchStart - touchMove
    
    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) {
        slideTo(index + 1)
      } else {
        slideTo(index - 1)
      }
    }
    
    setTouching(false)
  }

  const handlePrev = () => slideTo(index - 1)
  const handleNext = () => slideTo(index + 1)

  // Calculate maxIndex based on container and slide width
  useEffect(() => {
    let timeoutId;
  
    const calculateMaxIndex = () => {
      const containerWidth = containerRef.current?.offsetWidth || 0
      const slideWidth = slideRef.current?.offsetWidth || 1
      const visibleCount = Math.floor(containerWidth / slideWidth)
      const totalSlides = React.Children.count(children)
      const newMaxIndex = Math.max(totalSlides - visibleCount, 0)
  
      setMaxIndex(newMaxIndex)
      setIndex(prev => Math.min(prev, newMaxIndex))
    }
  
    const handleResize = () => {
      clearTimeout(timeoutId)  // Cancel previous timeout
      timeoutId = setTimeout(() => {
        calculateMaxIndex()
      }, 200) // Wait 200ms after last resize
    }
  
    calculateMaxIndex() // run initially
    window.addEventListener('resize', handleResize)
  
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', handleResize)
    }
  }, [children])
  
  
  

  // Auto-slide
  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(handleNext, autoPlayInterval)
    return () => clearInterval(interval)
  }, [index, maxIndex, autoPlay, autoPlayInterval])

  return (
    <div className={`relative w-full ${className} overflow-hidden border-2 border-red-800`}>
      <div 
        className="w-full"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="region"
        aria-label="Content slider"
      >
        <div
          ref={innerSliderRef}
          className="flex transition-transform duration-500 ease-out "
          style={{ 
            gap: `${gap}px`,
            transform: `translateX(-${index * (slideWidth + gap)}px)${
              touching ? ` translateX(${touchMove - touchStart}px)` : ''
            }`
          }}
        >
          {React.Children.map(children, (child, i) => (
            <div 
              key={i}
              ref={i === 0 ? slideRef : null}
              style={{ width: slideWidth }}
              className="shrink-0"
              role="group"
              aria-roledescription="slide"
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <div className="w-[95%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-between">
          <SliderButton 
            direction="left" 
            onClick={handlePrev}
          />
          <SliderButton 
            direction="right" 
            onClick={handleNext}
          />
        </div>
      )}
    </div>
  )
} 