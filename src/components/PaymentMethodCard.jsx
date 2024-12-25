import React from 'react';
import PropTypes from 'prop-types';

const PaymentMethodCard = ({ imageSrc, altText, buttonText, buttonLink, buttonAction }) => (
  <div className="flex flex-col items-center justify-between bg-gray-100 p-6 rounded-lg shadow-lg">
    <div className="mb-4 w-full">
      <img src={imageSrc} alt={altText} className="w-full mb-4" />
    </div>
    {buttonLink ? (
      <a
        href={buttonLink}
        className="bg-orange-500 text-white px-6 py-2 text-center rounded-md hover:bg-orange-400 w-full"
      >
        {buttonText}
      </a>
    ) : (
      <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-400 w-full">
        {buttonText}
      </button>
    )}
  </div>
);

PaymentMethodCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string,
  buttonAction: PropTypes.func,
};

PaymentMethodCard.defaultProps = {
  buttonLink: null,
  buttonAction: null,
};

export default PaymentMethodCard;
