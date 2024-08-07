import React from 'react';
import ProductCard from './ProductCard';
import products from '../../data/product'; // Update the path as necessary

const ProductList = () => (
  <div className="app container" id='Product'>
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;
