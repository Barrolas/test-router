import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import HomePrincipal from './pages/home';
import ProductsPrincipal from './pages/products';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePrincipal />} />
        <Route path="/products" element={<ProductsPrincipal />} />
      </Routes>
    </Router>
  );
}

export default App;
