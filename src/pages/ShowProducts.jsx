import React, { useEffect, useState } from "react";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import Footer from "../components/Footer/Footer";
import Sidebar from "../admin/layout/Sidebar";
import ChattingComponent from "../components/ChattingComponent";
import CustomProductComponent from "../components/CustomProductComponent";
import useFetchProducts from "../hooks/useFetchProducts";
import { authSellerProducts } from "../utils/mutations/productMutation"; // Import the correct API function
import { useSelector } from "react-redux";
import { useAuthContext } from "../hooks/useAuthContext";

const ShowProducts = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("/dashboard"); // Default selected tab
const {userData}= useAuthContext()

  const [sellerProducts, setSellerProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (userData?.id) {
      fetchSellerProducts();
    }
  }, [userData]);

  const fetchSellerProducts = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await authSellerProducts(userData.id); // Use user ID to fetch products
    //   console.log(response.data);
      setSellerProducts(response?.data || []); // Set products to state
    } catch (error) {
      setIsError(true);
      console.error("Error fetching seller products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab); // Update the selected tab
    if (tab === "chatting") {
      console.log("This is the Chatting part");
    }
  };
  

  return (
    <>
      <TopNavbar />
      <div className="flex max-w-[1280px] m-auto">
        {/* Sidebar */}
        <div
          className={`fixed lg:static top-0 left-0 z-20 bg-white transition-transform transform ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:w-[20%] w-64`}
        >
          <Sidebar selectedTab={selectedTab} onTabChange={handleTabChange} />
        </div>

        {/* Main Content */}
        {selectedTab === "chatting" ? (
          <ChattingComponent />
        ) : (
          <div
            className={`flex-1 min-h-screen bg-gray-100 transition-all duration-300`}
          >
            <div className="p-4">
              <div className="lg:w-3/4 px-3">
                {isLoading ? (
                  <p>Loading products...</p>
                ) : isError ? (
                  <p>Failed to load products. Please try again later.</p>
                ) : sellerProducts.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {sellerProducts.map((product, index) => (
                      <div
                        className="shadow-md shadow-gray-300 rounded-lg overflow-hidden"
                        key={index}
                      >
                        <CustomProductComponent product={product} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No products found.</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ShowProducts;
