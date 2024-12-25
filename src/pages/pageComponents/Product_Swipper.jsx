import React from "react";
// swipper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import Product_component from "./Product_component";
import { Link } from "react-router-dom";

const Product_Swipper = ({ heading, link, products }) => {
  return (
    <>
      <div className="p-4 md:py-4 md:px-0 my-4">
        <div className="card rounded-lg p-4">
          <h1 className="text-red-600 text-3xl font-bold flex justify-between md:flex-row flex-col items-center">
            {heading}
            <Link href={link} className="text-blue-500 text-lg">
              View More <i className="fa-solid fa-angles-right m-0 p-0"></i>
            </Link>
          </h1>
          <div className="p-4 my-4">
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              freeMode={true}
              // pagination={{
              //   clickable: true,
              // }}
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 3,
                },
                // when window width is >= 1024px
                1024: {
                  slidesPerView: 4,
                },
              }}
              navigation={true}
              modules={[FreeMode, Pagination, Navigation]}
              className="mySwiper"
            >
              {products.map((product, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Product_component product={product} cardHeight={"400px"}  link={"/"}/>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product_Swipper;
