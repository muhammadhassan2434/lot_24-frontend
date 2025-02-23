import React from "react";
import TopHeading from "./components/TopHeading";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import News from "../../components/News/News";
import buyer_1 from "../../assets/images/buyer-1.svg";
import buyer_2 from "../../assets/images/buyer-2.svg";
import buyer_3 from "../../assets/images/buyer-3.svg";
import buyer_4 from "../../assets/images/buyer-4.svg";
import buyer_5 from "../../assets/images/buyer-5.svg";
import buyer_6 from "../../assets/images/buyer-6.svg";
import WhatsAppButton from "../../components/WhatsAppButton";

const statsData = [
  { icon: "fa-people-group", count: "1000+", label: "Users" },
  { icon: "fa-comments", count: "1475+", label: "Opinions" },
  {
    icon: "fa-earth-asia",
    count: "150+",
    label: "Countries worldwide",
  },
];

const benefitsData = [
  {
    icon: "fa-infinity",
    title: "Unlimited number of inquiries",
    description:
      "You can send unlimited number of inquiries to the wholesalers, using a contact form, or directly by email.",
  },
  {
    icon: "fa-comments",
    title: "Access to the suppliers' blacklist",
    description:
      "PREMIUM users have access to a blacklist of suppliers who have deceived buyers and are excluded from Lot24.",
  },
  {
    icon: "fa-map-marker-alt",
    title: "Easy to find contact details",
    description:
      "We provide full contact details of sellers: addresses, phone numbers, and websites.",
  },
  {
    icon: "fa-globe",
    title: "Access to stocklot offers",
    description:
      "Exceptional deals on stock lots from Europe, Asia, and USA with prices reduced up to -90%.",
  },
  {
    icon: "fa-envelope",
    title: "Daily newsletter",
    description:
      "Receive the latest wholesale offers at the best prices every day.",
  },
  {
    icon: "fa-cogs",
    title: "Easy-to-use account",
    description:
      "Manage your settings and interactions with a professional user dashboard.",
  },
];
const benefitBuyer = [
  {
    imgSrc: buyer_2,
    title: "The whole world at your fingertips",
    description: `On the international wholesale platform Lot24 we bring together manufacturers and wholesalers mainly from Europe, but also from Asia and the USA. Our community is a daily growing group of manufacturers, wholesalers, brokers, distributors and shopkeepers offering or wishing to buy new and second-hand, refurbished or damaged goods. Our main objective is to make it easier for traders to find reliable trade partners, to get in touch with them and, ultimately, to conduct fruitful cooperation.\n\nFor members interested in purchasing, Lot24 offers access to an international database of wholesalers specialising in the sale of regular products and stock items - these are wholesale quantities of very low-priced products from surplus production, warehouses, consumer returns, discontinued products, stock items, e.g. from seasonal sales, as well as post-exposure and post-lease equipment, and goods from the liquidation of shops, wholesalers, warehouses and various industrial plants.`,
  },
  {
    imgSrc: buyer_3,
    title: "Verified trading companies",
    description:
      "After registration and payment of the annual subscription, the user is given access to a comprehensive database of contact details of wholesalers (addresses, telephone numbers, company websites) selling regular products as well as stock and outlet goods.\n\nEach wholesaler on Lot24 is subjected to verification, which consists of checking its credibility by our employees. Thanks to this, users of the Lot24 trading platform receive access to verified companies and thus the security of transactions is increased. Everyone who wants to publish their offer on Lot24 is subject to verification.",
  },
  {
    imgSrc: buyer_4,
    title: "Complete information in one place",
    description:
      "Thanks to the platform, users interested in buying low-cost products from a specific industry or commodity range do not have to spend time on hours of often fruitless searching for wholesalers on websites. Simply by logging into Lot24 and clicking on 'Wholesalers', they are presented with a list of verified companies dealing in wholesale, stock or regular goods both in Europe and worldwide.\n\nEach wholesaler's card contains information to make it easier for the buyer to contact and purchase the products offered by the seller. This information concerns, among other things, forms of delivery of goods, methods of payment for the purchased goods, or languages in which it is possible to contact the wholesaler. For PREMIUM account users, it is also possible to see opinions given to wholesalers by other buyers. This is a form of summarising transactions by buyers who recommend or discourage cooperation with a given wholesaler.",
  },
];
const opinionsData = [
  { stars: 4, name: "John Wick", review: "Amazing platform!" },
  { stars: 5, name: "Jennifer Caputi", review: "Highly reliable!" },
  { stars: 4, name: "John Doe", review: "Great experience!" },
];
const newData = [
  {
    imgSrc: buyer_5,
    title: "Advanced search engine",
    description: `The clear presentation of the website and the easy-to-use search engine enable a quick and intuitive search for both the relevant business partners and products. The list can include wholesalers from the country of your choice, e.g. wholesalers from Germany, wholesalers offering only products from a selected industry or sub-industry (e.g. clothing, children's items, liquidation goods) or a given product group, e.g. new products, refurbished goods.\n\nIn the search engine, it is also possible to sort wholesalers by the number of offers they have, or to sort offers by price or date they were added, in a convenient and quick way. It is also possible to display only those wholesalers who offer goods on request. The search field is an advanced tool that narrows down the search by keywords, for example: well-known brands or products.`,
  },
  {
    imgSrc: buyer_6,
    title: "Wide range of products",
    description:
      "On the Lot24 trading platform, users also have access to a clear presentation of offers organized into categories and subcategories. New stock offers are posted every day. In the description of the offer, wholesalers provide detailed data, e.g. information about the price, available quantity of goods, minimum order amount, payment methods and delivery conditions. Thanks to this, users can quickly obtain detailed information about the cheapest offers on the European market.\n\nMoreover, the Lot24 platform offers, among other things, forms to facilitate contact with the selected wholesaler, a personalised newsletter with information on the best offers, important changes to the site and promotions, and the assistance of a multilingual Customer Service Department, open from Monday to Friday.",
  },
];
const Stats = ({ data }) => (
  <div className="flex flex-wrap justify-evenly items-start gap-6 bg-[#FFEBC7] py-8 px-8">
    {data.map((stat, index) => (
      <div key={index} className="flex flex-col items-center text-center gap-3">
        <i className={`fa-solid ${stat.icon} text-5xl text-[#F29D00]`}></i>
        <h1 className="text-2xl font-bold text-[#F29D00]">{stat.count}</h1>
        <h4 className="text-[#926a20]">{stat.label}</h4>
      </div>
    ))}
  </div>
);
const Benefits = ({ data }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 my-8">
    {data.map((benefit, index) => (
      <div key={index} className="flex items-start gap-4">
        <i
          className={`fa-solid ${benefit.icon} text-4xl text-blue-500 bg-blue-200 p-4 rounded-full`}
        ></i>
        <div>
          <h2 className="font-bold">{benefit.title}</h2>
          <p className="text-gray-600">{benefit.description}</p>
        </div>
      </div>
    ))}
  </div>
);

