import React from "react";

const SideBarCategories = ({ categories, countries, grades }) => {
  const [openSections, setOpenSections] = React.useState({
    categories: false,
    countries: false,
    grade: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="lg:col-span-3 border">
      {/* Accordion */}
      <div className="space-y-4">
        {/* Categories Accordion */}
        <div className="space-y-2 ">
          <button
            className="w-full py-2 px-4 text-left bg-gray-100 text-blue-600 font-medium"
            onClick={() => toggleSection("categories")}
          >
            Categories
          </button>
          {openSections.categories && (
            <div className="space-y-2 px-3">
              {categories.map((category, index) => (
                <a
                  href="#"
                  key={index}
                  className="block text-blue-600 hover:underline 2xl:py-2"
                >
                  {category}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Countries Accordion */}
        <div className="space-y-2">
          <button
            className="w-full py-2 px-4 text-left bg-gray-100 text-blue-600 font-medium"
            onClick={() => toggleSection("countries")}
          >
            Countries
          </button>
          {openSections.countries && (
            <div className="space-y-2 px-3">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ul className="space-y-2 max-h-[400px] overflow-auto">
                {countries.map((country) => (
                  <li key={country.name} className="flex items-center gap-2 my-2 ">
                    <input type="checkbox" className="form-checkbox" />
                    <img src={country.flag} alt="flags" className="w-[20px]" />
                    <span>{country.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Grade Accordion */}
        <div className="space-y-2 ">
          <button
            className="w-full py-2 px-4 text-left bg-gray-100 text-blue-600 font-medium"
            onClick={() => toggleSection("grade")}
          >
            Grade
          </button>
          {openSections.grade && (
            <div className="space-y-2">
              {grades.map((grade, index) => (
                <div key={index} className="flex items-center gap-2 2xl:px-4">
                  <input type="checkbox" className="form-checkbox" />
                  <span>{grade}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBarCategories;
