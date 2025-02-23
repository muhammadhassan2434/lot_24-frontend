import React, { useState } from "react";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import Footer from "../components/Footer/Footer";
import ChattingComponent from "../components/ChattingComponent";
import WhatsAppButton from "../components/WhatsAppButton";
export const BuyerPage = () => {
  return (
    <>
      <TopNavbar />
      <WhatsAppButton/>
      <div className="flex max-w-[1280px] m-auto">
        <ChattingComponent />
      </div>
      <Footer />
    </>
  );
};
