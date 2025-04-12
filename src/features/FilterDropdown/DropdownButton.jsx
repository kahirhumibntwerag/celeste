const DropdownButton = ({ showList, setShowList, selectedValue }) => {
  return (
    <button
      onClick={() => setShowList(!showList)}
      className={`w-full text-start py-1 px-2 border-1 border-black transition-all duration-200 ${
        showList ? "" : "rounded-4xl"
      }`}
    >
      <div className="flex justify-between items-center text-center">
        {selectedValue}
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7 7L13 1"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </button>
  );
};

export default DropdownButton; 