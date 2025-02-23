import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer/Footer";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import News from "../components/News/News";
import Related_Search from "../components/Related_search/Related_Search";
import Product_component from "./pageComponents/Product_component";
import Breadcrumbs from "../components/Breadcrumbs";
import SideBarCategories from "../components/SideBarCategories";
import FilterDisplay from "../components/FilterDisplay";
import CategoryProducts from "../components/CategoryProducts";
import WhatsAppButton from "../components/WhatsAppButton";

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("category");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `https://api.lot24.ma/api/search/category/${categoryId}`
      );
      const productList = response.data?.data?.products || []; // Safely access products
      setProducts(productList);
    } catch (error) {
      console.error("Error fetching products:", error.response?.data || error.message);
      setProducts([]); // Ensure products is never undefined
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    if (categoryId) {
      fetchProducts();
    }
  }, [categoryId]);

  const product_breadcrumbItems = ["Home", "Category", "Products"];

  return (
    <>
      <TopNavbar />
      <WhatsAppButton/>
      <div className="px-8 py-8 md:px-0 bg-gray-200">
        <div className="container mx-auto  max-w-[1280px]">
          {/* <Breadcrumbs items={product_breadcrumbItems} /> */}
          <div className="my-4 md:flex md:items-center md:justify-between">
            <div className="pr-3 mt-2">
              <h1 className="text-3xl font-bold">
                Products
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 md:px-0">
        {/* <SideBarCategories /> */}
        <div className="lg:col-span-12">
          {/* <FilterDisplay /> */}
          {loading ? (
            <p>Loading...</p>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 my-4">
              {products.map((product, index) => (
                <div key={index} className="shadow">
                  <CategoryProducts product={product} />
                </div>
              ))}
            </div>
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
      <Related_Search />
      <News />
      <Footer />
    </>
  );
};

export default Products;
