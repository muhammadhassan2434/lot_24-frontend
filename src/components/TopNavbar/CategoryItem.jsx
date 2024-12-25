import React, { useState } from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const [isHovering, setIsHovering] = useState(false);
  // console.log(category);

  return (
    <li
    className="relative lg:hover:border-l-[5px] lg:border-blue-500 transition duration-300"
    onMouseEnter={() => setIsHovering(true)}
    onMouseLeave={() => setIsHovering(false)}
>
    <Link
        to={`/products?category=${category.id}`} // Redirect to the category page with query parameter
        className="w-full flex items-center text-gray-800 p-3 hover:bg-gray-200 transition duration-300"
    >
        {category.name}
    </Link>
</li>
  );
};

export default CategoryItem;
