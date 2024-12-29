import React from "react";

const BlogCard = ({ description, title }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Blog</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="text-sm text-gray-600">By: {title}</span>
      </div>
    </div>
  );
};

export default BlogCard;
