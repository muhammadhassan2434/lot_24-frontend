import React, { useContext, useEffect, useState } from "react";
import sale_img from "../assets/images/desktop_small.jpg";
import store from "../assets/images/register-1.jpg";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import RegisterTopNavBar from "./pageComponents/RegisterTopNavBar";
import thumb_up from "../assets/images/ratings-and-thumb-green.svg";
import Faqs from "../components/Faqs";
import FlashSales from "../components/FlashSales";
import { useTranslation } from "react-i18next";
import { CurrencyContext } from "../hooks/CurrencyContext";
import WhatsAppButton from "../components/WhatsAppButton";
const Register = () => {
  const { t, i18n } = useTranslation();
   const { currency, conversionRate } = useContext(CurrencyContext);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const top_sale = {
    backgroundImage: `url(${sale_img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const header = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${store})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    // Fetch the subscription data
    const fetchSubscriptions = async () => {
      try {
        const response = await fetch("https://api.lot24.ma/api/show-subscription");
        const data = await response.json();
        // console.log(data);
        setSubscriptions(data.data); // Assuming the API response is an array of subscriptions
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
      }
    };

    fetchSubscriptions();
  }, []);
  const subscriptionActualPice = (subscriptions.Actual_Price * conversionRate).toFixed(2);
      const subscriptionDiscountPrice = (subscriptions.regular_price * conversionRate).toFixed(2);

  return (
    <>
      <RegisterTopNavBar top_sale={top_sale} />
      <WhatsAppButton/>

      {/* Flash Sale */}
      <FlashSales />

      {/* Table Section */}
      <div className="container mx-auto bg-white shadow-lg rounded-lg overflow-hidden  max-w-[1280px] my-5">
        <div className="grid grid-cols-3 bg-gray-50 py-6 px-4">
          <div className="col-span-1 text-center flex items-center justify-center flex-col">
            <img src={thumb_up} alt="likes" className="w-[50%]" />
            <div className="text-green-500 font-bold text-xl  ">
            { t("register.register6")}
            </div>
            <p className="text-gray-500 text-sm  ">
            { t("register.register7")}
            </p>
          </div>
          {subscriptions.length > 0 ? (
            subscriptions.map((subscription, index) => {
              const subscriptionActualPrice = (subscription.Actual_Price * conversionRate).toFixed(2);
              const subscriptionDiscountPrice = (subscription.Discount_Price * conversionRate).toFixed(2);
              
              return (
                <div
                  key={index}
                  className="text-center border-l border-r p-4 flex items-center justify-center flex-col"
                >
                  <h3 className="text-xl font-bold text-gray-800">
                    {subscription.plan_name}
                  </h3>
                  <p className="line-through text-gray-500">
                    {currency} {subscriptionActualPrice}
                  </p>
                  <p className="text-red-500 text-center md:text-start md:text-2xl font-semibold">
                    {currency} {subscriptionDiscountPrice}{" "}
                    <span className="text-sm">+ VAT / year</span>
                  </p>
                  <Link to={`/register/form?subscriptionId=${subscription.id}`}>
                    <button className="mt-4 bg-yellow-500 text-white py-2 px-6 rounded-lg">
                      REGISTER
                    </button>
                  </Link>
                </div>
              );
            })
          ) : (
            <p>Loading subscriptions...</p>
          )}
        </div>

        {/* Table Details */}
        <div className="grid grid-cols-3 text-center  ">
          <div className="py-4 px-6 bg-gray-100 text-gray-600 font-semibold text-left">
          { t("register.register8")}
          </div>
          <div className="py-4 px-6">✓</div>
          <div className="py-4 px-6">✓</div>

          <div className="py-4 px-6 bg-gray-100 text-gray-600 font-semibold text-left">
          { t("register.register9")}
          </div>
          <div className="py-4 px-6">✓</div>
          <div className="py-4 px-6">✓</div>

          <div className="py-4 px-6 bg-gray-100 text-gray-600 font-semibold text-left">
          { t("register.register10")}
          </div>
          <div className="py-4 px-6">✓</div>
          <div className="py-4 px-6">✓</div>

          <div className="py-4 px-6 bg-gray-100 text-gray-600 font-semibold text-left">
          { t("register.register11")}
          </div>
          <div className="py-4 px-6">✓</div>
          <div className="py-4 px-6">✓</div>

          <div className="py-4 px-6 bg-gray-100 text-gray-600 font-semibold text-left">
          { t("register.register12")}
          </div>
          <div className="py-4 px-6">✗</div>
          <div className="py-4 px-6">✓</div>
        </div>
        <div className="grid grid-cols-3 bg-gray-50 py-6 px-4">
          <div className="col-span-1 text-center flex items-center justify-center flex-col "></div>
        </div>
      </div>

      {/* FAQs */}
      <Faqs activeFaq={activeFaq} toggleFaq={toggleFaq} />

      <Footer />
    </>
  );
};

export default Register;
