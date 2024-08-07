import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import products from '../../data/product'; // Update the path as necessary


const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.description}</h1>
      <img src={product.imgSrc} alt={product.description} />
      <p>Original Price: ${product.originalPrice}</p>
      <p>Offer Price: ${product.offerPrice}</p>
    </div>
  );
};

ProductDetail.propTypes = {
  productId: PropTypes.string.isRequired, // PropTypes for validation
};

export default ProductDetail;
