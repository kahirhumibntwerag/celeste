import React from "react";
import { useNavigate } from "react-router-dom";

// New components
const ImageContainer = ({ product, selectedColorIndex, navigate }) => (
  <div className="relative w-full h-full group" onClick={() => navigate(`/products/${product.id}`)}>
    <img
      className="absolute inset-0 w-full h-full object-cover opacity-[1] group-hover:opacity-[0] transition-all duration-500"
      src={product.colors[selectedColorIndex].mainImage}
      alt={product.title}
    />
    <img
      className="absolute inset-0 w-full h-full object-cover opacity-[0] group-hover:opacity-[1] transition-all duration-500"
      src={product.colors[selectedColorIndex].hoverImage}
      alt={product.title}
    />
    <QuickViewButton navigate={navigate} />
  </div>
);

const QuickViewButton = ({ navigate }) => (
  <button 
    className="absolute top-[90%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer px-15 py-1 text-xl rounded-2xl border-1 border-black bg-white text-black opacity-0 group-hover:opacity-100 hover:scale-105 transition-all duration-500"
    onClick={(e) => {
      e.stopPropagation();
      navigate('/');
    }}
  >
    Quickview
  </button>
);

const ProductTitle = ({ title }) => (
  <h2 className="text-xl font-bold">{title}</h2>
);

const ProductPrice = ({ price }) => (
  <span className="text-lg">{price}</span>
);

const ColorSwatch = ({ colors, selectedColorIndex, setSelectedColorIndex }) => (
  <div className="flex gap-1">
    {colors.map((color, index) => (
      <div
        key={color.name}
        style={{ 
          backgroundColor: color.name,
          ...(selectedColorIndex === index && { boxShadow: `0 0 0 2px white, 0 0 0 3px ${color.name}` })
        }}
        className={`rounded-full w-4 h-4 cursor-pointer`}
        onClick={() => setSelectedColorIndex(index)}
      ></div>
    ))}
  </div>
);

const Product = ({ product }) => {
  const navigate = useNavigate();
  const [selectedColorIndex, setSelectedColorIndex] = React.useState(0);

  return (
    <div className="w-full p-2 flex flex-col gap-3 ">
      <div className="w-full aspect-[3/5] cursor-pointer">
        <ImageContainer 
          product={product} 
          selectedColorIndex={selectedColorIndex} 
          navigate={navigate} 
        />
      </div>
      <div className="flex flex-col gap-3">
        <ProductTitle title={product.title} />
        <ProductPrice price={product.price} />
        <ColorSwatch 
          colors={product.colors}
          selectedColorIndex={selectedColorIndex}
          setSelectedColorIndex={setSelectedColorIndex}
        />
      </div>
    </div>
  );
};

export default Product;
