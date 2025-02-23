import React, { useEffect } from "react";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import News from "../components/News/News";
// import { render } from "react-dom";
import ImageViewer from "react-simple-image-viewer";
import { shippingData } from "../utils/deliveryCountries";
import Product_Swipper from "./pageComponents/Product_Swipper";
// import { products } from "../utils/products";
import Related_Search from "../components/Related_search/Related_Search";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductDetail from "../components/ProductDetail";
import ProductDescription from "../components/ProductDescription";
import PaymentOptions from "../components/PaymentOptions";
import DeliveryOptions from "../components/DeliveryOptions";
import TagsSection from "../components/TagsSection";
import WholesalerData from "../components/WholesalerData";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "../store/productActions";
import {
  mostPopularProduct,
  recentAddProduct,
} from "../utils/mutations/productMutation";
import useFetchProducts from "../hooks/useFetchProducts";
import { useTranslation } from "react-i18next";
import WhatsAppButton from "../components/WhatsAppButton";

const ProductView = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);
  const [isDelivery, setisDelivery] = React.useState(false);
  const [isdetail, setIsdetail] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const productItems = useSelector((state) => state.products.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch]);
  const { product } = productItems;

  const {
    data: mostRecent = [],
    isLoading: mostRecentLoading,
    isError: mostRecentError,
  } = useFetchProducts(["mostRecent"], recentAddProduct);
  // console.log(mostRecent);

  const {
    data: mostPopular = [],
    isLoading: mostPopularLoading,
    isError: mostPopularError,
  } = useFetchProducts(["mostPopular"], mostPopularProduct);

  // console.log(product.seller.name);
  const images =
    Array.isArray(product?.images) && product.images.length > 0
      ? product.images.map((img) => `https://api.lot24.ma/${img.image}`)
      : ["https://via.placeholder.com/400x300"];

  const openImageViewer = React.useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const hours = {
    Mon: "09:00 - 18:00",
    Tues: "09:00 - 18:00",
    Wed: "09:00 - 18:00",
    Thurs: "09:00 - 18:00",
    Fri: "09:00 - 18:00",
    Sat: "Closed",
    Sun: "Closed",
  };

  const dayMap = {
    Monday: "Mon",
    Tuesday: "Tues",
    Wednesday: "Wed",
    Thursday: "Thurs",
    Friday: "Fri",
    Saturday: "Sat",
    Sunday: "Sun",
  };
  const currentDay = new Date().toLocaleString("en-US", { weekday: "long" });
  const todayHours = hours[dayMap[currentDay]];
  const [hoveredHours, setHoveredHours] = React.useState(todayHours);

  const breadcrumbItems = [
    "Merkandi",
    "Offers' database",
    "Clothing",
    "Fashion accessories",
    "STOCK CLOTHING, UNDERWEAR AND SHOES FOR WOMEN, MEN, CHILDREN",
  ];
  const productData = {
    sellerId: product?.seller_id,
    productId: product?.id,
    title: product?.title,
    price: product?.sale_price,
    pricePerPiece: "/piece",
    priceExclVat: "price excl. VAT",
    orderButtonLabel: "Order",
    addToCartLabel: "Add to cart",
    phoneNo: "000 111 222 33",
    details: [
      { label: "Minimal order", value: `${product?.minimal_order} pieces` },
      { label: "Available quantity", value: product?.product_stock },
      { label: "Country", value: product?.country?.name },
      { label: "Grade", value: product?.badges },
    ],
  };

  const descriptionData = {
    title: product?.title,
    descriptionPoints: [product?.description],
  };

  const paymentData = {
    title: "Payment options",
    options: [product?.payment_option],
  };
  const deliveryData = {
    title: "Delivery options",
    options: [product?.delivery_option],
  };
  const tagData = [product?.tags];

  const wholesaler = {
    name: "ABC Wholesaler",
    country: "USA",
    city: "New York",
    postalCode: "10001",
    street: "123 Market St",
    contactName: "John Doe",
    languages: ["English", "Spanish"],
    phoneNumber: "+1 123 456 7890",
    mobilePhoneNumber: "+1 987 654 3210",
  };

  const isDetailInitial = false;

  return (
    <>
      <TopNavbar />
      <WhatsAppButton/>

      <div className="py-12 max-w-[1280px] px-4 md:px-0 container mx-auto">
        {/* <Breadcrumbs items={breadcrumbItems} /> */}
        <div className="flex flex-wrap mt-8">
          <div className="product-view md:p-0 md:w-[70%]">
            <div className="flex flex-wrap md:gap-2 lg:gap-0">
              <div className="product-view-image w-full md:w-[100%] lg:w-1/2 lg: flex flex-wrap justify-center border">
                {images.map((src, index) => (
                  <img
                    src={src}
                    onClick={() => openImageViewer(index)}
                    width={index === 0 ? "100%" : "50"}
                    key={index}
                    style={{
                      margin: "2px",
                      maxHeight: `${index === 0 ? "300px" : "50px"}`,
                      marginTop: `${index === 0 ? "0" : "20px"}`,
                      objectFit: "contain",
                    }}
                    alt={`Product image ${index + 1}`}
                  />
                ))}

                {isViewerOpen && (
                  <ImageViewer
                    src={images}
                    currentIndex={currentImage}
                    disableScroll={false}
                    closeOnClickOutside={true}
                    onClose={closeImageViewer}
                  />
                )}
              </div>
              <ProductDetail {...productData} />
            </div>
            <div className="border my-8 p-4">
              <ProductDescription {...descriptionData} />
              <hr className="my-4" />
              <PaymentOptions {...paymentData} />
              <hr className="my-4" />
              <DeliveryOptions {...deliveryData} />
              <hr className="my-4 " />
              <div className="Shipping-countries">
                <h1
                  className="my-4 font-bold text-xl cursor-pointer"
                  onClick={() => setisDelivery(!isDelivery)}
                >
                  Shipping to countries
                </h1>
                <div className="">
                  {isDelivery && (
                    <ul className="flex flex-col gap-4">
                      {shippingData.map((delivery, index) => {
                        return (
                          <>
                            <li className="flex flex-col gap-2">
                              <h1 className="font-bold text-lg ">
                                {delivery.continent}
                              </h1>
                              <h3 className="flex items-center gap-2 \">
                                <i className="text-green-500 fa-solid fa-check"></i>{" "}
                                {delivery.description}
                              </h3>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </div>
              <hr className="my-4 " />
              <TagsSection title="Tags" tags={tagData} />
            </div>
          </div>
          <WholesalerData
            product={product}
            isDetailInitial={isDetailInitial}
            // hours={hours}
            // currentDay={currentDay} // Pass the currentDay to the component
          />
        </div>
        <div className="my-10 bg-">
          <Product_Swipper
            heading={t("tags.tags3")}
            link={"#"}
            products={mostRecent.map((product) => ({
              img:
                product?.images?.length > 0
                  ? `https://api.lot24.ma/${product.images[0].image}`
                  : "https://via.placeholder.com/400x300", // Default placeholder image
              price:
                product.sale_price ||
                "Price not available",
                regular_price:product.regular_price,
              name: product.title,
              availability:
                product.product_stock > 0 ? "In Stock" : "Out of Stock",
              status: product.stock_status,
            }))}
          />
          <Product_Swipper
            heading={t("tags.tags2")}
            link={"#"}
            products={mostPopular.map((product) => ({
              img:
                product?.images?.length > 0
                  ? `https://api.lot24.ma/${product.images[0].image}`
                  : "https://via.placeholder.com/400x300", // Default placeholder image
              price:
                product.sale_price ||
                "Price not available",
                name: product.title,
                regular_price:product.regular_price,
              availability:
                product.product_stock > 0 ? "In Stock" : "Out of Stock",
              status: product.stock_status,
            }))}
          />

          {/* <Product_Swipper
            heading={"Other offers in this category"}
            link={"#"}
            products={products}
          /> */}
          <div className="my-4">
            <Related_Search />
          </div>
        </div>
      </div>

      <News />
      <Footer />
    </>
  );
};

export default ProductView;
