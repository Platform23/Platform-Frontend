import React from "react";
import Select from "react-tailwindcss-select";
import {communityProfile, communities} from "../../constants"

// const options = [
//     { value: "ix", label: "IA" },
//     { value: "hacking", label: "Hacking" },
//     { value: "networking", label: "Networking" }
// ];

const DropdownInput = ({placeholder, option}) => {

  const profile = communityProfile;
  const community = communities;

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
          options ={option}
          value={value}
          onChange={handleChange}
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
