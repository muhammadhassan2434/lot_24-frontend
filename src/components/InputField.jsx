import React, { useState } from "react";

const InputField = ({
  label,
  type = "text",
  name,
  id,
  required = false,
  placeholder = "",
  options = [],
  isPasswordToggle = false,
  value,
  onChange,
  error,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className={`w-full md:w-1/2 p-1 ${id === "invoice" ? "flex gap-8" : ""}`}>
      {label && (
        <label htmlFor={id} className="block font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {type === "select" ? (
        <select
          name={name}
          id={id}
          required={required}
          value={value}
          onChange={onChange}
          className="block mt-2 border border-gray-300 rounded-sm outline-none text-sm w-full px-2 py-2"
        >
          <option value="">Select an option</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === "radio" ? (
        <div className="flex items-center gap-4 mt-2">
          {options.map((option, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="radio"
                name={name}
                id={`${id}-${option.value}`}
                value={option.value}
                required={required}
                onChange={onChange}
                className="w-4 h-4 border-gray-300 border-2 rounded-sm"
              />
              <label htmlFor={`${id}-${option.value}`} className="text-sm">
                {option.label}
              </label>
            </div>
          ))}
        </div>
      ) : type === "checkbox" ? (
        <div className="flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            name={name}
            id={id}
            value={value}
            required={required}
            onChange={onChange}
            className="w-4 h-4 border-gray-300 border-2 rounded-sm"
          />
          {/* <label htmlFor={id} className="text-sm">
            {label}
          </label> */}
        </div>
      ) : (
        <div className={`relative ${isPasswordToggle && "flex items-center"}`}>
          <input
            type={isPasswordToggle && isPasswordVisible ? "text" : type}
            name={name}
            id={id}
            required={required}
            value={value}
            onChange={onChange}
            className="block mt-2 border border-gray-300 rounded-sm outline-none w-full px-2 py-1"
            placeholder={placeholder}
          />
          {isPasswordToggle && (
            <div
              className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? (
                <i className="fa-solid fa-eye-slash text-gray-400 text-sm"></i>
              ) : (
                <i className="fa-solid fa-eye text-gray-400 text-sm"></i>
              )}
            </div>
          )}
        </div>
      )}
      <p className="text-red-500 text-sm">{error}</p>
    </div>
  );
};

export default InputField;
