import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Footer = () => {
   const [headerColor, setHeaderColor] = useState("#299BCC");
   useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await axios.get("https://api.lot24.ma/api/color/list");
        console.log(response.data); // Log the response data
        const navbarColorData = response.data.find((color) => color.title.toLowerCase() === "footer");
        if (navbarColorData) {
          setHeaderColor(navbarColorData.color); // Set the navbar color
        }
      } catch (error) {
        console.error("Error fetching colors:", error.response?.data || error.message);
      }
    };

    fetchColors();
  }, []);
  return (
    <footer className="bg-gray-900 text-white py-8 px-4" style={{backgroundColor: headerColor}}>
      <div className=" max-w-[1280px] ms-auto mr-auto">
        <div className="container mx-auto flex flex-wrap justify-between gap-8">
          {/* Company Description */}
          <div className="w-full md:w-1/4">
            <img
              src="https://lot24.ma/upload/images/logo/ezezezezez.png"
              alt="lot24"
            />
            <p className="text-sm mt-2">
              An international wholesale trading platform for overstocks,
              clearance stocks, company liquidation stocks, bankrupt stocks, and
              customer returns.
            </p>
          </div>

          {/* Information Links */}
          <div className="w-[45%] md:w-1/6">
            <h3 className="text-lg font-semibold mb-2">Information</h3>
            <ul className="text-sm space-y-1 ">
            <li className="text-stone-400 hover:text-white hover:underline">
                <Link to="/conditions">Terms and Conditions</Link>
              </li>
              <li className="text-stone-400 hover:text-white hover:underline">
              <Link to="#">Privacy Policy</Link>
              </li>
              <li className="text-stone-400 hover:text-white hover:underline">
              <Link to="#">Cookie files policy</Link>
              </li>
              <li className="text-stone-400 hover:text-white hover:underline">
              <Link to="#">Refund policy</Link>
              </li>
              <li className="text-stone-400 hover:text-white hover:underline">
              <Link to="#">About us</Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div className="w-[45%] md:w-1/6">
            <h3 className="text-lg font-semibold mb-2">Help</h3>
            <ul className="text-sm space-y-1">
              <li className="text-stone-400 hover:text-white hover:underline">
                <Link to="#">FAQ</Link>
              </li>
              <li className="text-stone-400 hover:text-white hover:underline">
                <Link to="#">Contact</Link>
              </li>
              <li className="text-stone-400 hover:text-white hover:underline">
                <Link to="#">Sitemap</Link>
              </li>
              <li className="text-stone-400 hover:text-white hover:underline">
                <Link to="/buyer">For buyers</Link>
              </li>
              <li className="text-stone-400 hover:text-white hover:underline">
                <Link to="/seller">For sellers</Link>
              </li>
              <li className="text-stone-400 hover:text-white hover:underline">
                <Link to="#">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Social MediLink Links */}
          <div className="w-[45%] md:w-1/6">
            <h3 className="text-lg font-semibold mb-2">Social Media</h3>
            <ul className="text-sm space-y-1">
              <li className="text-stone-400 hover:text-white hover:underline">
                <Link to="#">Instagram</Link>
              </li>
              <li className="text-stone-400 hover:text-white hover:underline">
                <Link to="#">Facebook</Link>
              </li>
              <li className="text-stone-400 hover:text-white hover:underline">
              <Link to="#">YouTube</Link>
              </li>
              <li className="text-stone-400 hover:text-white hover:underline">
                <Link to="#">Tiktok</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="container mx-auto flex flex-wrap justify-center gap-4 mt-8">
          <img
            src="https://via.placeholder.com/40x20?text=PayPal"
            alt="PayPal"
            className="w-12 h-auto "
          />
          <img
            src="https://via.placeholder.com/40x20?text=Bank"
            alt="Bank Transfer"
            className="w-12 h-auto "
          />
          <img
            src="https://via.placeholder.com/40x20?text=Giropay"
            alt="Giropay"
            className="w-12 h-auto "
          />
          <img
            src="https://via.placeholder.com/40x20?text=Sofort"
            alt="Sofort"
            className="w-12 h-auto "
          />
          <img
            src="https://via.placeholder.com/40x20?text=IDEAL"
            alt="IDEAL"
            className="w-12 h-auto "
          />
          <img
            src="https://via.placeholder.com/40x20?text=Mastercard"
            alt="Mastercard"
            className="w-12 h-auto "
          />
          <img
            src="https://via.placeholder.com/40x20?text=Visa"
            alt="Visa"
            className="w-12 h-auto "
          />
          <img
            src="https://via.placeholder.com/40x20?text=AmEx"
            alt="American Express"
            className="w-12 h-auto "
          />
        </div>

        {/* Footer Bottom */}
        <div className="container mx-auto text-center text-xs mt-8 border-t border-gray-700 pt-4">
          <p className="">
            Lot24 Ltd Unit 4E, Enterprise Court, S63 5DB Rotherham, United
            Kingdom, VAT Number: GB 254632212 , Company number: 09582404
          </p>
          <p className="mt-2">
            &copy; 2008 - 2024 Lot24. All rights reserved. All trademarks and
            brands used on this site belong to the owner of the website and are
            used for information purposes only. The use of this website
            constitutes acceptance of the terms of the contract, and the general
            terms and conditions.
          </p>
          <Link to="#" className="text-blue-500 hover:underline inline-block">
            Cookies settings
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
