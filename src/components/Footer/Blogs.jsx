import React from "react";
import News from "../News/News";
import TopNavbar from "../TopNavbar/TopNavbar";
import Footer from "./Footer";
import BlogCard from "./BlogCard";
import useFetchProducts from "../../hooks/useFetchProducts";
import { getBlogs } from "../../utils/mutations/productMutation";

export const Blogs = () => {
    const {
        data: blogs = [],
        isLoading: blogsLoading,
        isError: blogsError,
      } = useFetchProducts(["blogs"], getBlogs);

  return (
    <>
      <TopNavbar />
      <div className="container mx-auto my-8">
        <h1 className="text-2xl font-bold text-center mb-6">Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              description={blog.description}
              title={blog.title}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
