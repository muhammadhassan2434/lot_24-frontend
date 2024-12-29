import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const token = localStorage.getItem("auth_token");
  const [navbarColor, setNavbarColor] = useState("#2a2a2a");

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    window.location.reload(); // Reload the page to reflect changes
  };
  const [dropdowns, setDropdowns] = useState({
    buyer: false,
    seller: false,
    currency: false,
  });

  const toggleDropdown = (type) => {
    setDropdowns((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await axios.get("https://api.lot24.ma/api/color/list");
        // console.log(response.data); // Log the response data
        const navbarColorData = response.data.find((color) => color.title.toLowerCase() === "navbar");
        if (navbarColorData) {
          setNavbarColor(navbarColorData.color); // Set the navbar color
        }
      } catch (error) {
        console.error("Error fetching colors:", error.response?.data || error.message);
      }
    };

    fetchColors();
  }, []);

  const closeAllDropdowns = () => {
    setDropdowns({
      buyer: false,
      seller: false,
      currency: false,
    });
  };

  return (
    
    <div className="lg:px-24" style={{ backgroundColor: navbarColor }}>
      <div className="container mx-auto flex justify-between items-center max-w-[1280px]">
        <div className="flex items-center gap-6">
          {/* Buyer Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => toggleDropdown("buyer")}
            onMouseLeave={closeAllDropdowns}
          >
            <button
              className="text-white py-2 px-4 focus:outline-none"
              onClick={() => toggleDropdown("buyer")}
            >
              For Buyer
            </button>
            {dropdowns.buyer && (
              <ul className="absolute left-0 overflow-hidden w-48 bg-white rounded-md shadow-lg z-10">
                <li>
                  <Link
                    className="block px-4 py-2 hover:bg-gray-300"
                    to="/buyer"
                  >
                    General Information
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-4 py-2 hover:bg-gray-300"
                    to="/register"
                  >
                    Registration
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* Seller Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => toggleDropdown("seller")}
            onMouseLeave={closeAllDropdowns}
          >
            <button
              className="text-white py-2 px-4  focus:outline-none"
              onClick={() => toggleDropdown("seller")}
            >
              For Seller
            </button>
            {dropdowns.seller && (
              <ul className="absolute left-0 overflow-hidden w-48 bg-white rounded-md shadow-lg z-10">
                <li>
                  <Link
                    className="block px-4 py-2 hover:bg-gray-300"
                    to="/seller"
                  >
                    General Information
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-4 py-2 hover:bg-gray-300"
                    to="/register"
                  >
                    Registration
                  </Link>
                </li>
              </ul>
            )}
          </div>
          {/* Seller Login */}
          <div className="relative">
          <div>
      {token ? (
        // Show logout button if token is present
        <button
          onClick={handleLogout}
          className="text-white px-4 py-2 rounded-lg"
        >
          {/* Logout */}
        </button>
      ) : (
        // Show login/register section if token is not present
        <Link
              to={"/seller/login"}
              className="text-white py-2 px-4  focus:outline-none"
            >
              Seller Login
            </Link>
      )}
    </div>

            
          </div>

          {/* Contact Link */}
          <Link
            to="/contact"
            className="text-white hover:text-white hidden md:block"
          >
            Contact Lot24
          </Link>
        </div>
        {/* Currency Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => toggleDropdown("currency")}
          onMouseLeave={closeAllDropdowns}
        >
          <button
            className="text-white py-2 px-4 focus:outline-none"
            onClick={() => toggleDropdown("currency")}
          >
            <i className="fas fa-dollar-sign mr-1"></i> Currency
          </button>
          {dropdowns.currency && (
            <ul className="absolute left-0 bg-white z-20 overflow-hidden w-48 2xl:w-64 rounded-md shadow-lg">
              {[
                { label: "USD", icon: "fa-dollar-sign" },
                { label: "EUR", icon: "fa-euro-sign" },
                { label: "GBP", icon: "fa-pound-sign" },
                { label: "JPY", icon: "fa-yen-sign" },
                { label: "INR", icon: "fa-rupee-sign" },
              ].map((currency, index) => (
                <li key={index}>
                  <Link className="block px-4 py-2 hover:bg-gray-300" to="#">
                    <i className={`fas ${currency.icon} mr-1`}></i>{" "}
                    {currency.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
