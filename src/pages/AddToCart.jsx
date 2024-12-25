import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import RegisterTopNavBar from "./pageComponents/RegisterTopNavBar";
import card_1 from "../assets/images/cards-1.png";
import card_2 from "../assets/images/cards-2.png";
import card_3 from "../assets/images/cards-3.png";
import card_4 from "../assets/images/cards-4.png";
import { Link } from "react-router-dom";
import News from "../components/News/News";
import CartTable from "../components/CartTable";
import PaymentMethodCard from "../components/PaymentMethodCard";

const AddToCart = () => {
  const [isDiscount, setIsDiscount] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setDiscountCode(e.target.value);
    if (e.target.value !== "") {
      setError(false);
    }
  };

  const handleSubmit = () => {
    if (discountCode === "") {
      setError(true);
    } else {
      setError(false);
      // Handle discount code submission
      alert(`Discount Code: ${discountCode}`);
    }
  };
  // Example data for the cart items
  const cartItems = [
    {
      name: "PREMIUM account on Merkandi",
      price: "PLN 1,190.00",
      quantity: 1,
      vat: "np",
      grossPrice: 1190.0,
    },
    {
      name: "Discount (FLASHSALE) 20%",
      price: "PLN -238.00",
      quantity: 12,
      vat: "np",
      grossPrice: -238.0,
    },
  ];

  return (
    <>
      <RegisterTopNavBar />
      <div className="px-[10px] py-8 md:px-[100px] bg-gray-100">
        <div className="container mx-auto max-w-[1280px] bg-white rounded-lg p-8">
          <h2 className="text-center text-3xl mb-5 tracking-widest">PAYMENT</h2>

          <div className="overflow-x-auto">
            {/* Use the CartTable component here */}
            <CartTable items={cartItems} />
          </div>

          <div className="mt-5 text-right">
            <button
              className="text-blue-500"
              onClick={() => setIsDiscount(!isDiscount)}
            >
              I&apos;ve got a discount code
            </button>
            {isDiscount && (
              <div className="flex items-center justify-end mt-5">
                <input
                  type="text"
                  placeholder="Enter the discount code"
                  value={discountCode}
                  onChange={handleChange}
                  className={`px-4 py-2 border ${
                    error ? "border-red-500" : "border-gray-300"
                  } rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64`}
                />
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 text-white border bg-blue-500 rounded-r-md hover:bg-blue-400 focus:outline-none"
                >
                  Add Discount Code
                </button>
              </div>
            )}
          </div>

          <div className="rounded-lg p-8">
            <h2 className="text-center text-3xl mb-6 font-bold">
              Choose the payment method
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card Payment Section */}
              <PaymentMethodCard
                imageSrc={card_1}
                altText="Visa"
                buttonText="I PAY BY CARD"
                buttonLink="/payments/cards"
              />

              {/* Payment Option 1 Section */}
              <PaymentMethodCard
                imageSrc={card_2}
                altText="EPS"
                buttonText="PAY"
              />

              {/* PayPal Section */}
              <PaymentMethodCard
                imageSrc={card_3}
                altText="PayPal"
                buttonText="PAY"
              />

              {/* Payment Option 2 Section */}
              <PaymentMethodCard
                imageSrc={card_4}
                altText="Bank Transfer"
                buttonText="PAY"
                buttonAction={() =>
                  alert("Account number displayed after this action.")
                }
              />
            </div>
          </div>
        </div>
      </div>
      {/* Add to cart start */}
      <News />
      <Footer />
    </>
  );
};

export default AddToCart;
