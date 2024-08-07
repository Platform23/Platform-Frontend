import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const PasswordInput = React.memo(({ placeholder, id, name, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="mt-5 relative">
            <input
                type={showPassword ? "text" : "password"}
                name={name}
                id={id}
                onChange={onChange}
                placeholder={placeholder}
                minLength="8"
                className="w-full px-3 py-2 rounded-lg mt-2 border border-primary focus:outline-none"
                required
            />
            <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 pt-2 flex items-center text-primary"
            >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </button>
        </div>
    );
});

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;