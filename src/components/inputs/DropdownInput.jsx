import React from "react";
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
    <div className="mt-5 w-full border-primary border rounded-lg">
      <Select
      primaryColor="indigo"
        size="lg"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        options ={options}
        // autoComplete="off"
        required
      >
      </Select>
    </div>
  );
};

export default DropdownInput;
