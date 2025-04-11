import React, { useState } from "react";

const BagIcon = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex hover:underline hover:underline-offset-4 justify-center gap-2 items-center text-center font-bold text-[0.9rem] cursor-pointer overflow-hidden"
    >
      <svg
        className={`${hovered ? 'up-then-down' : ''}`}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.3884 9V5.05747C13.3884 3 11.7884 1 9.38843 1C6.98843 1 5.38843 3 5.38843 5.05747V9M1.22192 5H17.2219V17H1.22192V5Z"
          stroke="currentColor"
        />
      </svg>
      <span>Bag</span>
    </div>
  );
};

export default BagIcon;
