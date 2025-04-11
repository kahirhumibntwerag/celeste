import React from 'react';

const VideoHero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-8">
      {/* LEFT: Two stacked images with aspect ratio */}
      <div className="grid grid-rows-2 gap-4">
        <div className="relative aspect-[10/9] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://mlameh.com/cdn/shop/files/IMG_0264_JPEG.jpg?v=1742158912&width=1100"
            alt="Hero Image 1"
          />
        </div>
        <div className="relative aspect-[10/9] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://mlameh.com/cdn/shop/files/IMG_0276_JPEG.jpg?v=1742158915&width=1100"
            alt="Hero Image 2"
          />
        </div>
      </div>

      {/* RIGHT: Video with aspect ratio */}
      <div className="h-full  overflow-hidden">
        <video
          playsInline
          autoPlay
          loop
          muted
          preload="metadata"
          poster="https://mlameh.com/cdn/shop/files/preview_images/02e81c4e733d4ce0b850c25d8b9c8d81.thumbnail.0000000000_small.jpg?v=1742242039"
          className="w-full h-full object-cover"
        >
          <source
            src="https://mlameh.com/cdn/shop/videos/c/vp/02e81c4e733d4ce0b850c25d8b9c8d81/02e81c4e733d4ce0b850c25d8b9c8d81.HD-1080p-7.2Mbps-44333335.mp4?v=0"
            type="video/mp4"
          />
          <img
            src="https://mlameh.com/cdn/shop/files/preview_images/02e81c4e733d4ce0b850c25d8b9c8d81.thumbnail.0000000000_small.jpg?v=1742242039"
            alt="Fallback Poster"
          />
        </video>
      </div>
    </div>
  );
};

export default VideoHero;