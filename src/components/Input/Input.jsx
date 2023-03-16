import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Input = ({ type, label, placeholder }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputType = isPasswordVisible ? "text" : "password";

  return (
    <div className="mt-3 flex flex-col">
      <label htmlFor="email">{label}</label>
      <div className="border border-slate-400 rounded-md flex items-center">
        <input
          type={type === "password" ? inputType : type}
          id="email"
          placeholder={placeholder}
          name="email"
          className="h-9 outline-none focus:outline-none rounded-md px-3 w-full placeholder:text-slate-400"
        />
        {type === "password" && (
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
        )}
      </div>
    </div>
  );
};

export default Input;
