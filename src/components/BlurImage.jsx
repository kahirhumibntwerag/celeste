import React, { useState } from 'react';
import { cn } from '../features/Test/cn';

const BlurImage = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div className={cn(
        "absolute inset-0 bg-muted",
        isLoaded ? "animate-fadeOut" : "animate-pulse"
      )} />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={cn(
          'w-full h-full object-cover transition-all duration-300 ease-in-out',
          isLoaded ? 'blur-0' : ' blur-2xl'
        )}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
};

export default BlurImage; 