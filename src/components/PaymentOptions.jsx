import React from "react";

const PaymentOptions = ({ title, options }) => {
  return (
    <div className="payments">
      {/* Title */}
      <h1 className="text-xl font-bold my-4">{title}</h1>

      {/* Payment Options List */}
      <ul>
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

export default PaymentOptions;
