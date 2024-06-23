"use client";

import React, { useState, useRef, useEffect } from "react";

interface SolySelectProps {
  options: { id: string; name: string }[] | undefined;
  placeholder: string;
  onClick?: (value: string) => void;
}

const SolySelect: React.FC<SolySelectProps> = ({
  options,
  placeholder,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>("");
  const [dropdownWidth, setDropdownWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (id: string) => {
    setSelectedOption(id);
    setIsOpen(false);
    if (onClick) {
      onClick(id);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  useEffect(() => {
    if (dropdownRef.current) {
      const options = dropdownRef.current.children;
      let maxWidth = 0;
      for (let i = 0; i < options.length; i++) {
        const option = options[i] as HTMLElement;
        if (option.offsetWidth > maxWidth) {
          maxWidth = option.offsetWidth;
        }
      }
      setDropdownWidth(maxWidth + 20); // Adding some padding
    }
  }, [isOpen]);

  return (
    <div className="" ref={containerRef}>
      <div
        className="rounded-xl mr-2 text-[16px] font-normal border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-3 py-2 bg-white text-gray-700 cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
        style={{ minWidth: dropdownWidth }}
      >
        <span>
          {selectedOption
            ? options?.find((option) => option.id === selectedOption)?.name
            : placeholder}
        </span>
        <svg
          className={`w-4 h-4 transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute mt-1 w-auto bg-white border border-gray-300 rounded-xl shadow-lg z-10"
        >
          {options?.map((item, index) => (
            <div
              key={item.id}
              className={`text-black py-2 px-3 text-lg cursor-pointer ${
                index === 0 ? "rounded-t-xl" : ""
              } ${
                index === options.length - 1 ? "rounded-b-xl" : ""
              } hover:bg-[#4e43f1] hover:text-white`}
              onClick={() => handleOptionClick(item.id)}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SolySelect;

// hover:bg-[#4e43f1]
