import React from "react";
import TopHeading from "./components/TopHeading";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import Footer from "../../components/Footer/Footer";
import News from "../../components/News/News";
import { Link } from "react-router-dom";
import seller_1 from "../../assets/images/seller-1.svg";
import seller_2 from "../../assets/images/seller-2.svg";
import seller_3 from "../../assets/images/seller-3.svg";
import seller_4 from "../../assets/images/seller-4.svg";
import seller_5 from "../../assets/images/seller-5.svg";
import seller_6 from "../../assets/images/seller-6.svg";
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
const benefitSeller = [
  {
    imgSrc: seller_2,
    title: "The whole world at your fingertips",
    description:
      "On the international wholesale platform Merkandi we bring together manufacturers and wholesalers mainly from Europe, but also from Asia and the USA. Our community is a daily growing group of manufacturers, wholesalers, brokers, distributors and shopkeepers offering or wishing to buy new and second-hand, refurbished or damaged goods. Our main objective is to make it easier for traders to find reliable trade partners, to get in touch with them and, ultimately, to conduct fruitful cooperation.\n\n For members interested in purchasing, Merkandi offers access to an international database of wholesalers specialising in the sale of regular products and stock items - these are wholesale quantities of very low-priced products from surplus production, warehouses, consumer returns, discontinued products, stock items, e.g. from seasonal sales, as well as post-exposure and post-lease equipment, and goods from the liquidation of shops, wholesalers, warehouses and various industrial plants.",
  },
  {
    imgSrc: seller_3,
    title: "Complete and trustworthy seller profile",
    description:
      "Once the wholesaler has registered and paid the annual subscription fee and has passed a verification process carried out by our staff, he/she is granted the status of a seller. He/she then has access to the database of wholesalers who publish sales offers, as well as a seller account himself/herself, through which he/she can place an unlimited number of advertisements for his/her goods.\n\nAnyone wishing to publish their offer on Merkandi is subject to verification. The seller then has the opportunity to present their company on the platform in multiple languages, with full contact details: address, email, phone, link to the official website, and a description of the business. This increases trust and recognition among international customers.",
  },
  {
    imgSrc: seller_4,
    title: "Easy-to-use selling feature",
    description:
      "Each wholesaler's account contains information to make it easier for the buyer to contact and purchase the products offered by the seller. This information includes, among other things, the forms of delivery of goods, methods of payment for purchased goods, or languages in which it is possible to contact the wholesaler. An intuitive and functional seller's panel allows offers to be easily added, managed, and promoted. An offer quality indicator makes it possible to optimise the attractiveness of individual offers.\n\nBy means of a functional message and order box, those interested in purchasing the goods on display can make direct contact with the sellers and easily maintain ongoing business relations. Merkandi does not charge commission on sales, i.e., the wholesaler generates a profit without any margin or additional fees.",
  },
];
const opinionsData = [
  {
    imgSrc: seller_5,
    title: "Free newsletter for buyers from 150 countries",
    description:
      "Offers are the most important thing here. Both Merkandi users and people interested in wholesale trade who have confirmed their subscription to the free newsletter are informed every day about new products and the best offers on the platform. Thus, products posted on the platform are regularly presented to thousands of potential buyers, which increases the chance of quickly finding a buyer. Indicating selected categories and product groups when subscribing to the newsletter allows you to receive offers perfectly tailored to your needs.\n\nSubscribers to the multilingual newsletter also receive information about important changes to the site and promotions. Offers presented on the Merkandi platform are visible to all Internet users, but to see the contact details of the wholesaler issuing the offer, you must register on Merkandi.",
  },
  {
    imgSrc: seller_6,
    title: "Advanced statistics, company profile visits and offers",
    description:
      "Thanks to access to advanced statistics, a seller on Merkandi has insight into the effectiveness of his offers. He observes data such as the number of views of the offers and profile, and can also check the number of followers of the profile or offers. The traffic analysis allows the wholesaler to better adapt his sales strategy.\n\nThanks to the multilingual description of products, offers reach a wide range of customers from different countries and the seller gains even more visitors and has an even greater reach among potential customers. Moreover, every day, Merkandi's team of specialists takes care of sales and the popularity of the wholesaler's offers, e.g., by moderating the offers. As a user of the platform, the wholesaler can also count on the assistance of the multilingual Customer Service Department, open from Monday to Friday.",
  },
];
const newData = [
  {
    stars: 5,
    name: "Alex son",
    review:
      "We are very happy to use the platform. There are great verified traders and super offers both in Germany and abroad.",
  },
  {
    stars: 4,
    name: "Martha",
    review:
      "A useful platform for buying and selling, very reliable. A large number of interesting offers at good prices, which makes it possible to earn a lot of money.",
  },
  {
    stars: 5,
    name: "Diana",
    review:
      "It is a very good platform for finding wholesellers and also for selling. It's been a year since I started using it. It's been very beneficial to my business.",
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

const Seller = () => {
  return (
    <>
      <TopNavbar />
    <WhatsAppButton/>
      <TopHeading
        heading="For Sellers"
        para="Wholesale trading platform #1 for sellers. The best deals to connect with global buyers and showcase surplus stock, end of series, and much more."
      />

      {/* Main Section */}
      <section className="container max-w-[1280px] bg-white shadow-md -translate-y-4 mx-auto py-10 border">
        {/* What is Lot24 */}
        <div className="w-[90%] mx-auto flex flex-wrap md:flex-nowrap gap-6">
          <div className="w-full md:w-1/4">
            <img src={seller_1} alt="svg" className="w-full" />
          </div>
          <div className="w-full md:w-3/4 p-2">
            <h1 className="font-bold text-4xl mb-3  ">What is Lot24?</h1>
            <p className="text-xl  ">
              Lot24 is an international wholesale portal connecting sellers with
              global buyers. Showcase your products, surplus stock, and
              exclusive offers to a worldwide audience and drive wholesale
              success.
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
              Register and Start Selling Today!
            </h1>
            <h2 className="text-lg text-[#282828]  ">
              Join over 100,000 successful sellers and grow your business
              globally.
            </h2>
          </div>
          <Link to="/register">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md text-lg  ">
              Register
            </button>
          </Link>
        </div>
        <div className="p-4 my-10">
          <h1 className="text-4xl font-bold mb-6  ">Benefits for buyers</h1>
          {benefitSeller.map((benefit, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center gap-6 my-8 whitespace-pre-wrap`}
            >
              <img
                src={benefit.imgSrc}
                alt={benefit.title}
                className="w-full md:w-1/3"
              />
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-4  ">{benefit.title}</h1>
                <p className="text-gray-700  ">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="py-10">
          <h1 className="font-bold text-3xl md:text-4xl mb-4 text-center  ">
            What Sellers Say About Lot24
          </h1>
          <p className="text-lg text-center mb-8  ">
            Here's why sellers love using our platform:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {newData.map((review, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-6 rounded-lg flex flex-col justify-between min-h-[200px]\"
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

        <div className="p-4 my-10">
          <h1 className="text-4xl font-bold mb-6  ">Benefits for buyers</h1>
          {opinionsData.map((benefit, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center gap-6 my-8 whitespace-pre-wrap`}
            >
              <img
                src={benefit.imgSrc}
                alt={benefit.title}
                className="w-full md:w-1/3"
              />
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-4  ">{benefit.title}</h1>
                <p className="text-gray-700  ">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="my-10 p-8 bg-blue-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-2  ">
              Register and Start Selling Today!
            </h1>
            <h2 className="text-lg text-[#282828]  ">
              Join over 100,000 successful sellers and grow your business
              globally.
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

export default Seller;
