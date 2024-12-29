import React, { useState } from "react";
import { Link } from "react-router-dom";
import CategoryItem from "./CategoryItem";
// import { categories } from "../../utils/data";

const Category = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Desktop Menu */}
      <div className="bg-[#299BCC] shadow-md">
        <div className="py-3 hidden lg:flex justify-between items-center ">
          <div className="flex items-center gap-6 text-light">
            <div className="bg-[#1d7094] dropdown py-2 min-w-[250px]">
              <button
                className="btn w-full flex items-center text-white h-full border-none outline-none focus:outline-none focus:border-none focus:shadow-none dropdown-toggle"
                type="button"
                id="Categories"
                aria-expanded="false"
              >
                <i className="fa-solid fa-bars mr-2"></i>
                <span className="text-lg font-semibold">Categories</span>
              </button>
              <ul
                className="dropdown-menu w-full mt-2"
                aria-labelledby="Categories"
              >
                {categories.map((item, index) => (
                  <CategoryItem key={index} category={item} />
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-6 text-gray-200">
              <Link
                to="#"
                className="px-4 py-2 text-lg hover:text-white font-bold transition duration-300 ease-in-out"
              >
                Products
              </Link>
              <Link
                to="#"
                className="py-2 px-4 text-lg hover:text-white font-bold transition duration-300 ease-in-out"
              >
                Stocks
              </Link>
              <Link
                to="#"
                className="py-2 px-4 text-lg hover:text-white font-bold transition duration-300 ease-in-out"
              >
                Wholesalers
              </Link>
              <Link
                to="#"
                className="py-2 px-4 text-lg hover:text-white font-bold transition duration-300 ease-in-out"
              >
                Top offers
              </Link>
            </div>
          </div>
          <div>
            <a
              href="#"
              className="py-3 px-6 bg-[#f29d00] text-white font-bold rounded-md hover:bg-[#fbc053] transition duration-300 ease-in-out"
            >
              Add offers
              <i className="fa-solid fa-plus ml-2"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden flex justify-between items-center bg-[#299BCC] py-3">
        <button onClick={toggleMenu} className="text-white text-2xl">
          <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`} />
        </button>
        <div
          className={`absolute top-0 left-0 w-full bg-[#1d7094] transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="px-6 py-4">
            {categories.map((item, index) => (
              <CategoryItem key={index} category={item} />
            ))}
          </div>
          <div className="px-6 py-4">
            <Link
              to="#"
              className="block text-white py-2 hover:bg-[#fbc053] rounded-md"
            >
              Products
            </Link>
            <Link
              to="#"
              className="block text-white py-2 hover:bg-[#fbc053] rounded-md"
            >
              Stocks
            </Link>
            <Link
              to="#"
              className="block text-white py-2 hover:bg-[#fbc053] rounded-md"
            >
              Wholesalers
            </Link>
            <Link
              to="#"
              className="block text-white py-2 hover:bg-[#fbc053] rounded-md"
            >
              Top offers
            </Link>
            <Link
              to="#"
              className="block text-white py-2 hover:bg-[#fbc053] rounded-md"
            >
              Add offers
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
