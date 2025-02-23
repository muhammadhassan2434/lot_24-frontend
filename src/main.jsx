import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";

import App from "./App.jsx";
import store from "./store/index.js";
import "./i18n.js";
import { CurrencyProvider } from "./hooks/CurrencyContext.jsx";

createRoot(document.getElementById("root")).render(
  <CurrencyProvider>
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
</CurrencyProvider>
);
