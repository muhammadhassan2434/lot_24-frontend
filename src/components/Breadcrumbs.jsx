import React from "react";
const Breadcrumbs = ({ items }) => {
  return (
    <div className="headings flex flex-wrap gap-1 md:gap-2">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span className="text-blue-500 text-sm">{item}</span>
          {index < items.length - 1 && " /"}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
