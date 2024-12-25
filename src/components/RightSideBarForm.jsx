import React from "react";

const RightSideBarForm = () => {
  return (
    <>
      <div className="p-6 border bg-gray-50 md:col-span-4 order-1 md:order-2">
        <h1 className="text-xl font-bold text-yellow  ">PREMIUM</h1>
        <h2 className="text-sm line-through text-gray-400  ">
          EUR 279.00 +VAT -20%
        </h2>
        <h1>
          <span className="text-2xl font-bold  ">EUR 223.20</span> +VAT / 1 year
        </h1>
        <p className="text-sm mt-2 text-gray-400">
          These are net prices, which are subject to VAT rate in line with EU
          directive.
        </p>
        <ul className="flex flex-col gap-4 mt-5">
          {[
            { description: "Access to the opinions about the wholesalers" },
            {
              description:
                "Posting offers - after positive company verification",
            },
            { description: "Access to the blacklist of wholesalers" },
            {
              description:
                "Listing your company in Merkandi international catalogue",
            },
            { description: "Unlimited number of inquiries to send" },
            {
              description:
                "Advanced statistics of your offers and your company's profile views",
            },
            { description: "Access to the wholesalers' contact details" },
            { description: "Import/Export offers to CSV, XLS, XML files" },
            { description: "Daily newsletter with the latest offers" },
            { description: "Promoting your offers all across Europe" },
            {
              description:
                "Offers from 150 countries, up to 90% off regular prices",
            },
            {
              description:
                "Automatic translation of your offers into 26 languages",
            },
            {
              description:
                "An account to manage your settings, contacts and offers",
            },
            { description: "Access to the course 'Trade Path to Success'" },
          ].map((desc, index) => {
            return (
              <li className="flex items-center gap-2 text-sm  ">
                <span className="text-green-500">✓</span>
                {desc.description}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default RightSideBarForm;
