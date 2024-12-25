import React from "react";
import flash from "../assets/images/flash.png";

const FlashSales = ({top_sale}) => {
  return (
    <>
      <div className="p-2 bg-[#1b1b1b]">
        <div className="p-4 md:p-4" style={top_sale}>
          <div className="container mx-auto  max-w-[1280px]">
            <h1 className="text-white flex items-center text-[50px] font-extrabold">
              <img src={flash} alt="flash logo" className="w-[40px] " />
              Flash Sale
            </h1>
            <div className="flex flex-col md:flex-row md:items-center justify-between my-4">
              <div className="flex md:items-center flex-col md:flex-row gap-4">
                <div className="w-fit text-[15px] md:text-[30px] font-bold bg-red-500 px-3 text-white  ">
                  20%
                </div>
                <div className="text-white">
                  <h1 className="font-bold  ">
                    For one-year REGISTRATION and RENEWAL
                  </h1>
                  <p className=" ">Promotions cannot be combined</p>
                </div>
              </div>
              <div className="text-white">
                <h1 className="md:text-center text-4xl font-bold">20</h1>
                <p className="md:text-center text-xl">
                  Number of remaining packages
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashSales;
