import React from "react";

const TextInput = React.memo(({ placeholder, id, name, onChange, type }) => {

    return (
        <div className="mt-5">
            <input
                type={type}
                name={name}
                id={id}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-3 py-2 rounded-lg mt-2 border border-primary focus:border-primary focus:outline-none"
                autoComplete="true"
                required />
        </div>
    )
});

TextInput.displayName = 'TextInput';

export default TextInput