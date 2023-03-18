import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const PasswordInput = ({ label, placeholder, value, ...props }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="mt-3 flex flex-col">
      <label className="text-sm mb-1" htmlFor="email">
        {label}
      </label>
      <div className="border border-slate-400 rounded-md flex items-center">
        <input
          type={isPasswordVisible ? "text" : "password"}
          id="email"
          placeholder={placeholder}
          name={props.name}
          value={value}
          onChange={props.onChange}
          className="h-9 outline-none focus:outline-none rounded-md px-3 w-full placeholder:text-slate-400"
        />
        <button
          type="button"
          className="px-2"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          {isPasswordVisible ? (
            <AiOutlineEyeInvisible className="w-5 h-5 text-slate-400" />
          ) : (
            <AiOutlineEye className="w-5 h-5 text-slate-400" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
