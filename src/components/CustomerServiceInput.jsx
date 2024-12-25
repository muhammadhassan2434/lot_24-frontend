import React from "react";

const CustomerServiceInput = ({
  id,
  name,
  value,
  handleChange,
  placeholder,
  type = "text",
  rows,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold mb-1">
        {placeholder}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          rows={rows}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}
    </div>
  );
};

export default CustomerServiceInput;
