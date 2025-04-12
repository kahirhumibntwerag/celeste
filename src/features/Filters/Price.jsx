import React from "react";

const Price = ({ className }) => {
  return (
    <div className={`border-b-2 border-gray-300 py-8 ${className}`}>
      <h2 className="text-2xl font-bold">Price</h2>
      <div className="mt-4 space-y-2">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" />
          <span>$0 - $50</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" />
          <span>$50 - $100</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" />
          <span>$100 - $200</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" />
          <span>$200+</span>
        </label>
      </div>
    </div>
  );
};

export default Price; 