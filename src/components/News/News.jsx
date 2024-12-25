import React from "react";
import { categoriesSelection } from "../../utils/categories";
const News = () => {
  // newsletter category
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  return (
    <section className="bg-blue-900 text-white py-8 px-4 md:px-0">
      <div className=" max-w-[1280px] ms-auto mr-auto">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Newsletter Title */}
          <div className=" flex items-center md:text-left 2xl:gap-8">
            <i className="fa fa-envelope text-6xl text-gray-200 mr-2 "></i>
            <div>
              <h2 className="text-xl font-bold">Free Lot24 NEWSLETTER</h2>
              <p className="mt-2 md:mt-0">
                Daily updates about new products and news about Lot24.
              </p>
            </div>
          </div>
          {/* Subscription Form */}
          <div className="w-fit max-w-[1080px]">
            <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="p-2  text-gray-700 w-full md:w-1/3  lg:w-auto min-w-[250px]"
              />

              {/* Categories Dropdown */}
              <div
                className="relative w-full md:w-auto"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <button className="p-[12px] bg-gray-200 text-gray-800 text-xs w-full md:w-auto cursor-pointer">
                  {selectedCategories.length > 0
                    ? `Selected categories (${selectedCategories.length})`
                    : "Choose categories"}
                </button>
                {isDropdownOpen && (
                  <ul className="absolute bg-white text-gray-800 mt-1 rounded shadow-lg max-h-48 overflow-y-auto z-10 min-w-[200px] w-full md:w-auto">
                    {categoriesSelection.map((category, index) => (
                      <li key={index} className="p-2">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => toggleCategory(category)}
                            className="form-checkbox text-blue-500"
                          />
                          {category}
                        </label>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button className="bg-yellow-500 text-white px-2 py-2 w-full md:w-auto ">
                Subscribe me
              </button>
            </div>
            <p className="text-gray-400 max-w-[450px] mt-6">
              By subscribing to our newsletter, you consent to the processing of
              your personal data for marketing purposes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
