import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Buyer from "./pages/buy&seller/Buyer";
import Seller from "./pages/buy&seller/Seller";
import ProductView from "./pages/ProductView";
import Login from "./pages/Login";
import RegisterForm from "./pages/RegisterForm";
import AddToCart from "./pages/AddToCart";
import CardPayment from "./pages/pageComponents/payments/CardPayment";
import Condition from "./pages/Condition";
import CustomerService from "./pages/CustomerService";
import Layout from "./admin/layout/Layout";
import Dashboard from "./admin/dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BuyerPage } from "./pages/BuyerPage";
import SellerLogin from "./pages/SellerLogin";
import ChattingComponent from "./components/ChattingComponent";
import ChatScreen from "./components/ChatScreen";
import { SellerChat } from "./components/SellerChat";
import SellerChatScreen from "./components/SellerChatScreen";
import ShowProducts from "./pages/ShowProducts";
import { AuthContextProvider } from "./store/AuthContext";

const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            <Route path="/buyerinfo" element={<Buyer />} />
            <Route path="/sellerinfo" element={<Seller />} />
            <Route path="/:id/product_view" element={<ProductView />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register/form" element={<RegisterForm />} />
            <Route path="/add_to_cart" element={<AddToCart />} />
            <Route path="/payments/cards" element={<CardPayment />} />
            <Route path="/conditions" element={<Condition />} />
            <Route path="/contact" element={<CustomerService />} />
            <Route path="/buyer" element={<BuyerPage />} />
            <Route path="/:id/buyerChat" element={<ChattingComponent />} />
            <Route path="/chat/:id" element={<ChatScreen />} />
            <Route path="/seller/login" element={<SellerLogin />} />
            <Route path="/seller" element={<Layout />}>
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/seller/products" element={<ShowProducts />} />

            <Route path="/seller/chat" element={<SellerChat />} />
            <Route path="/seller/chat/:id" element={<SellerChatScreen />} />

          </Routes>
        </Router>
      </AuthContextProvider>
    </QueryClientProvider>
  );
};

export default App;
