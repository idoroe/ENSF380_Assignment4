import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './component/Homepage';
import ProductPage from './component/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

