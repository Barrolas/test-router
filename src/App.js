import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import HomePrincipal from './pages/home';
import ProductsPrincipal from './pages/products';
import ProductList from './pages/product_list';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePrincipal />} />
        <Route path="/products" element={<ProductsPrincipal />} />
        <Route path="/lista-productos" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;
