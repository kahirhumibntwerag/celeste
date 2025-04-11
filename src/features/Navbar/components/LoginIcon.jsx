import React from "react";
import { useState } from "react";
const LoginIcon = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="hover:underline hover:underline-offset-4 hidden lg:flex justify-center gap-2 items-center text-center font-bold text-[0.9rem] cursor-pointer"
    >
      <svg
        className={`${hovered ? "up-then-down" : ""}`}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.888428 16C0.888372 13.145 7.22176 13.3333 7.22176 11.3333C7.22176 10.6667 5.55509 8.33333 5.22176 6C4.88843 3.66667 5.88843 1 8.88843 1C11.8884 0.999998 12.8884 3.66667 12.5551 6C12.2218 8.33333 10.5551 10.6667 10.5551 11.3333C10.5551 13.3333 16.8884 13.145 16.8884 16C16.8884 16.5 16.3884 17 15.8884 17H1.88843C1.38843 17 0.888441 16.5 0.888428 16Z"
          stroke="currentColor"
        ></path>
      </svg>
      <span>Login</span>
    </div>
  );
};

export default LoginIcon;
