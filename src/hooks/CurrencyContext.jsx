// CurrencyContext.js
import React, { createContext, useState } from "react";

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [conversionRate, setConversionRate] = useState(1);

  const changeCurrency = (newCurrency, rate) => {
    setCurrency(newCurrency);
    setConversionRate(rate);
  };

  return (
    <CurrencyContext.Provider
      value={{ currency, conversionRate, changeCurrency }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
