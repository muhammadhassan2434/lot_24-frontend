import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CurrencyContext } from "../hooks/CurrencyContext";

const CustomProductComponent = ({
  product,
  cardHeight = "400px",
  Card2xl = "500px",

}) => {
  const dynamicHeightClass = `min-h-[${cardHeight}]`;
  const { currency, conversionRate } = useContext(CurrencyContext);
  const productImage =
    product?.images?.length > 0
      ? `https://api.lot24.ma/${product.images[0].image}` // Prefix with the base URL
      : "https://via.placeholder.com/400x300";

      const convertedPrice = (product.sale_price * conversionRate).toFixed(2);
      const convertRegularPrice = (product.regular_price * conversionRate).toFixed(2);
  
  return (
    <div className="group transition-transform duration-300 transform hover:-translate-y-3 hover:scale-105">
      <h1>{product[1]?.images?.[0]?.image}</h1>
      <Link to={`/${product.id}/product_view`}>
        <img
          src={productImage}
          alt="product image"
          className="w-full min-h-[200px] max-h-[300px]"
        />
        <div className="p-2 flex gap-2 flex-col m-3">
          <p className="text-sm font-bold text-gray-500">
            <span className="text-red-600">
              {convertedPrice} {currency} 
            </span>{" "}
            {product.sale_price && (
              <span className="line-through">
                {convertRegularPrice} {currency}
              </span>
            )}
          </p>
          <h1 className="hover:text-blue-500">{product.title}</h1>
          {product.minimal_order && (
            <h6 className="bg-gray-300 hidden md:block py-1 px-2 text-[12px] w-fit rounded">
              Minimal Order: {product.minimal_order}
            </h6>
          )}
          {product.badges && (
            <h6 className="bg-green-500 hidden md:block text-white text-[12px] py-1 px-2 w-fit rounded">
              {product.badges}
            </h6>
          )}
          <h6 className="text-gray-400 text-xs">
            <i className="fa-solid fa-cart-shopping mr-2"></i>
            {product.product_stock > 0 ? "In Stock" : "Out of Stock"}
          </h6>
          <h6 className="text-gray-400 text-xs">
            <i className="fa-solid fa-box mr-2"></i>{" "}
            {product.stock_status || "Unknown"}
          </h6>
        </div>
      </Link>
    </div>
  );
};

export default CustomProductComponent;
