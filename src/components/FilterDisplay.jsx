import React from "react";

const FilterDisplay = ({
  selectedCountries,
  selectedGrades,
  clearFilters,
  sortOption,
  setSortOption,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Filter Display */}
      <div className="flex flex-wrap items-center gap-2">
        {selectedCountries.map((country, index) => (
          <span key={index} className="px-3 py-1 border rounded">
            {country}
          </span>
        ))}
        {selectedGrades.map((grade, index) => (
          <span key={index} className="px-3 py-1 border rounded">
            {grade}
          </span>
        ))}
        {/* Clear Filter Button */}
        <button
          onClick={clearFilters}
          className="px-3 py-1 bg-red-600 text-white rounded"
        >
          Clear Filter
        </button>
      </div>

      {/* Sort Options */}
      <div className="flex items-center justify-end gap-4">
        <h1 className="font-bold min-w-[80px]">Sort By:</h1>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)} // Update sortOption on selection
          className="p-2 border rounded"
        >
          <option value="">Select Date or Expensive</option>
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="low-to-high">Lower to Higher Price</option>
          <option value="high-to-low">Higher to Lower Price</option>
        </select>
      </div>
    </div>
  );
};

export default FilterDisplay;
