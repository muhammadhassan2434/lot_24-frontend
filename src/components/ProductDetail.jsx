import { Link, useNavigate } from "react-router-dom";
import ProductDescription from "./ProductDescription";
import { useState } from "react";
import ProductModal from "./ProductModal";

const ProductDetail = ({
  sellerId,
  productId,
  title,
  price,
  pricePerPiece,
  priceExclVat,
  orderButtonLabel,
  addToCartLabel,
  phoneNo,
  details,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();
  const handleButtonClick = () => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      // Navigate to sellerId/buyerChat if the token exists
      navigate(`/${sellerId}/buyerChat`);
    } else {
      // Navigate to /register if the token does not exist
      navigate('/login');
    }
  };
  
  const handelPhoneClick=()=>{
    const token = localStorage.getItem('auth_token');
    if (token) {
      // Navigate to sellerId/buyerChat if the token exists
      openModal()
    } else {
      // Navigate to /register if the token does not exist
      navigate('/login');
    }
  }

  return (
    <div className="product-detail md:w-[100%] px-4 lg:w-1/2">
      {/* Product Title */}
      <h1 className="font-extrabold text-2xl">{title}</h1>

      {/* Price Section */}
      <div className="price-can py-4 flex flex-wrap gap-2 items-end">
        <span className="text-red-500 text-2xl font-extrabold">{`$${price}`}</span>
        <span className="text-gray-400 pb-1">{pricePerPiece}</span>
        <span className="text-green-500 pb-1">{priceExclVat}</span>
      </div>

      {/* Order and Cart Buttons */}
      <div className="order-can">
      <button
      onClick={handleButtonClick}
      className="w-full bg-yellow py-2 px-3 text-2xl font-extrabold text-white"
    >
      {orderButtonLabel}
    </button>
        {/* <button className="border-2 border-[#f29d00] mt-4 py-2 px-7 text-[#f29d00] hover:bg-[#f29d00] hover:text-white">
          {addToCartLabel}
        </button> */}
      </div>

      <hr className="my-4" />

      {/* Details Table */}
      <div className="detail-list">
        <table className="w-full">
          <tbody>
            {details.map((detail, index) => (
              <tr key={index}>
                <td className="py-1 font-bold">{detail.label}</td>
                <td className="py-1 text-gray-500">{detail.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="my-3">
          <button
          // onClick
            onClick={handelPhoneClick}
            className=" border-2	border-yellow-500 p-2  text-yellow-400 hover:bg-yellow-500 hover:text-white"
          >
            Phone
          </button>
          <button
            // to={`/${sellerId}/buyerChat`}
            onClick={handleButtonClick}
            className="border-2 border-yellow-500 p-2 mx-3 text-yellow-400 hover:bg-yellow-500 hover:text-white"
          >
            Message
          </button>
        </div>
        {isModalOpen && (
          <ProductModal phoneNumber={phoneNo} onClose={closeModal} />
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
