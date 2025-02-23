import React, { useEffect, useState } from "react";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import Footer from "../../components/Footer/Footer";
import Sidebar from "./Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import SellerInput from "../../components/SellerInput";
import DataForm from "../../components/DataForm";
import ChattingComponent from "../../components/ChattingComponent";
import { useSelector } from "react-redux";
import {
  getCategories,
  GetCountries,
} from "../../utils/mutations/productMutation";
import useFetchProducts from "../../hooks/useFetchProducts";
import { toast, ToastContainer } from "react-toastify";
import { useAuthContext } from "../../hooks/useAuthContext";
import axios from "axios";
// import { storeProduct } from "../../store/productActions";
// import { useDispatch } from "react-redux";

const Layout = () => {
  // const dispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  // const [mainTitle, setTitle] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  // const [mainContent, setContent] = useState("");
  const [selectedTab, setSelectedTab] = useState("/dashboard"); // Default selected tab
  const navigate = useNavigate();
  const { userData, currState } = useAuthContext();

  console.log(userData?.id);

  const {
    data: categories = [],
    isLoading: categoryLoading,
    isError: categoryError,
  } = useFetchProducts(["GET_Catrgory"], getCategories);
  const {
    data: Countries = [],
    isLoading: CountriesLoading,
    isError: CountriesError,
  } = useFetchProducts(["GetCountries"], GetCountries);
  // console.log(Countries[0].name)

  const [formData, setFormData] = useState({
    seller_id: userData?.id,
    title: "",
    description: "",
    category_id: "",
    subcategory: "",
    regular_price: "",
    sale_price: "",
    wholesale_price: "",
    badges: "",
    minimal_order: "",
    product_stock: 0,
    stock_status: "",
    sku: "",
    ean: "",
    country_id: "",
    image: [],
    // tags: "",
    // payment_options: "",
    // delivery_options: "",
    // brand_id: "",
  });

  useEffect(() => {
    const fetchSubcategories = async () => {
      if (formData.category_id) {
        try {
          const response = await axios.get(
            `https://api.lot24.ma/api/subcategory/${formData.category_id}`
          );
          console.log("Fetched Subcategories:", response.data); // Check the response structure
          // Ensure response.data is an array and set accordingly
          setSubcategories(
            Array.isArray(response.data)
              ? response.data
              : response.data.data || []
          );
        } catch (error) {
          console.error("Error fetching subcategories:", error);
        }
      } else {
        setSubcategories([]); // Clear subcategories if no category is selected
      }
    };
    fetchSubcategories();
  }, [formData.category_id]);

  useEffect(() => {
    console.log(currState);
    if (currState === "loggedOut") {
      navigate("/login");
    }
    // if (userData?.id) {
    //   setFormData((prevState) => ({
    //     ...prevState,
    //     seller_id: userData.id,
    //   }));
    // }
  }, [userData, currState]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : type === "file" ? files : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData instance
    const formDataObj = new FormData(e.target);

    // Append all form data
    Object.keys(formData).forEach((key) => {
      if (key === "image") {
        // Append each file for "image"
        Array.from(formData[key]).forEach((file) => {
          formDataObj.append("image[]", file); // `image[]` matches backend schema
        });
      } else {
        formDataObj.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch("https://api.lot24.ma/api/store-product", {
        method: "POST",
        body: formDataObj, // Do not include `Content-Type` headers; FormData handles it
      });

      const result = await response.json();

      if (response.ok && result.status) {
        // console.log("Product Stored Successfully:", result);
        toast.success("Product stored successfully!");

        // Reset the form data
        setFormData({
          seller_id: userData?.id || "",
          title: "",
          description: "",
          category_id: "",
          regular_price: "",
          sale_price: "",
          wholesale_price: "",
          badges: "",
          minimal_order: "",
          product_stock: 0,
          stock_status: "",
          sku: "",
          ean: "",
          country_id: "",
          image: [], // Clear images
        });
      } else {
        console.error("Validation Error:", result.error);
        toast.error(`Validation Error: ${JSON.stringify(result.error)}`);
      }
    } catch (error) {
      console.error("Error posting product:", error);
      toast.error("Failed to store the product. Please try again.");
    }
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab); // Update the selected tab
    if (tab === "chatting") {
      // console.log("This is the Chatting part");
    }
  };

  // console.log(formData)

  return (
    <>
      <TopNavbar />
      <ToastContainer />
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
              <div className="bg-gray-200 flex justify-between items-center p-4 rounded mb-4">
                <button
                  className="block lg:hidden"
                  onClick={() => setMobileOpen(!mobileOpen)}
                >
                  <i className="fa-solid fa-bars text-2xl"></i>
                </button>
                <button
                  className="hidden lg:block opacity-0 cursor-default"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <i className="fa-solid fa-bars text-2xl"></i>
                </button>
                <div className="bg-blue-700 w-10 h-10 flex items-center justify-center rounded-full">
                  <i className="fa-solid fa-user text-xl text-white"></i>
                </div>
              </div>
              <Outlet />
            </div>

            <form onSubmit={handleSubmit} className="px-7 mt-6">
              <div className="">
                <SellerInput
                  label="Title"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
                <SellerInput
                  label="Description"
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
                <SellerInput
                  label="Category"
                  type="select"
                  name="category_id"
                  options={categories.map((cat) => ({
                    value: cat.id,
                    label: cat.name,
                  }))}
                  value={formData.category_id}
                  onChange={handleChange}
                />
                <SellerInput
                  label="Sub Category"
                  type="select"
                  name="subcategory"
                  options={
                    Array.isArray(subcategories)
                      ? subcategories.map((subCat) => ({
                          value: subCat.id,
                          label: subCat.name,
                        }))
                      : []
                  } // Ensure it's an array before mapping
                  value={formData.subcategory}
                  onChange={handleChange}
                />
                <SellerInput
                  label="Regular price ($)"
                  type="number"
                  name="regular_price"
                  value={formData.regular_price}
                  onChange={handleChange}
                />
                <SellerInput
                  label="Sale price ($)"
                  type="number"
                  name="sale_price"
                  value={formData.sale_price}
                  onChange={handleChange}
                />
                <SellerInput
                  label="Wholesale"
                  type="text"
                  name="wholesale_price"
                  checked={formData.wholesale_price}
                  onChange={handleChange}
                />
                <SellerInput
                  label="Product badges"
                  type="select"
                  name="badges"
                  options={[
                    { value: "piece", label: "Piece" },
                    { value: "damaged", label: "Damaged" },
                    { value: "new", label: "New" },
                  ]}
                  value={formData.badges}
                  onChange={handleChange}
                />

                <SellerInput
                  label="Minimal order"
                  type="number"
                  name="minimal_order"
                  value={formData.minimal_order}
                  onChange={handleChange}
                />
                <SellerInput
                  label="Product Stock"
                  type="number"
                  name="product_stock"
                  value={formData.product_stock}
                  onChange={handleChange}
                />
                <SellerInput
                  label="Stock status"
                  type="select"
                  name="stock_status"
                  options={[
                    { value: "in stock", label: "In Stock" },
                    { value: "out of stock", label: "Out of Stock" },
                  ]}
                  value={formData.stock_status}
                  onChange={handleChange}
                />

                <SellerInput
                  label="SKU"
                  type="text"
                  name="sku"
                  value={formData.sku}
                  onChange={handleChange}
                />
                <SellerInput
                  label="EAN"
                  type="text"
                  name="ean"
                  value={formData.ean}
                  onChange={handleChange}
                />
                <SellerInput
                  label="Country"
                  type="select"
                  name="country_id"
                  options={Countries.map((cat) => ({
                    value: cat.id,
                    label: cat.name,
                  }))}
                  value={formData.country_id}
                  onChange={handleChange}
                />
                <SellerInput
                  label="Images"
                  type="file"
                  name="image"
                  multiple // Enable multiple file selection
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
