import React, { useState } from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <li
      className="relative lg:hover:border-l-[5px] lg:border-blue-500 transition duration-300"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Link
        to={`/products?category=${category.id}`} // Redirect to the category page with query parameter
        className="w-full flex items-center text-gray-800 p-3 hover:bg-gray-200 transition duration-300"
        title={category.name}
      >
        <img
          src={category.image || "/default-image.jpg"} // Fallback image if category.image is undefined
          alt={category.name || "Category"}
          className="w-10 h-10 mr-3 object-cover rounded-full" // Styling for better appearance
        />
        {category.name || "Unnamed Category"} {/* Fallback text */}
      </Link>
    </li>
  );
};

export default CategoryItem;
