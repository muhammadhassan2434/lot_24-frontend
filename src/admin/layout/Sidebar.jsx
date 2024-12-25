import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuthContext } from "../../hooks/useAuthContext";

const Sidebar = () => {
  const {userData:user} = useAuthContext()
  const navigate = useNavigate();

  const sections = [
    {
      title: "Menu",
      links: [
        { to: "/seller", label: "Add Product", icon: "fa-solid fa-gauge" },
        {
          to: "/seller/products",
          label: "Products",
          icon: "fa-brands fa-product-hunt",
        },
        // { to: "/orders", label: "Orders", icon: "fa-solid fa-boxes-packing" },
      ],
    },
    {
      title: "Services",
      links: [
        { 
          to: "/seller/chat", 
          label: "Message", 
          icon: "fa-solid fa-gauge", 
          sendData: { id: user?.id }  // Send user ID as state
        },
      ],
    },
  ];

  const handleNavigation = (link) => {
    if (link.sendData) {
      navigate(link.to, { state: link.sendData });
    } else {
      navigate(link.to);
    }
  };

  return (
    <div className="bg-white border-r min-h-screen mr-4">
      <div className="bg-gray-200 p-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-blue-700 w-12 h-12 flex items-center justify-center rounded-full">
            <i className="fa-solid fa-user text-2xl text-white"></i>
          </div>
          <div>
            <h1 className="font-extrabold text-xl">{user?.name}</h1>
            <span className="text-sm px-3 py-1 bg-gray-500 text-white rounded">
              {user?.surname}
            </span>
          </div>
        </div>

        <div className="h-[2px] bg-white mb-4"></div>
        <div className="text-center mb-4">
          <h4 className="text-sm">Account creation date</h4>
          <h2 className="font-bold">
            {new Date(user?.created_at).toLocaleDateString()}
          </h2>
        </div>

        <Link to="/">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 w-full rounded">
            Logout
          </button>
        </Link>
      </div>

      {/* Sidebar Links */}
      {sections.map((section, index) => (
        <div key={index}>
          <h2 className="font-bold text-lg px-4">{section.title}</h2>
          <ul>
            {section.links.map((link) => (
              <li key={link.to}>
                <button
                  className={`flex items-center gap-3 px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-300`}
                  onClick={() => handleNavigation(link)}
                >
                  <i className={`${link.icon} text-xl`}></i>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* <button className="flex items-center gap-3 text-red-500 px-4 mb-3 hover:text-black border-y-2 py-2 border-l-2 mt-4 w-full">
        <i className="fa-solid fa-user text-2xl text-black"></i>
        Logout
      </button> */}
    </div>
  );
};

export default Sidebar;
