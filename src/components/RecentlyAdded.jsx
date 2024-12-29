import React from "react";
import { Link } from "react-router-dom";

const RecentlyAdded = ({ title, link, blogs }) => {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <div className="max-w-[1280px] ms-auto mr-auto">
        <div className="flex items-center justify-between my-4">
          <h1 className="text-[25px] font-bold">{title}</h1>
          <Link to={link} className="text-blue-500 text-lg">
            View More <i className="fa-solid fa-angles-right m-0 p-0"></i>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog, index) => (
            <div className="p-2" key={index}>
              <div className="card p-4 min-h-[200px] flex flex-col justify-between border rounded-lg shadow-md gap-4">
                <p>{blog.description}</p>
                <div className="flex items-center gap-2 2xl:mt-8">
                  <i className="fa-regular fa-circle-user text-[30px] bg-gray-300 text-white p-2 rounded-full"></i>
                  <h1 className="font-bold">{blog.title}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyAdded;
