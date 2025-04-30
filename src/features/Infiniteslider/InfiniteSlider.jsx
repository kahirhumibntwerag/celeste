import React, { useState } from "react";

const InfiniteSlider = ({ children, itemWidth = 250 }) => {
  const [pause, setPause] = useState(false);
  
  const items = React.Children.toArray(children);

  return (
    <div
      onMouseOver={() => setPause(false)}
      onMouseLeave={() => setPause(false)}
      style={{ "--width": `${itemWidth}px`, "--quantity": items.length.toString() }}
      className="hidden xl:block w-full h-[150px] mx-auto relative overflow-hidden"
    >
      {items.map((item, index) => (
        <div
          key={index}
          style={{ "--position": index.toString() }}
          className={`flex items-center  absolute scroll-right ${
            pause ? "pause" : ""
          }`
          }
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default InfiniteSlider;
