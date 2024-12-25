import React from "react";

const DeliveryOptions = ({ title, options }) => {
  return (
    <div className="delivery">
      {/* Title */}
      <h1 className="my-4 font-bold text-xl">{title}</h1>

      {/* Delivery Options List */}
      <ul className="flex flex-wrap justify-between">
        {options.map((option, index) => (
          <li key={index} className="flex items-center gap-4">
            <i className="text-green-500 fa-solid fa-check"></i>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeliveryOptions;
