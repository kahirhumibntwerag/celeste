import React from "react";

const SubmitButton = ({ 
  onClick, 
  className = "bg-white rounded-full p-1 text-black",
  children = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  )
}) => (
  <button onClick={onClick} className={className}>
    {children}
  </button>
);

export default SubmitButton; 