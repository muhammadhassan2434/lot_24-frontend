import React from "react";
import TopSale from "./TopSale";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import Category from "./Category";
import Testing from "./Testing";

const TopNavbar = () => {
  return (
    <>
      {/* Top Sale Bar */}
      <TopSale />

      {/* 2nd Dark Navigation Bar */}
      <NavBar />

      {/* 3rd Search Bar */}
      <SearchBar />

      {/* 4th Info Bar */}
      <div className="w-full px-4 lg:px-24 py-3 bg-gray-100">
        <div className="container  max-w-[1280px] mx-auto flex flex-wrap justify-between gap-3 sm:gap-0">
          {/* Info Item 1 */}
          <div
            className="flex items-center gap-3 text-gray-600 
          cursor-pointer w-full sm:w-1/2 lg:w-1/4 text-center lg:text-left p-2"
          >
            <i className="fa-solid fa-globe text-[30px] text-[#F4B033]"></i>
            <h1 className="text-sm font-semibold">
              The best stocklot offers from 150 countries
            </h1>
          </div>
          {/* Info Item 2 */}
          <div className="flex items-center gap-3 text-gray-600 cursor-pointer w-full sm:w-1/2 lg:w-1/4 text-center lg:text-left p-2">
            <i className="fa-solid fa-user-group text-[30px] text-[#F4B033]"></i>
            <h1 className="text-sm font-semibold ">
              More than 100,000 satisfied users
            </h1>
          </div>
          {/* Info Item 3 */}
          <div className="flex items-center gap-3 text-gray-600 cursor-pointer w-full sm:w-1/2 lg:w-1/4 text-center lg:text-left p-2">
            <i className="fa-solid fa-percent text-[30px] text-[#F4B033]"></i>
            <h1 className="text-sm font-semibold">
              Offers cheaper by up to 90%
            </h1>
          </div>
          {/* Info Item 4 */}
          <div className="flex items-center gap-3 text-gray-600 cursor-pointer w-full sm:w-1/2 lg:w-1/4 text-center lg:text-left p-2">
            <i className="fa-solid fa-handshake text-[30px] text-[#F4B033]"></i>
            <h1 className="text-sm font-semibold">
              Direct contact to resellers and wholesalers
            </h1>
          </div>
        </div>
      </div>

      {/* 5th Category Bar */}
      {/* <Category /> */}
      <Testing />
    </>
  );
};

export default TopNavbar;
