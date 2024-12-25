import React from 'react';

const PopularSearches = ({ title = "Popular searches", searches = [] }) => {
  return (
    <div className="lg:w-1/2">
      <div className="bg-[#E2E9EF] p-4 rounded-lg">
        <h1 className="font-bold text-[40px] m-2">{title}</h1>
        <div className="flex flex-wrap gap-2">
          {searches.map((search, index) => (
            <span
              key={index}
              className="m-1 p-2 bg-white inline-block rounded-lg"
            >
              {search.description}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularSearches;
