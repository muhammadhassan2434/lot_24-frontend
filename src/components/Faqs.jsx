import { useTranslation } from "react-i18next";
import WhatsAppButton from "./WhatsAppButton";

const Faqs = ({ activeFaq, toggleFaq }) => {
  const { t, i18n } = useTranslation();
  return (
    <>
    <WhatsAppButton/>
     <div className="my-5 m-auto  max-w-[1280px]">
        <h1 className="text-center font-bold text-4xl">
        { t("register.register13")}
        </h1>
        <div className="container mx-auto my-5 space-y-4">
          {[
            {
              question: t("faq.faq1"),
              answer:t("faq.faq2"),
            },
            {
              question: "How do I purchase products as a buyer?",
              answer:
                "As a buyer, you can browse products and add items to your cart. Once ready, proceed to checkout and follow the payment instructions.",
            },
            {
              question: "What are the fees for sellers?",
              answer:
                "The platform charges a small fee on each successful sale. There are no monthly subscription fees, and you only pay when you make a sale.",
            },
            {
              question: "Can buyers return products if they are unsatisfied?",
              answer:
                "Yes, buyers can initiate returns if the product does not meet their expectations. Review our return policy for details.",
            },
            {
              question: "How do sellers get paid?",
              answer:
                "Sellers receive payments through their preferred payment method after each successful transaction.",
            },
          ].map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full text-left px-4 py-2    focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
              </button>
              {activeFaq === index && (
                <div className="px-4 py-2 bg-gray-100   ">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Faqs