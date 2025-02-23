import React, { useState } from "react";
import { phone_codes } from "../utils/phone_code";
import Footer from "../components/Footer/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import RegisterTopNavBar from "./pageComponents/RegisterTopNavBar";
import RightSideBarForm from "../components/RightSideBarForm";
import FlashSales from "../components/FlashSales";
import InputField from "../components/InputField";
import axios from "axios";
import WhatsAppButton from "../components/WhatsAppButton";

const RegisterForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const subscriptionId = queryParams.get("subscriptionId");
  const [errors, setErrors] = useState(null);
  console.log(errors)

  const navigate = useNavigate();
  const [isPassword, setIspassword] = React.useState(false);
  const [isInvoice, setIsinvoice] = useState(false);
  const [isSeller, setisSeller] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    country_code: "",
    phone_number: "",
    country: "",
    company_name: "",
    tax_number: "",
    street_address: "",
    postal_code: "",
    city: "",
    coupon_code: "",
    invoice: false,
    role: "", // Add role field to store either "seller" or "buyer"
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle the role change (Seller/Buyer)
  const handleRoleChange = (e) => {
    setFormData({
      ...formData,
      role: e.target.value, // Store either 'seller' or 'buyer'
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data for submission
    const formPayload = {
      ...formData,
      subscription_id: subscriptionId, // Include subscriptionId if needed
    };

    // console.log(formData)

    try {
      const response = await axios.post(
        "https://api.lot24.ma/api/store-account",
        formPayload
      );


      console.log(response.data)

      const {
        subscription_name,
        subscription_price,
        coupon_price,
        discount_price,
      } = response.data;

      // Navigate to the Add to Cart page with data
      navigate("/add_to_cart", {
        state: {
          subscriptionName: subscription_name,
          subscriptionPrice: subscription_price,
          couponPrice: coupon_price,
          discountPrice: discount_price,
        },
      });
    } catch (err) {
      if (err.response) {
          // Server responded with a status other than 2xx
          setErrors(err.response || "Something went wrong");
      } else {
        setErrors("Network error, please try again");
      }
  }
  };

  return (
    <>
      <RegisterTopNavBar />
      <WhatsAppButton/>
      {/* <FlashSales /> */}

      {/* form */}
      <div className="p-3 md:p-[50px] bg-gray-100">
        <div className="container max-w-[1280px] mx-auto grid md:grid-cols-12 gap-3">
          <div className="p-4 md:col-span-8 bg-white order-2 md:order-1">
            <h1 className="text-3xl font-bold">Registration form</h1>
            <p className="text-sm text-gray-600">
              <span className="text-red-500">*</span> All fields marked with an
              asterisk (*) are required
            </p>
            <hr className="my-4" />
            <div className="form-can">
              <form onSubmit={handleSubmit}>
                {" "}
                {/* Add onSubmit handler */}
                {/* Basic info */}
                <input
                  type="hidden"
                  name="subscription_id"
                  value={subscriptionId}
                />
                <div className="Basic-info grid md:grid-cols-12 gap-3">
                  <div className="text-xl font-bold col-span-3">
                    Basic Information
                  </div>
                  <div className="col-span-9 flex flex-wrap">
                    <InputField
                      label="Name"
                      name="name"
                      id="name"
                      required
                      placeholder="Enter name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <InputField
                      label="Surname"
                      name="surname"
                      id="surname"
                      required
                      placeholder="Enter surname"
                      value={formData.surname}
                      onChange={handleChange}
                    />
                    <InputField
                      label="Email"
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="Enter email"
                      value={formData.email}
                      error={errors?.data?.error?.email?.[0] || ""}
                      onChange={handleChange}
                    />
                    
                    
                    <InputField
                      label="Password"
                      type="password"
                      name="password"
                      id="password"
                      required
                      placeholder="Enter password"
                      isPasswordToggle
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <InputField
                      label="Phone Code"
                      type="select"
                      name="country_code"
                      id="country_code"
                      options={phone_codes.map((code) => ({
                        value: code.code,
                        label: `${code.code} ${code.country}`,
                      }))}
                      value={formData.phone_code}
                      onChange={handleChange}
                    />
                    <InputField
                      label="Phone Number"
                      type="number"
                      name="phone_number"
                      id="phone_number"
                      placeholder="Enter phone number"
                      value={formData.phone_number}
                      onChange={handleChange}
                    />
                    <InputField
                      label="Country"
                      type="select"
                      name="country"
                      id="country"
                      options={phone_codes.map((code) => ({
                        value: code.country,
                        label: code.country,
                      }))}
                      value={formData.country}
                      onChange={handleChange}
                    />
                    {/* invoice record */}
                    <div className="w-full mt-5 align-middle">
                      <InputField
                        label="I want Invoice"
                        type="checkbox"
                        name="invoice"
                        id="invoice"
                        value={formData.invoice}
                        onChange={handleChange}
                      />
                    </div>
                    {formData.invoice && (
                      <>
                        <InputField
                          label="Company Name"
                          name="company_name"
                          id="company_name"
                          required
                          placeholder="Enter company name"
                          value={formData.company_name}
                          onChange={handleChange}
                        />
                        <InputField
                          label="Tax Number"
                          name="tax_number"
                          id="tax_number"
                          required
                          placeholder="Enter tax number"
                          value={formData.tax_number}
                          onChange={handleChange}
                        />
                        <InputField
                          label="Street Address"
                          name="street_address"
                          id="street_address"
                          required
                          placeholder="Enter street address"
                          value={formData.street_address}
                          onChange={handleChange}
                        />
                        <InputField
                          label="Postal Code"
                          name="postal_code"
                          id="postal_code"
                          required
                          placeholder="Enter postal code"
                          value={formData.postal_code}
                          onChange={handleChange}
                        />
                        <InputField
                          label="City"
                          name="city"
                          id="city"
                          required
                          placeholder="Enter city"
                          value={formData.city}
                          onChange={handleChange}
                        />
                      </>
                    )}
                  </div>
                </div>
                <hr className="my-4" />
                {/* Role info */}
                <div className="Basic-info grid md:grid-cols-12 gap-3">
                  <div className="text-lg font-bold col-span-3">
                    On Merkandi I want to{" "}
                    <span className="text-red-500">*</span>
                  </div>
                  <div className="col-span-9 flex flex-wrap">
                    <div>
                      <input
                        type="radio"
                        name="account"
                        value="seller"
                        checked={formData.role === "seller"}
                        onChange={handleRoleChange}
                      />
                      <label htmlFor="seller" className="ml-2">
                        Sell
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="account"
                        value="buyer"
                        checked={formData.role === "buyer"}
                        onChange={handleRoleChange}
                      />
                      <label htmlFor="buyer" className="ml-2">
                        Buy
                      </label>
                    </div>
                    <span className="text-sm text-gray-500">
                      Thanks to this information, we will personalize your
                      experience on our platform
                    </span>
                  </div>
                </div>
                <hr className="my-4" />
                {/* Terms and Conditions */}
                <div className="Basic-info grid md:grid-cols-12 gap-3">
                  <div className="text-lg font-bold col-span-3">
                    Terms and Conditions and consents
                  </div>
                  <div className="col-span-9 flex flex-wrap">
                    <InputField
                      label="I accept terms and Conditions and privacy Policy."
                      type="checkbox"
                      name="policy"
                      id="policy"
                      value="1"
                      required={true}
                      onChange={(e) => console.log(e.target.checked)} // Add your logic
                    />
                  </div>
                </div>
                <hr className="my-4" />
                {/* <label htmlFor="coupon_code">Apply Coupon Code</label> */}
                <InputField
                      label="Apply Coupon Code"
                      name="coupon_code"
                      id="coupon_code"
                      placeholder="Enter Cpupon Code"
                      value={formData.coupon_code}
                      error={errors?.data?.error?.coupon_code?.[0] || ""}
                      onChange={handleChange}
                    />
     
      {/* {errors?.data && (
    <p className="text-red-500 text-sm">{errors.data.message}</p>
  )} */}
                <hr className="my-4" />
                {errors && (
                  <div className="errors">
          {/* <h2>Errors:</h2>a */}
          {/* <p className="text-red-500 text-sm">{errors.message}</p> */}
          {errors && <p style={{ color: "red" }}>{errors.data.message}</p>}
        </div>
      )}
                <hr className="my-4" />
                {/* Button */}
                <div className="flex items-center justify-end p-4">
                  <button
                    type="submit"
                    className="btn bg-yellow px-6 py-2 font-bold text-white uppercase"
                  >
                    Register and pay
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Right side */}
          <RightSideBarForm />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RegisterForm;