const BenefitsBuyer = ({ data }) => {
  <div className="p-4 my-10">
    <h1 className="text-4xl font-bold mb-6  ">Benefits for buyers</h1>
    {data.map((benefit, index) => (
      <div
        key={index}
        className={`flex whitespace-pre-wrap flex-col md:flex-row ${
          index % 2 === 1 ? "md:flex-row-reverse" : ""
        } items-center gap-6 my-8`}
      >
        <img
          src={benefit.imgSrc}
          alt={benefit.title}
          className="w-full md:w-1/3"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4  ">{benefit.title}</h1>
          <p className="text-gray-700">{benefit.description}</p>
        </div>
      </div>
    ))}
  </div>;
};
const Buyer = () => {
  return (
    <>
      <TopNavbar />
      <WhatsAppButton/>
      <TopHeading
        heading="For buyers"
        para="Wholesale trading platform #1 for buyers. The best deals on goods from all over the world. Surplus stock, end of series, and much more. Cheaper by up to 90%"
      />

      {/* Main Section */}
      <section className="container  max-w-[1280px] bg-white shadow-md -translate-y-4 mx-auto py-10 border">
        {/* What is Lot24 */}
        <div className="w-[90%] mx-auto flex flex-wrap md:flex-nowrap gap-6">
          <div className="w-full md:w-1/4">
            <img src={buyer_1} alt="svg" className="w-full" />
          </div>
          <div className="w-full md:w-3/4 p-2">
            <h1 className="font-bold text-4xl mb-3  ">What is Lot24?</h1>
            <p className="text-xl  ">
              Lot24 is an international wholesale portal connecting wholesale
              buyers with sellers. On Lot24 you will find a variety of products
              in large quantities from suppliers all over the world. It is a
              platform for entrepreneurs looking to buy wholesale goods at the
              best prices.
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        <Stats data={statsData} />

        {/* Benefits Section */}
        <Benefits data={benefitsData} />

        {/* Call to Action */}
        <div className="my-10 p-8 bg-blue-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-2  ">
              Register today and buy cheaper!
            </h1>
            <h2 className="text-lg text-[#282828]  ">
              Join the ranks of more than 100,000 satisfied users
            </h2>
          </div>
          <Link to="/register">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md text-lg  ">
              Register
            </button>
          </Link>
        </div>

        {/* Benefits for Buyers */}
        {/* <BenefitsBuyer data={benefitBuyer}/> */}
        <div className="p-4 my-10">
          <h1 className="text-4xl font-bold mb-6  ">Benefits for buyers</h1>
          {benefitBuyer.map((benefit, index) => (
            <div
              key={index}
              className={`flex whitespace-pre-wrap flex-col md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center gap-6 my-8`}
            >
              <img
                src={benefit.imgSrc}
                alt={benefit.title}
                className="w-full md:w-1/3"
              />
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-4  ">{benefit.title}</h1>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Opinions Section */}
        <div className="py-10">
          <h1 className="font-bold text-3xl md:text-4xl mb-4 text-center  ">
            Opinions about Lot24
          </h1>
          <p className="text-lg text-center mb-8  ">
            Here’s how our users rate us
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {opinionsData.map((review, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-6 rounded-lg flex flex-col justify-between min-h-[200px] "
              >
                <div className="mb-4 flex space-x-1">
                  {Array.from({ length: review.stars }).map((_, starIndex) => (
                    <i
                      key={starIndex}
                      className="fas fa-star text-yellow-400 text-lg  "
                    ></i>
                  ))}
                </div>
                <p className="text-gray-700 text-sm  ">{review.review}</p>
                <hr className="my-4" />
                <h2 className="font-bold text-md  ">{review.name}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="my-10 p-8 bg-blue-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-2  ">
              Register today and buy cheaper!
            </h1>
            <h2 className="text-lg text-[#282828]  ">
              Join the ranks of more than 100,000 satisfied users
            </h2>
          </div>
          <Link to="/register">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md text-lg  ">
              Register
            </button>
          </Link>
        </div>

        {/* Benefits for Buyers */}
        <div className="p-4 my-10">
          <h1 className="text-4xl font-bold mb-6  ">Benefits for buyers</h1>
          {newData.map((benefit, index) => (
            <div
              key={index}
              className={`flex whitespace-pre-wrap flex-col md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center gap-6 my-8`}
            >
              <img
                src={benefit.imgSrc}
                alt={benefit.title}
                className="w-full md:w-1/3 "
              />
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-4  ">{benefit.title}</h1>
                <p className="text-gray-700  ">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* sum up */}
        <div className="my-4 md:px-[200px] text-center bg-gray-50 py-4  ">
          To sum up, the Lot24 wholesale trading platform supports building a
          network of business contacts. It makes it easier to find reliable
          wholesalers who offer stocks from the industry that the buyer is
          interested in, and also enables quick and easy contact with the
          wholesaler and the purchase of products at the best prices on the
          market.
        </div>

        {/* Call to Action */}
        <div className="my-10 p-8 bg-blue-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-2  ">
              Register today and buy cheaper!
            </h1>
            <h2 className="text-lg text-[#282828]  ">
              Join the ranks of more than 100,000 satisfied users
            </h2>
          </div>
          <Link to="/register">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md text-lg  ">
              Register
            </button>
          </Link>
        </div>
      </section>

      <News />
      <Footer />
    </>
  );
};

export default Buyer;
