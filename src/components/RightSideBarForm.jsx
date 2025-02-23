import React from "react";
import { useTranslation } from "react-i18next";

const RightSideBarForm = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="p-6 border bg-gray-50 md:col-span-4 order-1 md:order-2">
        {/* <h1 className="text-xl font-bold text-yellow  ">PREMIUM</h1>
        <h2 className="text-sm line-through text-gray-400  ">
          EUR 279.00 +VAT -20%
        </h2>
        <h1>
          <span className="text-2xl font-bold  ">EUR 223.20</span> +VAT / 1 year
        </h1>
        <p className="text-sm mt-2 text-gray-400">
          These are net prices, which are subject to VAT rate in line with EU
          directive.
        </p> */}
        <ul className="flex flex-col gap-4 mt-5">
          {[
            { description:  t("register.register6"),},
            {
              description:
              t("register.register7")
            },
            { description: t("register.register8")},
            {
              description:
              t("register.register9"),
            },
            { description: t("register.register10") },
            {
              description:
              t("register.register11")
            },
            { description: t("register.register2") },
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
