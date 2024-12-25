import React from "react";

const TagsSection = ({ title, tags }) => {
  return (
    <div className="tags">
      <h1 className="my-4 font-bold text-xl cursor-pointer">{title}</h1>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-6 py-2 border text-xs hover:bg-gray-300 cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagsSection;
