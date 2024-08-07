import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { About, Contact, Home, Policies, ProductList, Support } from './components';
import ProductDetail from './components/Product/ProductDetail';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default App;
