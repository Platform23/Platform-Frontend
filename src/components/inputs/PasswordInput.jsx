import React from "react";

const PasswordInput = React.memo(({ placeholder, id, name, onChange }) => {
    return (
        <div className="mt-5">
            <input
                type="password"
                name={name}
                id={id}
                onChange={onChange}
                placeholder={placeholder}
                minLength="8"
                className="w-full px-3 py-2 rounded-lg mt-2 border border-primary focus:outline-none"
                required />
        </div>
    )
});

PasswordInput.displayName = 'PasswordInput';


export default PasswordInput