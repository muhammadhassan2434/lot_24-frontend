import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CategoryItem = ({ category }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [subCategories, setSubCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const imageUrl = `https://api.lot24.ma/uploads/${category.image}`;

  useEffect(() => {
    if (isHovering && subCategories.length === 0) {
      fetchSubcategories();
    }
  }, [isHovering]);

  const fetchSubcategories = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://api.lot24.ma/api/subcategory/${category.id}`);
      setSubCategories(response.data.data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <li
      className="relative lg:hover:border-l-[5px] lg:border-blue-500 transition duration-300"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Link
        to={`/products?category=${category.id}`}
        className="w-full flex items-center text-gray-800 p-3 hover:bg-gray-200 transition duration-300"
        title={category.name}
      >
        <img
          src={imageUrl || "/default-image.jpg"}
          alt={category.name || "Category"}
          className="w-10 h-10 mr-3 object-cover rounded-full"
        />
        {category.name || "Unnamed Category"}
      </Link>

      {/* Subcategories Dropdown */}
      {isHovering && (
        <ul className="absolute left-full top-0 bg-white shadow-lg rounded-lg min-w-[200px] z-20">
          {isLoading ? (
            <li className="px-4 py-2">Loading...</li>
          ) : (
            subCategories.map((subCategory) => (
              <li key={subCategory.id} className="px-4 py-2 hover:bg-gray-100">
                <Link to={`/products?subcategory=${subCategory.id}`} className="block">
                  {subCategory.name}
                </Link>
              </li>
            ))
          )}
        </ul>
      )}
    </li>
  );
};

export default CategoryItem;
