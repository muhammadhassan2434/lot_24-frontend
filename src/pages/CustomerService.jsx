import React, { useState } from "react";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import Footer from "../components/Footer/Footer";
import News from "../components/News/News";
import CustomerServiceInput from "../components/CustomerServiceInput";

const CustomerService = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Message sent!");
  };

  return (
    <>
      <TopNavbar />
      <div className="bg-gray-50 p-8">
        <div className="max-w-7xl  max-w-[1280px] mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Customer Service</h1>
            <p className="text-lg text-gray-600">
              We are at your service from Monday to Friday, hours 09:00-17:00
              Europe/Warsaw
            </p>
          </div>

          {/* Contact Section */}
          <div className="lg:flex lg:space-x-12">
            {/* Direct Communication */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-xl font-semibold mb-4">
                Direct communication
              </h2>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl">
                  <i className="fa-solid fa-phone"></i>
                </span>
                <span className="text-lg">+44 330 127 9628</span>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl">
                  {/* awesome font icon i of mail*/}
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <span className="text-lg">info@merkandi.com</span>
              </div>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-400 mb-4">
                Start live-chat
              </button>
              <div className="text-sm">
                <p>
                  Do you want to speak a different language?{" "}
                  <a href="#" className="text-blue-500">
                    Check it here!
                  </a>
                </p>
              </div>
              {/* Company Info */}
              <div className="mt-12">
                <h2 className="text-lg font-semibold">Company information</h2>
                <div className="space-y-2 mt-4">
                  <p className="text-sm">Merkandi Ltd</p>
                  <p className="text-sm">
                    Unit 4E, Enterprise Court, S63 5DB Rotherham, United Kingdom
                  </p>
                  <p className="text-sm">VAT Number: GB 254632212</p>
                  <p className="text-sm">Company number: 09582404</p>
                </div>
              </div>
            </div>

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
                    name="message"
                    value={formData.message}
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
                      I hereby consent to the processing of my personal data in
                      accordance with the Act on the protection of personal data
                      in connection with the execution of the application.
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
