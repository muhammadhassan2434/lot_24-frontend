import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useFetchProducts from "../../hooks/useFetchProducts";
import { getSocialMedia } from "../../utils/mutations/productMutation";
import blackLogo from "../../assets/images/blackLogo.jpg"
import paymentMethod from "../../assets/images/payment_methods.png"

const Footer = () => {
   const { t, i18n } = useTranslation();
   const [headerColor, setHeaderColor] = useState("#299BCC");


   const {
    data: socailMedia,
    isLoading: loadingSocialMedia,
    isError: errorSocialMedia,
  } = useFetchProducts(["getSocialMedia"], getSocialMedia);


   useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await axios.get("https://api.lot24.ma/api/color/list");
        // console.log(response.data); // Log the response data
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
              src={blackLogo}
              alt="lot24"
              // className="w-24 h-24"
              width="120px"
            />
            <p className="text-sm mt-2">
            {t("tags.tags11")}
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
              <Link to="/privacy/policy">Privacy Policy</Link>
              </li>
              <li className="text-stone-400 hover:text-white hover:underline">
              {/* <Link to="#">Cookie files policy</Link> */}
              </li>
              <li className="text-stone-400 hover:text-white hover:underline">
              <Link to="/refund/policy">Refund policy</Link>
              </li>
              <li className="text-stone-400 hover:text-white hover:underline">
              <Link to="/aboutus">About us</Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div className="w-[45%] md:w-1/6">
            <h3 className="text-lg font-semibold mb-2">Help</h3>
            <ul className="text-sm space-y-1">
              <li className="text-stone-400 hover:text-white hover:underline">
                <Link to="/faq">FAQ</Link>
              </li>
              <li className="text-stone-400 hover:text-white hover:underline">
                {/* <Link to="/contact">Contact</Link> */}
              </li>
              {/* <li className="text-stone-400 hover:text-white hover:underline">
                <Link to="#">Sitemap</Link>
              </li> */}
              <li className="text-stone-400 hover:text-white hover:underline">
                <Link to="/login">For buyers</Link>
              </li>
              <li className="text-stone-400 hover:text-white hover:underline">
                <Link to="/seller/login">For sellers</Link>
              </li>
              <li className="text-stone-400 hover:text-white hover:underline">
                <Link to="/blogs">Blog</Link>
              </li>
              <li className="text-stone-400 hover:text-white hover:underline">
                <Link to="/contact">Contact us </Link>
              </li>
            </ul>
          </div>

          {/* Social MediLink Links */}
          <div className="w-[45%] md:w-1/6">
  <h3 className="text-lg font-semibold mb-2">Social Media</h3>
  {loadingSocialMedia && <p>Loading...</p>}
  {errorSocialMedia && <p>Error loading social media links.</p>}
  {socailMedia?.length > 0 ? (
    <ul className="text-sm space-y-1">
      {socailMedia.map((social) => (
        <li key={social.id} className="text-stone-400 hover:text-white hover:underline">
          <a href={social.link} target="_blank" rel="noopener noreferrer">
            {social.title}
          </a>
        </li>
      ))}
    </ul>
  ) : (
    !loadingSocialMedia && <p>No social media links available.</p>
  )}
</div>


        {/* Payment Methods */}
        <div className="container mx-auto flex flex-wrap justify-center gap-4 mt-8">
          <img src={paymentMethod} alt="" />
          {/* <img
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
          /> */}
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
      </div>
    </footer>
  );
};

export default Footer;
