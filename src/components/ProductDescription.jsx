import React from "react";

const ProductDescription = ({ title, descriptionPoints }) => {
  return (
    <div className="description-can">
      {/* Title */}
      <h1 className="text-xl font-extrabold">{title}</h1>

      {/* Description Points */}
      <div className="mt-8 flex flex-col gap-4">
        {descriptionPoints.map((point, index) => (
          <p key={index}>{point}</p>
        ))}
      </div>
    </div>
  );
};

export default ProductDescription;
