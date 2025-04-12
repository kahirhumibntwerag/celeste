const DropdownList = ({ options, currentFilter, onSelect }) => {
  return (
    <ul className="w-[200px] absolute top-full bg-white border-1 border-black p-1 z-10">
      {options.map(
        (option) =>
          option !== currentFilter && (
            <DropdownItem 
              key={option}
              option={option}
              onClick={() => onSelect(option)}
            />
          )
      )}
    </ul>
  );
};

const DropdownItem = ({ option, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="p-2 hover:bg-gray-100 cursor-pointer"
    >
      {option}
    </li>
  );
};

export default DropdownList; 