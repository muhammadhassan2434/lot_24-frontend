// NavBar Component
import React, { useEffect, useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import axios from "axios";
import { CurrencyContext } from "../../hooks/CurrencyContext";
import { countries } from "../../utils/flags";
import AuthContext from "../../store/AuthContext";

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const token = localStorage.getItem("auth_token");
  const [navbarColor, setNavbarColor] = useState("#2a2a2a");
  const [exchangeRates, setExchangeRates] = useState({});
  const { userData } = useContext(AuthContext);
  const { currency, changeCurrency } = useContext(CurrencyContext);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(
          "https://api.lot24.ma/api/currency-rates"
        );
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

  const handleCountryChange = (country) => {
    // Extract language code from the country name
    const languageCode = country.name.split(".")[1];
    i18n.changeLanguage(languageCode);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    window.location.reload();
  };

  const [dropdowns, setDropdowns] = useState({
    buyer: false,
    seller: false,
    currency: false,
    country: false,
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
      country: false,
    });
  };

  const availableCurrencies = ["EUR", "USD", "GBP", "CNY", "TRY"];

  return (
    <div className="lg:px-24" style={{ backgroundColor: navbarColor }}>
      <div className="container mx-auto lg:flex justify-between items-center max-w-[1280px]">
        <div className="flex items-center gap-6">
          <Link className="block px-4 py-2 text-white " to="/register">
            Buyer Registration
          </Link>
          <Link className="block px-4 py-2 text-white " to="/register">
            Seller Registration
          </Link>
          {userData?.role === "buyer" && (
            <div
              className="relative"
              onMouseEnter={() => toggleDropdown("buyer")}
              onMouseLeave={closeAllDropdowns}
            >
              <button
                className="text-white py-2 px-4 focus:outline-none"
                onClick={() => toggleDropdown("buyer")}
              >
                Buyer Dashboard
              </button>
              {dropdowns.buyer && (
                <ul className="absolute left-0 overflow-hidden w-48 bg-white rounded-md shadow-lg z-10">
                  <li>
                    <Link
                      className="block px-4 py-2 hover:bg-gray-300"
                      to="/buyer"
                    >
                      Buyer dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 hover:bg-gray-300"
                      to="/register"
                    >
                      {t("header.header5")}
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          )}

          {userData?.role === "seller" && (
            <div
              className="relative"
              onMouseEnter={() => toggleDropdown("seller")}
              onMouseLeave={closeAllDropdowns}
            >
              <button
                className="text-white py-2 px-4 focus:outline-none"
                onClick={() => toggleDropdown("seller")}
              >
                Seller Dashboard
              </button>
              {dropdowns.seller && (
                <ul className="absolute left-0 overflow-hidden w-48 bg-white rounded-md shadow-lg z-10">
                  <li>
                    <Link
                      className="block px-4 py-2 hover:bg-gray-300"
                      to="/seller"
                    >
                      Seller Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 hover:bg-gray-300"
                      to="/register"
                    >
                      {t("header.header5")}
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          )}
          {!token && (
            <Link
              to="/seller/login"
              className="text-white hover:text-white hidden md:block"
            >
              {t("register.register16")}
            </Link>
          )}
          <Link
            to="/contact"
            className="text-white hover:text-white hidden md:block"
          >
            {t("register.register17")}
          </Link>
        </div>
        <div className="flex">
          <div
            className="relative  mr-5"
            onMouseEnter={() => toggleDropdown("country")}
            onMouseLeave={closeAllDropdowns}
          >
            <button
              className="text-white py-2 px-4 focus:outline-none"
              onClick={() => toggleDropdown("country")}
            >
              <i className="fas fa-flag mr-1"></i> {t("selectCountry")}
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
            className="relative mx-5"
            onMouseEnter={() => toggleDropdown("currency")}
            onMouseLeave={closeAllDropdowns}
          >
            <button
              className="text-white py-2 px-4 focus:outline-none"
              onClick={() => toggleDropdown("currency")}
            >
              <i className="fas fa-dollar-sign mr-1"></i> {currency}
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
  );
};

export default NavBar;
