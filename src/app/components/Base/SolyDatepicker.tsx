"use client";

import React, { useState, forwardRef } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { tr } from "date-fns/locale";

// Register the Turkish locale
registerLocale("tr", tr);

// Define the props type for the custom input component
type CustomInputProps = {
  value?: string;
  onClick?: () => void;
};

// Custom input component for the DatePicker
const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ value, onClick }, ref) => (
    <div
      className="flex items-center border border-gray-300 px-3 py-2 bg-white text-gray-700 rounded-3xl focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-200 focus-within:ring-opacity-50 cursor-pointer"
      onClick={onClick}
    >
      <input
        value={value}
        readOnly
        ref={ref}
        className="border-none outline-none bg-transparent text-[13px] font-normal flex-grow cursor-pointer"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-calendar ml-2 text-gray-500"
        viewBox="0 0 16 16"
      >
        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-1h12V3a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v1z" />
      </svg>
    </div>
  )
);

CustomInput.displayName = "CustomInput";

// Props for the CustomDatePicker component
type CustomDatePickerProps = {
  onDateChange: (date: Date | null) => void;
};

const SolyDatePicker: React.FC<CustomDatePickerProps> = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
    onDateChange(date); // Call the parent component's callback
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={handleDateChange}
      customInput={<CustomInput />}
      locale="tr" // Set locale to Turkish
      dateFormat="dd/MM/yyyy" // Set date format to Turkish format
      calendarClassName="shadow-lg"
      dayClassName={(date) =>
        date.getDate() === startDate?.getDate() &&
        date.getMonth() === startDate?.getMonth() &&
        date.getFullYear() === startDate?.getFullYear()
          ? "bg-green-500 text-white hover:bg-green-600"
          : "hover:bg-gray-200"
      }
      popperClassName="z-30 mt-2" // Tailwind classes to ensure it appears above other components
      popperPlacement="bottom-start"
    />
  );
};

export default SolyDatePicker;
