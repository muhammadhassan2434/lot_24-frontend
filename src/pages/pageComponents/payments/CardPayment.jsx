import React, { useState } from "react";
import RegisterTopNavBar from "../RegisterTopNavBar";
import Footer from "../../../components/Footer/Footer";

const CardPayment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment Submitted");
  };

  return (
    <>
      <RegisterTopNavBar />
      <div className="bg-gray-100 flex items-center justify-center px-[10px] py-8 md:px-[100px] 2xl:py-[200px]">
        <div className="bg-white rounded-lg p-8  max-w-[1280px] shadow-lg mx-auto 2xl:max-w-">
          {/* Payment Info */}
          <div className="mb-6">
            <p className="text-lg font-semibold 2xl:text-4xl">
              Description: 5966/EN/PLN/11/2024
            </p>
            <p className="text-lg font-semibold 2xl:text-3xl 2xl:mt-5">
              Total: PLN 952.00
            </p>
          </div>

          {/* Payment Form */}
          <form onSubmit={handleSubmit} className="space-y-4 2xl:space-y-8">
            {/* Card Number */}
            <div>
              <label
                htmlFor="cardNumber"
                className="block text-sm 2xl:text-2xl font-semibold mb-2"
              >
                Card number
              </label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="1234 1234 1234 1234"
                className="w-full px-4 py-2 border border-gray-300 rounded-md  2xl:text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Expiration Date */}
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label
                  htmlFor="expiryDate"
                  className="block text-sm font-semibold mb-2 2xl:text-2xl"
                >
                  Expiration date
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  placeholder="MM / YY"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 2xl:text-2xl"
                />
              </div>

              {/* Security Code */}
              <div className="w-1/2">
                <label
                  htmlFor="securityCode"
                  className="block text-sm font-semibold mb-2 2xl:text-2xl"
                >
                  Security code
                </label>
                <input
                  type="text"
                  id="securityCode"
                  value={securityCode}
                  onChange={(e) => setSecurityCode(e.target.value)}
                  placeholder="CVC"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 2xl:text-2xl"
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="text-sm text-gray-600 mt-4 2xl:text-xl 2xl:my-10">
              By providing your card information, you allow Merkandi to charge
              your card for future payments in accordance with their terms.
            </div>

            {/* Pay Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-400 focus:outline-none 2xl:py-4 2xl:text-4xl"
              >
                Pay
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CardPayment;
