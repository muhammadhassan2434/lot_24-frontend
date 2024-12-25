import React from "react";
import { Link } from "react-router-dom";

const Section = ({ title, links }) => {
  return (
    <div className="mt-6 mb-6 ">
      <h1 className="font-extrabold text-lg py-1 px-1 border-t-2 border-l-2">
        {title}
      </h1>
      <nav className="flex flex-col gap-3">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className="flex items-center gap-3 text-gray-500 px-1 hover:text-black border-y-2 py-2 border-l-2"
          >
            <i className={link.icon}></i>
            {link.label}
          </Link>
        ))}
        {/* Logout Button */}
     
      </nav>
    </div>
  );
};

export default Section;
