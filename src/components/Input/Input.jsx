import React, { useId, useState } from "react";

const Input = ({ label, placeholder, type, value, ...props }) => {
  const id = useId();

  return (
    <div className="mt-3 flex flex-col">
      <label className="text-sm mb-1" htmlFor={id}>
        {label}
      </label>
      <div className="border border-slate-400 rounded-md flex items-center">
        <input
          type={type}
          id={id}
          name={props.name}
          placeholder={placeholder}
          className="h-9 outline-none focus:outline-none rounded-md px-3 w-full placeholder:text-slate-400"
          value={value}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default Input;
