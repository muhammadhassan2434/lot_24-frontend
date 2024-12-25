import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [selectedProduct, setSelectedProduct] = useState("");

  const token = localStorage.getItem("auth_token");

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    window.location.reload(); // Reload the page to reflect changes
  };

  // Handle product selection change
  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  return (
    <>
      <div className="container mx-auto max-w-[1280px] flex flex-col lg:flex-row items-center justify-between">
        {/* Top Row for Logo and Profile Login/Sign Up */}
        <div className="flex items-center justify-between w-full lg:w-fit">
          {/* Logo */}
          <div className="flex items-center md:mr-4 mt-3 w-[50px]">
            <Link to="/">
              <img
                src="/src/assets/images/lot24Logo.png"
                alt="lot 24"
                className="w-full 2xl:w-[300px]"
              />
            </Link>
          </div>

          {/* Profile Login / Sign Up */}
          <div className="flex items-center gap-3 lg:hidden mt-3 ">
            <div>
              {token ? (
                // Show logout button if token is present
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Logout
                </button>
              ) : (
                // Show login/register section if token is not present
                <div className="flex items-center gap-2">
                  <i className="fa-regular fa-circle-user text-[30px] text-[#299BCC]"></i>
                  <div>
                    <h4 className="text-sm">Hello!</h4>
                    <h6 className="flex items-center gap-1 text-sm">
                      <Link to="/login" className="text-[#299BCC]">
                        Login
                      </Link>{" "}
                      |{" "}
                      <Link to="/register" className="text-red-500">
                        Create a new account
                      </Link>
                    </h6>
                  </div>
                </div>
              )}
            </div>
            <div>
              <Link to="#">
                <i
                  className="fa-solid fa-cart-shopping text-[20px] text-[#299BCC] border border-gray-500 p-2 rounded-full"
                  style={{ transform: "rotateY(180deg)" }}
                ></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Search Bar - Stacked on mobile */}
        <div className="w-full flex items-center justify-center mt-3">
          <div className="flex items-center border border-gray-300 overflow-hidden  w-full lg:max-w-md xl:max-w-lg mr-4">
            <div className="relative">
              {/* Dropdown Select for Products */}
              {/* <select
                value={selectedProduct}
                onChange={handleProductChange}
                className="bg-none text-gray-700   px-4 py-2 min-w-[150px]  2xl:min-w-[200px]  font-semibold outline-none w-full border-r"
              >
                <option value="products" className="">
                  Products
                </option>
                <option value="stockOffers" className="">
                  Stock offers
                </option>
                <option value="topOffers" className="">
                  Top offers
                </option>
              </select> */}
            </div>

            {/* Search Input */}
            <input
              type="text"
              className="h-full px-4 py-2  w-full outline-none"
              placeholder="Search Product"
            />

            {/* Search Button */}
            <button className="bg-[#299BCC] text-white h-full px-4 py-2 ">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        {/* Profile Login / Sign Up for larger screens */}
        <div className="hidden lg:flex items-center 2xl:gap-2 min-w-[300px] 2xl:min-w-fit mt-3">
          <div>
            {token ? (
              // Show logout button if token is present
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            ) : (
              // Show login/register section if token is not present
              <div className="flex items-center gap-2 2xl:gap-4">
                <i className="fa-regular fa-circle-user text-[40px] text-[#299BCC]"></i>
                <div>
                  <h4 className="text-sm">Hello!</h4>
                  <h6 className="flex items-center gap-2 2xl:gap-4 text-sm">
                    <Link to="/login" className="text-[#299BCC]">
                      login
                    </Link>{" "}
                    |{" "}
                    <Link to="/login" className="text-red-500">
                      Create Link new account
                    </Link>
                  </h6>
                </div>
              </div>
            )}
          </div>

          <div>
            <Link to="#">
              <i
                className="fa-solid fa-cart-shopping text-[18px] text-[#299BCC] border border-gray-500 p-2 ml-2 2xl:ml-4 rounded-full 2xl:p-4"
                style={{ transform: "rotateY(180deg)" }}
              ></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
