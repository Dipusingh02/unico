import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css'; // Optional: for additional styling

const ProductCard = ({ product }) => {
  const { id, imgSrc, description, originalPrice, offerPrice } = product;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    // Handle add to cart logic here
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      <img src={imgSrc} alt={description} className="product-image" />
      <div className="product-description">{description}</div>
      <div className="product-price">
        <span className="original-price">${originalPrice}</span>
        <span className="offer-price">${offerPrice}</span>
      </div>
      <button className="add-to-cart-button" onClick={handleButtonClick}>Add to Cart</button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imgSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    originalPrice: PropTypes.string.isRequired,
    offerPrice: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
