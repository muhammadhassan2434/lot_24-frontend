import React from "react";
import { Link } from "react-router-dom";

const Related_Search = () => {
  return (
    <div className="p-4 max-w-[1280px] md:px-0 container mx-auto">
      <div className="container mx-auto row">
        <div className="col-md-2 font-bold p-3 text-2xl ">Related Search</div>
        <div className="col-md-10 columns-3 p-3 capitalize font-semibold text-gray-500">
          <Link
            to={"/products"}
            className="block my-4 md:my-1 hover:text-blue-500"
          >
            atv parts wholesale distributors
          </Link>
          <Link
            to={"/products"}
            className="block my-4 md:my-1 hover:text-blue-500"
          >
            wholesale atv tires
          </Link>
          <Link
            to={"/products"}
            className="block my-4 md:my-1 hover:text-blue-500"
          >
            scooter wholesale
          </Link>
          <Link
            to={"/products"}
            className="block my-4 md:my-1 hover:text-blue-500"
          >
            wholesale online shopping
          </Link>
          <Link
            to={"/products"}
            className="block my-4 md:my-1 hover:text-blue-500"
          >
            playmobil bulk
          </Link>
          <Link
            to={"/products"}
            className="block my-4 md:my-1 hover:text-blue-500"
          >
            aeg stock buy or sell
          </Link>
          <Link
            to={"/products"}
            className="block my-4 md:my-1 hover:text-blue-500"
          >
            emporio armani outlet
          </Link>
          <Link
            to={"/products"}
            className="block my-4 md:my-1 hover:text-blue-500"
          >
            casio wholesale
          </Link>
          <Link
            to={"/products"}
            className="block my-4 md:my-1 hover:text-blue-500"
          >
            ralph lauren bulk buy
          </Link>
          <Link
            to={"/products"}
            className="block my-4 md:my-1 hover:text-blue-500"
          >
            wholesale ps5 games
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Related_Search;
