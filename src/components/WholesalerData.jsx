import React, { useState } from "react";

const WholesalerData = ({ wholesaler, isDetailInitial, hours, currentDay }) => {
  const [isDetail, setIsDetail] = useState(isDetailInitial);
  const [hoveredHours, setHoveredHours] = useState("Closed");
    console.log('Current Day', currentDay);
  const dayMap = {
    Monday: "Mon",
    Tuesday: "Tues",
    Wednesday: "Wed",
    Thursday: "Thurs",
    Friday: "Fri",
    Saturday: "Sat",
    Sunday: "Sun",
  };
  return (
    <div className="p-3 w-full md:w-[30%] bg-gray-50 rounded">
      <div className="sticky top-0">
        <h1 className="text-2xl font-bold text-blue-500">Wholesaler's data</h1>
        <h2 className="text-lg">{wholesaler.name}</h2>
        <h3 className="text-green-500 mt-2">
          <i className="fa-solid fa-check pr-1"></i> Verified Seller
        </h3>

        {isDetail && (
          <div className="imp-detail w-full my-4">
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="py-1 font-bold min-w-[100px]">Country:</td>
                  <td className="py-1 text-gray-500 text-right">
                    {wholesaler.country}
                  </td>
                </tr>
                <tr>
                  <td className="py-1 font-bold min-w-[100px]">City:</td>
                  <td className="py-1 text-gray-500 text-right">
                    {wholesaler.city}
                  </td>
                </tr>
                <tr>
                  <td className="py-1 font-bold min-w-[100px]">Postal code:</td>
                  <td className="py-1 text-gray-500 text-right">
                    {wholesaler.postalCode}
                  </td>
                </tr>
                <tr>
                  <td className="py-1 font-bold min-w-[100px]">Street</td>
                  <td className="py-1 text-gray-500 text-right">
                    {wholesaler.street}
                  </td>
                </tr>
              </tbody>
            </table>
            <hr className="my-4" />
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="py-1 font-bold min-w-[100px]">
                    Name and surname:
                  </td>
                  <td className="py-1 text-gray-500 text-right">
                    {wholesaler.contactName}
                  </td>
                </tr>
                <tr>
                  <td className="py-1 font-bold min-w-[100px]">Languages:</td>
                  <td className="py-1 text-gray-500 text-right">
                    {wholesaler.languages.join(", ")}
                  </td>
                </tr>
                <tr>
                  <td className="py-1 font-bold min-w-[100px]">
                    Phone number:
                  </td>
                  <td className="py-1 text-gray-500 text-right">
                    {wholesaler.phoneNumber}
                  </td>
                </tr>
                <tr>
                  <td className="py-1 font-bold min-w-[100px]">
                    Mobile phone No.:
                  </td>
                  <td className="py-1 text-gray-500 text-right">
                    {wholesaler.mobilePhoneNumber}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {!isDetail && (
          <div className="imp-detail w-full relative my-4">
            <button
              onClick={() => setIsDetail(!isDetail)}
              className="z-10 btn bg-yellow px-6 py-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            >
              <i className="fa-solid fa-eye pr-1 text-white"></i>
            </button>
            <div className="blur-sm">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="py-1 font-bold min-w-[100px]">Country:</td>
                    <td className="py-1 text-gray-500 text-right">********</td>
                  </tr>
                  <tr>
                    <td className="py-1 font-bold min-w-[100px]">City:</td>
                    <td className="py-1 text-gray-500 text-right">********</td>
                  </tr>
                  <tr>
                    <td className="py-1 font-bold min-w-[100px]">
                      Postal code:
                    </td>
                    <td className="py-1 text-gray-500 text-right">******</td>
                  </tr>
                  <tr>
                    <td className="py-1 font-bold min-w-[100px]">Street</td>
                    <td className="py-1 text-gray-500 text-right">
                      *****************************
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr className="my-4" />
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="py-1 font-bold min-w-[100px]">
                      Name and surname:
                    </td>
                    <td className="py-1 text-gray-500 text-right">
                      ******** ******
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1 font-bold min-w-[100px]">Languages:</td>
                    <td className="py-1 text-gray-500 text-right">********</td>
                  </tr>
                  <tr>
                    <td className="py-1 font-bold min-w-[100px]">
                      Phone number:
                    </td>
                    <td className="py-1 text-gray-500 text-right">
                      **** *** *** ****
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1 font-bold min-w-[100px]">
                      Mobile phone No.:
                    </td>
                    <td className="py-1 text-gray-500 text-right">
                      **** ********
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        <hr className="my-4" />
        <div className="open-hour overflow-hidden my-4">
          <div className="opening-hours">
            <div className="flex items-center">
              <span className="font-bold">Opening hours:</span>
              <span className="ml-2 text-gray-500">
                {hoveredHours === "Closed" ? "Closed" : hoveredHours}
              </span>
            </div>
            <div className="hours-dropdown mt-2 border flex items-center w-full">
              {Object.entries(hours).map(([day, time], index) => (
                <div
                  key={index}
                  className={`p-2 bg-gray-200 w-full cursor-pointer hover:bg-[#f29d00] text-center ${
                    dayMap[currentDay] === day ? "bg-yellow" : ""
                  }`}
                  onMouseEnter={() => setHoveredHours(time)}
                  onMouseLeave={() => setHoveredHours("Closed")}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="my-4" />
        <div className="flex flex-col gap-4 justify-center items-center">
          <button className="border border-black w-fit px-4 py-2 min-w-[200px] bg-white">
            View profile
          </button>
          <button className="border border-black w-fit px-4 py-2 min-w-[200px] bg-white">
            All offers
          </button>
        </div>
      </div>
    </div>
  );
};

export default WholesalerData;
