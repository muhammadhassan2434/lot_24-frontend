import React from "react"; 
import Footer from "../components/Footer/Footer";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import News from "../components/News/News";
import { getTermsAndCondition } from "../utils/mutations/productMutation";
import useFetchProducts from "../hooks/useFetchProducts";
import WhatsAppButton from "../components/WhatsAppButton";

// Reusable Section Component
  const Section = ({ title, description }) => (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{description}</p> {/* Directly render description here */}
    </section>
  );

const Condition = () => {

  const {
    data: termsCondition,
    isLoading: termsConditionLoading,
    isError: termsConditionError,
  } = useFetchProducts(["gettermsCondition"], getTermsAndCondition);


  if (termsConditionLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (termsConditionError || !termsCondition) {
    return (
      <div className="text-center text-red-500">
        Error loading refund policy.
      </div>
    );
  }

  return (
    <>
      <TopNavbar />
      <WhatsAppButton/>
      <div className="bg-white rounded-lg p-8  w-full container mx-auto my-4 max-w-[1280px] 2xl:my-[50px]">
        <h1 className="text-3xl font-bold mb-8">
          Lot24 B2B Wholesale Trading Platform Terms and Conditions
        </h1>
        <hr className="my-4 2xl:my-8 border-t-2 border-[#f29d00]" />
        <p className="font-bold mb-4">Lot 24 b2b wholesale trading platform privacy policy.</p>

        {/* Section 1 */}
        {termsCondition.map((section, index) => (
          <Section
            key={index}
            title={section.title || "Untitled Section"}
            description={section.Description || "No description available"}
          />
        ))}
      </div>
      <News />
      <Footer />
    </>
  );
};

export default Condition;
