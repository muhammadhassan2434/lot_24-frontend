import React, { useContext, useState } from "react";
import Footer from "../components/Footer/Footer";
import RegisterTopNavBar from "./pageComponents/RegisterTopNavBar";
import card_1 from "../assets/images/cards-1.png";
import { useLocation } from "react-router-dom";
import News from "../components/News/News";
import CartTable from "../components/CartTable";
import PaymentMethodCard from "../components/PaymentMethodCard";
import { useTranslation } from "react-i18next";
import { CurrencyContext } from "../hooks/CurrencyContext";
import WhatsAppButton from "../components/WhatsAppButton";

const AddToCart = () => {
  const {t} = useTranslation();
  const { currency, conversionRate } = useContext(CurrencyContext);
  const location = useLocation();
  const [items, setItems] = useState([]);  // Initialize items as an empty array

  const { subscriptionName, subscriptionPrice, couponPrice, discountPrice } =
    location.state || {};
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

  // Convert prices using conversionRate
  const convertedSubscriptionPrice = (subscriptionPrice * conversionRate).toFixed(2);
  const convertedCouponPrice = couponPrice ? (couponPrice * conversionRate).toFixed(2) : 0;
  const totalGrossPrice = (subscriptionPrice - couponPrice) * conversionRate;

  // Example data for the cart items
  const cartItems = [
    {
      name: subscriptionName,
      price: convertedSubscriptionPrice,
      quantity: 1,
      vat: "np",
      grossPrice: convertedSubscriptionPrice,
    },
  ];

  if (couponPrice !== null) {
    cartItems.push({
      name: "Apply Coupon",
      price: convertedCouponPrice,
      quantity: 1,
      vat: "np",
      grossPrice: -convertedCouponPrice,
    });
  }

  return (
    <>
      <RegisterTopNavBar />
      <WhatsAppButton/>
      <div className="px-[10px] py-8 md:px-[100px] bg-gray-100">
        <div className="container mx-auto max-w-[1280px] bg-white rounded-lg p-8">
          <h2 className="text-center text-3xl mb-5 tracking-widest">{t("register.register14")}</h2>

          <div className="overflow-x-auto">
            {/* Use the CartTable component here */}
            <CartTable items={cartItems} />
          </div>

          <div className="rounded-lg p-8">
            <h2 className="text-center text-3xl mb-6 font-bold">
              {t("register.register15")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card Payment Section */}
              <PaymentMethodCard
                imageSrc={card_1}
                altText="Visa"
                buttonText="I PAY BY CARD"
                buttonLink={`/payments/cards/${subscriptionName}/${totalGrossPrice}`}
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
