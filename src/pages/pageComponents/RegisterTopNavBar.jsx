import React from "react";
import { Link } from "react-router-dom";

const RegisterTopNavBar = () => {
  return (
    <>
      <div className="bg-green-500 text-white text-center py-2">
        <i className="fa-solid fa-lock mr-2"></i>
        Your data is encrypted. You register safely.
      </div>
      {/* Nav */}
      <div className="flex flex-col max-w-[1280px] md:flex-row pt-4 pb-4 md:items-center justify-between gap-4 text-gray-600 container mx-auto">
        <Link to={"/"}>
          <img
            src="/src/assets/images/lot24Logo.png"
            alt="logo"
            className="max-w-[200px] w-[50px]"
          />
        </Link>
        <div className="flex md:items-center flex-col md:flex-row gap-4  ">
          <h1 className="flex items-center">
            <i className="fa-solid fa-phone mr-2"></i>
            <span className="text-xl  ">+44 330 127 9628</span>
          </h1>
          <h1 className="flex items-center">
            <i className="fa-solid fa-envelope mr-2"></i>
            <span className="text-xl  ">info@ezezezezez.com</span>
          </h1>
          {/* Dropdown */}
          <div className="relative group">
            <button className="flex items-center px-4 py-2 border rounded-md bg-gray-100">
              <i className="fas fa-dollar-sign mr-2"></i> Currency
            </button>
            <div className="absolute hidden group-hover:block group-focus:block bg-white shadow-md  rounded-lg overflow-hidden">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <i className="fas fa-dollar-sign mr-1"></i> USD
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <i className="fas fa-euro-sign mr-1"></i> EUR
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <i className="fas fa-pound-sign mr-1"></i> GBP
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <i className="fas fa-yen-sign mr-1"></i> JPY
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <i className="fas fa-rupee-sign mr-1"></i> INR
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterTopNavBar;
