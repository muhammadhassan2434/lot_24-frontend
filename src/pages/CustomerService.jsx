import React, { useState } from "react";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import Footer from "../components/Footer/Footer";
import News from "../components/News/News";
import CustomerServiceInput from "../components/CustomerServiceInput";
import { toast, ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import WhatsAppButton from "../components/WhatsAppButton";
import useFetchProducts from "../hooks/useFetchProducts";
import { getContactInfo } from "../utils/mutations/productMutation";

const CustomerService = () => {
  const {t} = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    massage: "",
    // status: "unread",
    consent: false,
  });

  const{
    data:contactInfo =[],
    isLoading:ContactLoading,
    isError: contactError
  }= useFetchProducts(["contactInfo"],getContactInfo);


  console.log(contactInfo);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.massage.trim()) {
      toast.error("The message field is required.");
      return;
    }
  
    try {
      const response = await fetch("https://api.lot24.ma/api/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const rawResponse = await response.text(); // Get raw text response
      console.log("Raw Response:", rawResponse);
  
      const result = JSON.parse(rawResponse); // Attempt to parse JSON
  
      if (response.ok && result.status) {
        toast.success("Contact information sent successfully!");
        setFormData({
          name: "",
          email: "",
          massage: "",
          consent: false,
        });
      } else {
        console.error("Validation Error:", result.error);
        toast.error(`Validation Error: ${JSON.stringify(result.error)}`);
      }
    } catch (error) {
      console.error("Error posting data:", error);
      toast.error("Failed to send the message. Please try again.");
    }
  };
  
  
  

  return (
    <>
      <TopNavbar />
      <WhatsAppButton/>
       <ToastContainer />
      <div className="bg-gray-50 p-8">
        <div className="max-w-7xl  max-w-[1280px] mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">{t("register.register18")}</h1>
            <p className="text-lg text-gray-600">
              We are at your service from Monday to Friday, hours 09:00-17:00
              Europe/Warsaw
            </p>
          </div>

          {/* Contact Section */}
          <div className="lg:flex lg:space-x-12">
            {/* Direct Communication */}
            {contactInfo.map((info, index) => (
  <div key={index} className="lg:w-1/2 mb-8 lg:mb-0">
    <h2 className="text-xl font-semibold mb-4">{t("register.register19")}</h2>
    
    <div className="flex items-center space-x-2 mb-4">
      <span className="text-xl">
        <i className="fa-solid fa-phone"></i>
      </span>
      <span className="text-lg">+{info.phone}</span>
    </div>

    <div className="flex items-center space-x-2 mb-4">
      <span className="text-xl">
        <i className="fa-solid fa-envelope"></i>
      </span>
      <span className="text-lg">{info.email}</span>
    </div>

    <div className="mt-12">
      <h2 className="text-lg font-semibold">{t("register.register20")}</h2>
      <div className="space-y-2 mt-4">
        <p className="text-sm">Lot 24 Ltd</p>
        <p className="text-sm">{info.company_info}</p>
        <p className="text-sm">Company number: {info.phone || "N/A"}</p>
      </div>
    </div>
  </div>
))}



            {/* Contact Form */}
            <div className="lg:w-1/2">
              <h2 className="text-xl font-semibold mb-4">Contact form</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <CustomerServiceInput
                    id="name"
                    name="name"
                    value={formData.name}
                    handleChange={handleChange}
                    placeholder="Type your name and surname"
                  />
                  <CustomerServiceInput
                    id="email"
                    name="email"
                    value={formData.email}
                    handleChange={handleChange}
                    placeholder="Type your email address"
                    type="email"
                  />
                  <CustomerServiceInput
                    id="message"
                    name="massage"
                    value={formData.massage}
                    handleChange={handleChange}
                    placeholder="Your message"
                    rows="4"
                    type="textarea"
                  />

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="h-4 w-4 border-gray-300 rounded"
                    />
                    <label htmlFor="consent" className="text-sm">
                    {t("register.register21")}
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-400 mt-6"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <News />
      <Footer />
    </>
  );
};

export default CustomerService;
