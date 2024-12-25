import React from "react";
import flash from "../../assets/images/flash.png";
import sale_img from "../../assets/images/desktop_small.jpg";
import { Link } from "react-router-dom";
const TopSale = () => {
  const top_sale = {
    backgroundImage: `url(${sale_img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <>
      <div className="w-full ml-auto mr-auto">
        <div className="top-bar min-h-[90px] py-2 flex bg-[#05006E]">
          <div className="w-full justify-center flex" style={top_sale}>
            <div className="max-w-[1280px] flex items-center justify-between container text-white ">
              <h1 className="hidden lg:flex items-center text-[30px] font-extrabold">
                <img src={flash} alt="flash logo" className="w-[40px]" />
                FLash Sale
              </h1>
              <div className="percentage text-[15px] md:text-[30px] font-bold bg-[red] px-3 text-white">
                20%
              </div>
              <div className="hidden lg:block">
                <h1 className="font-bold ">
                  For one-year REGISTRATION and RENEWAL
                </h1>
                <p className="">promotions cannot be combined</p>
              </div>
              <div>
                <h1 className="text-center text-lg font-bold ">20</h1>
                <p className="text-center md-text-left ">
                  Number of remaining packages
                </p>
              </div>
              <Link
                to="/register"
                className="hover:bg-[#c08f33] hover:text-white cursor-pointer text-white gap-2
                         bg-[#f29d00] py-1 px-3 text-[15px] md:text-[20px] flex items-center justify-center min-h-[30px]"
              >
                <span className="pb-[3px] font-bold">Register</span>
                <i className="fa-solid fa-angles-right m-0 p-0"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSale;
