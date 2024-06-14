import React from "react";
import SelectContainer from "../container/SelectContainer";
import Select from "react-tailwindcss-select";

const options = [
    { value: "ix", label: "IA" },
    { value: "hacking", label: "Hacking" },
    { value: "networking", label: "Networking" }
];

const DropdownInput = ({placeholder}) => {
  const [value, setValue] = React.useState();

  const handleChange = value => {
    console.log("value:", value);
    setValue(value);
};

  return (
    <div className="mt-5 w-full border-primary border rounded-lg items-center justify-center">

        <Select
          primaryColor="primary"
          size="lg"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          options ={options}
          isMultiple
          isSearchable
          isClearable
          required
        >
        </Select>
    </div>
  );
};

export default DropdownInput;
