// MultiSelectDropdown.jsx
import React, { useState, useEffect, useRef } from 'react';

const MultiSelectDropdown = ({ options, selectedValues, setSelectedValues, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleOption = (option) => {
    const newSelected = selectedValues.includes(option)
      ? selectedValues.filter((item) => item !== option)
      : [...selectedValues, option];

    setSelectedValues(newSelected);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="form-input cursor-pointer font-semibold placeholder-[#303030] w-full"
      >
        {selectedValues.length > 0 ? selectedValues.join(', ') : placeholder}
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-auto">
          {options.map((option, idx) => (
            <label
              key={idx}
              className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedValues.includes(option)}
                onChange={() => toggleOption(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
