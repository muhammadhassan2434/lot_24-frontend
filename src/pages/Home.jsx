import React, { useEffect, useState } from "react";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import { countries } from "../utils/flags";
import { Link } from "react-router-dom";
// swipper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import CustomProductComponent from "../components/CustomProductComponent";
// product data
import { products } from "../utils/products";
import Footer from "../components/Footer/Footer";
import News from "../components/News/News";
import Product_component from "./pageComponents/Product_component";
import {
  getAllProducts,
  weeklyBestProduct,
  mostPopularProduct,
  recentAddProduct,
  popularSearches,
  topBar,
  getBlogs,
} from "../utils/mutations/productMutation";
import { useMutation, useQuery } from "@tanstack/react-query";
import PopularSearches from "../components/PopularSearches";
import RecentlyAdded from "../components/RecentlyAdded";
import ActionCard from "../components/ActionCard";
import useFetchProducts from "../hooks/useFetchProducts";
import axios from "axios";
const Home = () => {
 
   const [sidebarColor, setSidebarColor] = useState("#299BCC");
  // console.log(products)
  const {
    data: weeklyProducts = [],
    isLoading: weeklyLoading,
    isError: weeklyError,
  } = useFetchProducts(["weeklyProducts"], weeklyBestProduct);
  
  const {
    data: mostPopular = [],
    isLoading: mostPopularLoading,
    isError: mostPopularError,
  } = useFetchProducts(["mostPopular"], mostPopularProduct);
  
  const {
    data: mostRecent = [],
    isLoading: mostRecentLoading,
    isError: mostRecentError,
  } = useFetchProducts(["mostRecent"], recentAddProduct);
  
  const {
    data: allProducts = [],
    isLoading: allProductsLoading,
    isError: allProductsError,
  } = useFetchProducts(["allProducts"], getAllProducts); // Removed extra closing brace here
  
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  
  // const searches = [
  //   "Wholesale TV Mounts",
  //   "Buy iPhone Xs Max In Bulk",
  //   "Returned pallets for sale",
  //   "Samsung Galaxy Note 10 In Bulk",
  //   "Wholesale pajamas",
  //   "Wholesale Work Boots Distributors",
  // ];

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await axios.get("https://api.lot24.ma/api/color/list");
        // console.log(response.data); // Log the response data
        const navbarColorData = response.data.find((color) => color.title.toLowerCase() === "sidebar");
        if (navbarColorData) {
          setSidebarColor(navbarColorData.color); // Set the navbar color
        }
      } catch (error) {
        console.error("Error fetching colors:", error.response?.data || error.message);
      }
    };

    fetchColors();
  }, []);

  const {
    data: searches = [],
    isLoading: searchesLoading,
    isError: searchesError,
  } = useFetchProducts(["getPopularSeacrhes"], popularSearches);

  // get top bar 
  const {
    data: topbar = [],
    isLoading: topbarLoading,
    isError: topbarError,
  } = useFetchProducts(["topBar"], topBar);

  // get blogs
  const {
    data: blogs = [],
    isLoading: blogsLoading,
    isError: blogsError,
  } = useFetchProducts(["blogs"], getBlogs);
  // const topbarColor = {{topbar.color}}
  // console.log(topbar)
  // console.log(searches)
  
  const recentlyProducts = [
    {
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde omnis ad doloribus, id quam rem illo quod eum quidem? Vel.",
      userName: "John Wick",
    },
    {
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque maiores obcaecati enim, dignissimos deserunt vel?",
      userName: "Jennifer Caputi",
    },
    {
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque maiores obcaecati enim, dignissimos deserunt vel?",
      userName: "John Doe",
    },
  ];
  
  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

 
  
  // console.log(weeklyProducts);
  
  return (
    <>
      <div>
        {/* top nav  */}
        <TopNavbar />

        {/* section 1 */}
        <div className="px-4 max-w-[1280px] md:px-0 overflow-hidden container mx-auto ">
          <div className="my-4  flex flex-col-reverse justify-center gap-4 lg:flex-row">
            {/* Popular Searches Section */}

            <PopularSearches title="Popular searches" searches={searches} />

            {/* #1 Platform Section */}
            <div className="lg:w-1/2">
              <div className="h-full p-4 rounded-lg" style={{ backgroundColor: topbar[0]?.color || "#000" }}>
                <div className="flex items-center justify-center h-full gap-4">
                  <h1 className="text-white text-[50px] font-bold">{topbar[0]?.title}</h1>
                  <div>
                    <div className="text-white text-[30px]">
                      {topbar[0]?.slug}
                    </div>
                    <div className="text-gray-300">
                     {topbar[0]?.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="card rounded-lg p-4 md:p-0">
              <h1 className="text-red-600 text-3xl font-bold flex justify-between md:flex-row flex-col items-center ">
                Week's best offers
                <Link href="#" className="text-blue-500 text-lg">
                  View More <i className="fa-solid fa-angles-right m-0 p-0"></i>
                </Link>
              </h1>
              <div className="my-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={20}
                  freeMode={true}
                  // pagination={{
                  //   clickable: true,
                  // }}
                  breakpoints={{
                    // when window width is >= 320px
                    320: {
                      slidesPerView: 1,
                    },
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    768: {
                      slidesPerView: 3,
                    },
                    // when window width is >= 1024px
                    1024: {
                      slidesPerView: 4,
                    },
                  }}
                  navigation={true}
                  modules={[FreeMode, Pagination, Navigation]}
                  style={{
                    padding: "0 20px",
                  }}
                  className="mySwiper"
                >
                  {weeklyProducts.map((product, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <CustomProductComponent
                          product={product}
                          cardHeight={"400px"}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        {/* section 2 */}
        <div className="p-4 md:p-0 container mx-auto">
          <div className="ml-auto mr-auto max-w-[1280px]">
            <div className="flex items-center justify-between my-4">
              <h1 className="text-[25px] font-bold">Most popular offers</h1>
              <Link href="#" className="text-blue-500 text-lg">
                View More <i className="fa-solid fa-angles-right m-0 p-0"></i>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 ">
              {mostPopular.map((product, index) => {
                return (
                  <div
                    className="shadow-md shadow-gray-300 border-none outline-none hover:outline-4 hover:outline-[#ddd] hover: overflow-hidden"
                    key={index}
                  >
                    <CustomProductComponent
                      product={product}
                      cardHeight={"500px"}
                      Card2xl="600px"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="p-4 md:p-0 container mx-auto ">
          <div className=" max-w-[1280px] ml-auto mr-auto">
            <div className="flex items-center justify-between my-4">
              <h1 className="text-[25px] font-bold">Recently Added</h1>
              <Link href="#" className="text-blue-500 text-lg">
                View More <i className="fa-solid fa-angles-right m-0 p-0"></i>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {mostRecent.map((product, index) => {
                return (
                  <div
                    className="shadow-md shadow-gray-300 rounded-lg overflow-hidden"
                    key={index}
                  >
                    <CustomProductComponent
                      product={product}
                      cardHeight="500px"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* bankrupt section */}
        <div className="container mx-auto mt-[50px] px-4 md:px-0 py-4">
          <div className="mx-auto  max-w-[1280px] flex flex-col lg:flex-row gap-4">
            {/* Sidebar */}
            <div className="lg:w-1/4  p-4 relative " style={{ backgroundColor: sidebarColor }}>
              <div className="flex flex-col gap-2 2xl:gap-8 sticky top-10">
                <h1 className="text-2xl font-bold text-white">
                  Bankrupt stocks
                </h1>
                <p className="text-gray-300 ">
                  Get the best deals on our bankrupt stocks
                </p>
                <button className="bg-yellow-500 text-white py-2 px-6 w-fit 2xl:px-8 2xl:py-4">
                  View
                </button>
              </div>
            </div>

            {/* Product List */}
            <div className="lg:w-3/4 px-3">
              <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
                {allProducts.map((product, index) => {
                  return (
                    <div
                      className="shadow-md shadow-gray-300 rounded-lg overflow-hidden"
                      key={index}
                    >
                      <CustomProductComponent product={product} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Customer review */}
        <RecentlyAdded
          title="Recently Added"
          link="#"
          blogs={blogs}
        />

        {/* maps sections */}
        <section className="bg-[#299bcc] text-white py-8 px-4 md:px-0">
          <div className=" max-w-[1280px] ms-auto mr-auto">
            <div className="container mx-auto">
              <h2 className="text-2xl font-bold text-center mb-4 2xl:mb-[50px]">
                Lot24 in the World
              </h2>
              <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-start">
                {/* Country Links Grid / Dropdown */}
                <div className="lg:w-2/4">
                  {/* Desktop View: Grid Layout */}
                  <div className="hidden lg:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  text-center">
                    {countries.map((country, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center gap-2 2xl:gap-4"
                      >
                        <img
                          src={country.flag}
                          alt={`${country.name} flag`}
                          className="w-6 h-4 "
                        />
                        <Link href="#" className="hover:underline ">
                          {country.name}
                        </Link>
                      </div>
                    ))}
                  </div>

                  {/* Mobile View: Dropdown */}
                  <div className="lg:hidden mt-10">
                    <button
                      onClick={() => setShowDropdown(!showDropdown)}
                      className="bg-white text-blue-400 px-4 py-2 rounded shadow w-full text-center"
                    >
                      Select Country
                    </button>
                    {showDropdown && (
                      <ul className="bg-white text-blue-600 mt-2 rounded shadow-md">
                        {countries.map((country, index) => (
                          <li key={index} className="border-b last:border-none">
                            <Link
                              href="#"
                              className="flex items-center gap-2 p-2 hover:bg-blue-100"
                            >
                              <img
                                src={country.flag}
                                alt={`${country.name} flag`}
                                className="w-6 h-4"
                              />
                              {country.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Register Section */}
                <ActionCard
                  iconClass="fa-regular fa-circle-user"
                  title="Register on Lot24 now"
                  description="Join the 100,000 of satisfied users now"
                  primaryButtonText="I want to sell"
                  secondaryButtonText="I want to buy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category selection */}
        <News />

        {/* footer section */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
