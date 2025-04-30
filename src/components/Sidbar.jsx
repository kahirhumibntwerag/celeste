import React from "react";
import { useRef } from "react";
const Sidbar = ({children, className, showFilter, setShowFilter}) => {
  const filterRef = useRef(null);
  function handleFilter () {
    if (showFilter === true){
      return 'slide-in'
    }
    else if (showFilter === false){
      return 'slide-out'
    }
    else if (showFilter === 'hidden'){
      return 'hidden'
    }
  }

  function handleClick (){
    setShowFilter(() => false)
    setTimeout(()=>setShowFilter('hidden'), 300)

  }

  return (
    <div>
      {" "}
      <div
        className={`fixed inset-0 bg-black/30 z-40 block  ${
          showFilter === true ? "block" : "hidden"
        }`}
        onClick={handleClick}
      />
      {/* Filter sidebar (mobile) */}
      <div
        ref={filterRef}
        className={`fixed top-0  w-[60%] h-full bg-white p-4 z-50   ${
          handleFilter()
        } `}
      >
        <div className={className}>
          {children}

        </div>
        {" "}
      </div>
    </div>
  );
};

export default Sidbar;
