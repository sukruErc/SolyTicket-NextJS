import React from "react";
import Select from "react-select";

interface SearchableSelectProps {
  name: string;
  options: any[];
  placeholder: string;
  onOptionSelect?: (id: string | null, name: string | null) => void; // Optional onOptionSelect prop
  selectedValue?: string; // Optional selectedValue prop
  instanceId?: string; // Optional instanceId prop for consistent ID generation
}

const customStyles = {
  container: (provided: any) => ({
    ...provided,
    width: "30%", // Adjust the width as per your requirement
    minWidth: "200px", // Minimum width to ensure readability
    border: "none",
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    border: state.isFocused || state.hasValue ? "2px solid #4E43F1" : "none", // Add border when focused or has value
    boxShadow: "none", // Remove box shadow
    cursor: "pointer",
    padding: "0", // Remove padding
    "&:hover": {
      border: state.isFocused || state.hasValue ? "2px solid #4E43F1" : "none", // Add border on hover when focused or has value
    },
    backgroundColor: state.isFocused ? "#f9f9f9" : "white", // Change background color on focus
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: "#999", // Change color to match the example
    padding: "0", // Remove padding
  }),
  indicatorSeparator: () => ({
    display: "none", // Remove the separator
  }),
  singleValue: (provided: any) => ({
    ...provided,
    fontWeight: "bold", // Make the text bold
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    padding: "0", // Remove default padding
  }),
  input: (provided: any) => ({
    ...provided,
    margin: "0", // Remove margin
    padding: "0", // Remove padding
  }),
  menu: (provided: any) => ({
    ...provided,
    border: "none", // Remove border from the menu
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Add shadow to the dropdown menu
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    padding: "0.5rem", // Tailwind padding class equivalent to p-2
    backgroundColor: state.isSelected
      ? "#f0f0f0"
      : state.isFocused
      ? "#f9f9f9"
      : "white", // Add background color on hover and selection
    color: "#333", // Text color
    "&:hover": {
      backgroundColor: "#4E43F1", // Change background color on hover
      color: "white", // Change text color on hover
    },
  }),
  placeholder: (provided: any, state: any) => ({
    ...provided,
    fontWeight: "bold", // Make the placeholder text bold
    display: state.isFocused ? "none" : "block", // Hide placeholder when focused
  }),
};

const SearchableSelect = (props: SearchableSelectProps) => {
  const handleChange = (selectedOption: any) => {
    if (props.onOptionSelect) {
      if (selectedOption) {
        props.onOptionSelect(selectedOption.value, selectedOption.label);
      } else {
        props.onOptionSelect(null, null); // Handle unselect
      }
    }
  };

  // Find the selected option based on the selectedValue prop
  const selectedOption = props.options.find(
    (option) => option.value === props.selectedValue
  );

  return (
    <Select
      styles={customStyles}
      classNamePrefix="react-select"
      name={props.name}
      options={props.options}
      placeholder={props.placeholder}
      className="border-none focus:ring-0 focus:border-transparent"
      onChange={handleChange} // Trigger the onChange handler
      isClearable // Allow clearing the selection
      value={selectedOption} // Set the selected option
      instanceId={props.instanceId} // Use instanceId for consistent ID generation
    />
  );
};

export default SearchableSelect;
