import React from "react";
import useFetchProducts from "../hooks/useFetchProducts";
import { getContactInfo } from "../utils/mutations/productMutation";

const WhatsAppButton = () => {

  const {
    data: contactus,
    isLoading: isContactUsLoading,
    isError: contactUsError
  } = useFetchProducts(['contactusHere'],getContactInfo);

  // console.log(contactus)

  return (
    <a
      href={`https://wa.me/491634868471`} // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
        cursor: "pointer",
        display: 'flex', // Make sure it is displayed
        visibility: 'visible' // Ensure visibility
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{ width: "40px", height: "40px" }}
      />
    </a>
  );
};

export default WhatsAppButton;
