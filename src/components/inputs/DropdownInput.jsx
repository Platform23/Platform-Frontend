import React, { useCallback } from "react";
import Select from "react-tailwindcss-select";

const DropdownInput = React.memo(({ placeholder, option, onChange }) => {
  const [value, setValue] = React.useState();

  const handleChange = useCallback(
    (selectedValue) => {
      setValue(selectedValue);
      onChange(selectedValue);
    },
    [onChange]
  );

  return (
    <div className="mt-5 w-full border-primary border rounded-lg items-center justify-center">

      <Select
        primaryColor="primary"
        size="lg"
        placeholder={placeholder}
        options={option}
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
});

DropdownInput.displayName = 'DropdownInput';


export default DropdownInput;
