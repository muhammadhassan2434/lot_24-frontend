import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";

const WholesalerData = ({ product, isDetailInitial }) => {
  const [isDetail, setIsDetail] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      setIsDetail(isDetailInitial); // Initialize with the passed value only if token exists
    }
  }, [isDetailInitial]);

  const handleViewDetails = () => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      setIsDetail(true);
    } else {
      setShowModal(true); // Show the modal if the user is not logged in
    }
  };

  if (!product || !product.seller) {
    return (
      <div className="p-3 w-full md:w-[30%] bg-gray-50 rounded">
        <h1 className="text-2xl font-bold text-blue-500">Wholesaler's data</h1>
        <p>No product or seller data available.</p>
      </div>
    );
  }

  return (
    <div className="p-3 w-full md:w-[30%] bg-gray-50 rounded">
      <div className="sticky top-0">
        <h1 className="text-2xl font-bold text-blue-500">Wholesaler's data</h1>
        <h2 className="text-lg">{product.seller.name || "N/A"}</h2>
        <h3 className="text-green-500 mt-2">
          <i className="fa-solid fa-check pr-1"></i> Verified Seller
        </h3>

        {isDetail ? (
          <div className="imp-detail w-full my-4">
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="py-1 font-bold min-w-[100px]">Country:</td>
                  <td className="py-1 text-gray-500 text-right">
                    {product.country?.name || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td className="py-1 font-bold min-w-[100px]">Country Code:</td>
                  <td className="py-1 text-gray-500 text-right">
                    {product.seller.country_code || "N/A"}
                  </td>
                </tr>
              </tbody>
            </table>
            <hr className="my-4" />
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="py-1 font-bold min-w-[100px]">Name:</td>
                  <td className="py-1 text-gray-500 text-right">
                    {product.seller.name || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td className="py-1 font-bold min-w-[100px]">Surname:</td>
                  <td className="py-1 text-gray-500 text-right">
                    {product.seller.surname || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td className="py-1 font-bold min-w-[100px]">Phone Number:</td>
                  <td className="py-1 text-gray-500 text-right">
                    {product.seller.phone_number || "N/A"}
                  </td>
                </tr>
                <tr>
                  <td className="py-1 font-bold min-w-[100px]">Email:</td>
                  <td className="py-1 text-gray-500 text-right">
                    {product.seller.email || "N/A"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="imp-detail w-full relative my-4">
            <button
              onClick={handleViewDetails}
              className="z-10 btn bg-yellow px-6 py-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            >
              <i className="fa-solid fa-eye pr-1 text-white"></i> View Details
            </button>
            <div className="blur-sm">
              {/* Placeholder blurred content */}
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded shadow-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4">Login Required</h2>
            <p className="text-gray-600 mb-6">
              You need to log in to view the details of the wholesaler.
            </p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded"
              onClick={() => {
                setShowModal(false);
                // Add navigation to login page or login logic here
                navigate('/login')
              }}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WholesalerData;
