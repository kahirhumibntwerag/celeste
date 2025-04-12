const Availability = ({ className }) => {
  return (
    <div className={`border-b-2 border-gray-300 py-8 ${className || ''}`}>
      <h2 className="text-2xl font-bold">Availability</h2>
      <div className="flex items-center gap-2 py-2 text-">
        <input
          className="accent-black rounded-none"
          type="checkbox"
          id="in-stock"
        />
        <label htmlFor="in-stock">In Stock</label>
      </div>
      <div className="flex items-center gap-2 py-2">
        <input
          className="accent-black rounded-none"
          type="checkbox"
          id="out-stock"
        />
        <label htmlFor="out-stock">Out Of Stock</label>
      </div>
    </div>
  );
};

export default Availability; 