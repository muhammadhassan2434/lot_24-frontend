import React from "react";

const ActionCard = ({
  iconClass,
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
}) => {
  return (
    <div className="mt-8 lg:mt-0 lg:ml-8 lg:w-2/5 h-auto flex lg:block justify-center">
      <div className="bg-white text-center p-6 rounded shadow-md">
        <i className={`${iconClass} text-[30px] bg-gray-300 text-white p-2 rounded-full`}></i>
        <h3 className="text-lg font-semibold text-blue-500 2xl:font-extrabold">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
        <div className="flex justify-center gap-4 mt-4 2xl:mt-8">
          <button className="bg-black text-white px-4 py-2 rounded">
            {primaryButtonText}
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded">
            {secondaryButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionCard;
