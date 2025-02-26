import React, { useState, useTransition } from "react";
import { Link } from "react-router-dom";
import lot24Logo from "../../assets/images/logo.png";
import axios from "axios";
import { useTranslation } from "react-i18next";


const SearchBar = () => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
const { t, i18n } = useTranslation();
  console.log(searchTerm)
  console.log(searchResults)

  const token = localStorage.getItem("auth_token");

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    window.location.reload(); // Reload the page to reflect changes
  };

  // Handle product selection change
  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  const fetchSearchResults = async (query) => {
    if (query.length > 2) {
      try {
        const response = await axios.get(
          `https://api.lot24.ma/api/product-search?search=${query}`
        );
        console.log("Fetched products:", response.data);
  
        // Ensure we store only matching products
        const filteredResults = response.data.data.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        );
  
        setSearchResults(filteredResults);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setSearchResults([]); // Clear results on error
      }
    } else {
      setSearchResults([]); // Clear results if query is too short
    }
  };
  
  
  // Handle input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    fetchSearchResults(query);
  };
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setSearchTerm(product.name);
    setSearchResults([]); // Hide suggestions after selection
  }

  return (
    <>
      <div className="container mx-auto max-w-[1280px] flex flex-col lg:flex-row items-center justify-between">
        {/* Top Row for Logo and Profile Login/Sign Up */}
        <div className="flex items-center justify-between w-full lg:w-fit">
          {/* Logo */}
          <div className="flex items-center md:mr-4">
            <Link to="/">
              <img
                src={lot24Logo}
                alt="lot 24"
                className="w-[100px] md:w-[110px] h-[170px]" // Adjust sizes as needed
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
                  {t("header.header23")}
                </button>
              ) : (
                // Show login/register section if token is not present
                <div className="flex items-center gap-2">
                  <i className="fa-regular fa-circle-user text-[30px] text-[#299BCC]"></i>
                  <div>
                    <h4 className="text-sm">Hello!</h4>
                    <h6 className="flex items-center gap-1 text-sm">
                      <Link to="/login" className="text-[#299BCC]">
                      {t("header.header22")}
                      </Link>{" "}
                      |{" "}
                      <Link to="/register" className="text-red-500">
                      {t("header.header24")}
                      </Link>
                    </h6>
                  </div>
                </div>
              )}
            </div>
            <div>
              <Link to="#">
                {/* <i
                  className="fa-solid fa-cart-shopping text-[20px] text-[#299BCC] border border-gray-500 p-2 rounded-full"
                  style={{ transform: "rotateY(180deg)" }}
                ></i> */}
              </Link>
            </div>
          </div>
        </div>

        {/* Search Bar - Stacked on mobile */}
        <div className="relative w-full lg:max-w-md xl:max-w-lg mr-4 flex">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="h-full px-4 py-2 w-full outline-none border border-gray-300"
          placeholder="Search Product"
        />
        <button className="bg-[#299BCC] text-white h-full px-4 py-2">
          <i className="fas fa-search"></i>
        </button>

       
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
                {t("header.header23")}
              </button>
            ) : (
              // Show login/register section if token is not present
              <div className="flex items-center gap-2 2xl:gap-4">
                <i className="fa-regular fa-circle-user text-[40px] text-[#299BCC]"></i>
                <div>
                  <h4 className="text-sm">{t("footer.footer1")}!</h4>
                  <h6 className="flex items-center gap-2 2xl:gap-4 text-sm">
                    <Link to="/login" className="text-[#299BCC]">
                    {t("header.header22")}
                    </Link>{" "}
                    |{" "}
                    <Link to="/login" className="text-red-500">
                    {t("header.header24")}
                    </Link>
                  </h6>
                </div>
              </div>
            )}
          </div>

          <div>
            <Link to="#">
              {/* <i
                className="fa-solid fa-cart-shopping text-[18px] text-[#299BCC] border border-gray-500 p-2 ml-2 2xl:ml-4 rounded-full 2xl:p-4"
                style={{ transform: "rotateY(180deg)" }}
              ></i> */}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
