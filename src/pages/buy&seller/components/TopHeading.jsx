import React from "react";
// import store from '../assets/images/register-1.jpg';
import store from "../../../assets/images/register-1.jpg";

const TopHeading = ({ heading, para }) => {
  const header = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${store})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backdropFilter: "brightness(0)",
  };

  return (
    <>
      <div className="py-6 px-4 md:px-0" style={header}>
        <div className="flex items-center  max-w-[1280px] justify-center flex-col container mx-auto">
          <h1 className="mt-6 text-6xl text-white font-bold ">{heading}</h1>
          <p className="mt-3 text-xl w-[80%] text-center text-gray-300">
            {para}
          </p>
        </div>
      </div>
    </>
  );
};

export default TopHeading;
