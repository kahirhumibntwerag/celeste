import React, { useState, forwardRef, useRef, useEffect } from "react";
import { cn } from "./cn";

// Basic UI components with forwardRef

const Card = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    {...props}
    className={cn("border-2 border-black w-[150px] h-[300px]", className)}
  />
));
Card.displayName = "Card";

const ImageContainer = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    {...props}
    className={cn("relative overflow-hidden", className)}
  />
));
ImageContainer.displayName = "ImageContainer";

const Image = forwardRef(({ className, ...props }, ref) => (
  <img
    ref={ref}
    loading="lazy"
    {...props}
    className={cn("absolute inset-0 top-0 w-full h-full object-cover", className)}
  />
));
Image.displayName = "Image";

const Price = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} {...props} className={cn("text-lg", className)} />
));
Price.displayName = "Price";

const Title = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} {...props} className={cn("text-xl font-semibold", className)} />
));
Title.displayName = "Title";

const ColorSelector = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} {...props} className={cn("flex gap-2", className)} />
));
ColorSelector.displayName = "ColorSelector";

const Color = forwardRef(({ className, style, ...props }, ref) => (
  <span
    ref={ref}
    {...props}
    style={style}
    className={cn("rounded-full w-4 h-4 cursor-pointer", className)}
  />
));
Color.displayName = "Color";

// Composed ProductCard component

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <Card className="flex flex-col gap-2 p-2">
      <ImageContainer className="h-[80%] w-full group aspect-[3/5]  border-2 border-black">
        <Image
          className="opacity-100 group-hover:opacity-0 transition-all duration-500"
          src={product.mainImage}
          alt={product.title}
        />
        <Image
          className="opacity-0 group-hover:opacity-100 transition-all duration-500"
          src={product.hoverImage}
          alt={product.title}
        />
      </ImageContainer>
      <Title>{product.title}</Title>
      <Price>{product.price}</Price>
      <ColorSelector>
        {product.colors.map((color) => (
          <Color
            key={color.name}
            style={{ backgroundColor: color.name }}
            onClick={() => setSelectedColor(color.name)}
            className={selectedColor === color.name ? "border-2 border-black" : ""}
          />
        ))}
      </ColorSelector>
    </Card>
  );
};

// Export all components
export {
  Card,
  ImageContainer,
  Image,
  Price,
  Title,
  ColorSelector,
  Color,
  ProductCard,
};
