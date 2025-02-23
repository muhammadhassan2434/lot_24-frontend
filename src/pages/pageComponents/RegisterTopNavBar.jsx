import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import lot24Logo from "../../assets/images/logo.png";
import { useTranslation } from "react-i18next";
import { CurrencyContext } from "../../hooks/CurrencyContext";
import axios from "axios";
import { countries } from "../../utils/flags";

const RegisterTopNavBar = () => {
  const { t, i18n } = useTranslation();
  const [exchangeRates, setExchangeRates] = useState({}); // Store exchange rates

  const handleCountryChange = (country) => {
    // Extract language code from the country name
    const languageCode = country.name.split(".")[1];
    i18n.changeLanguage(languageCode);
  };
  const { currency, changeCurrency } = useContext(CurrencyContext); // Access currency context

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get("https://api.lot24.ma/api/currency-rates");
        setExchangeRates(response.data.rates);
      } catch (error) {
        console.error("Error fetching currency rates:", error);
      }
    };

    fetchRates();
  }, []);

  const handleCurrencyChange = (selectedCurrency) => {
    if (exchangeRates[selectedCurrency]) {
      changeCurrency(selectedCurrency, exchangeRates[selectedCurrency]);
    }
  };

  const [dropdowns, setDropdowns] = useState({
    buyer: false,
    seller: false,
    currency: false,
  });

  const toggleDropdown = (type) => {
    setDropdowns((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const closeAllDropdowns = () => {
    setDropdowns({
      buyer: false,
      seller: false,
      currency: false,
    });
  };

  const availableCurrencies = ["EUR", "USD", "GBP", "CNY", "TRY"];

  return (
    <>
      <div className="bg-green-500 text-white text-center py-2">
        <i className="fa-solid fa-lock mr-2"></i>
        {t("register.register5")}
      </div>
      {/* Nav */}
      <div className="flex flex-col max-w-[1280px] md:flex-row  md:items-center justify-between gap-4 text-gray-600 container mx-auto">
        <Link to={"/"}>
          <img
            src={lot24Logo}
            alt="logo"
            className=" max-w-[200px] w-[70px]"
          />
        </Link>
        <div className="flex md:items-center flex-col md:flex-row gap-4">
          <h1 className="flex items-center">
            <i className="fa-solid fa-phone mr-2"></i>
            <span className="text-xl">+44 330 127 9628</span>
          </h1>
          <h1 className="flex items-center">
            <i className="fa-solid fa-envelope mr-2"></i>
            <span className="text-xl">info@ezezezezez.com</span>
          </h1>
          {/* Currency Dropdown */}
          <div className="flex">
<div
            className="relative mx-5"
            onMouseEnter={() => toggleDropdown("country")}
            onMouseLeave={closeAllDropdowns}
          >
            {/* <button
              className="text-white py-2 px-4 focus:outline-none"
              
            >
              <i className="fas fa-flag mr-1"></i> {t("selectCountry")}
            </button> */}
            <button className="flex items-center px-4 py-2 border rounded-md bg-gray-100"
            onClick={() => toggleDropdown("country")}>
              <i className="fas fa-flag mr-2"></i>{t("selectCountry")}
            </button>
            {dropdowns.country && (
              <ul className="absolute left-0 bg-white z-20 overflow-hidden w-48 2xl:w-64 rounded-md shadow-lg">
                {countries.map((country, index) => (
                  <li key={index}>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-300"
                      onClick={() => handleCountryChange(country)}
                    >
                      {t(country.name)}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => toggleDropdown("currency")}
            onMouseLeave={closeAllDropdowns}
          >
            <button className="flex items-center px-4 py-2 border rounded-md bg-gray-100">
              <i className="fas fa-dollar-sign mr-2"></i> {currency}
            </button>
            {dropdowns.currency && (
              <ul className="absolute left-0 bg-white z-20 overflow-hidden w-48 2xl:w-64 rounded-md shadow-lg">
                {availableCurrencies.map((cur, index) => (
                  <li key={index}>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-300"
                      onClick={() => handleCurrencyChange(cur)}
                    >
                      {cur}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterTopNavBar;
