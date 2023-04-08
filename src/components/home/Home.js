import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./ProductPage";
import Navbar from "./Navbar";
import Cart from "./Cart";
import { CartProvider } from "./Create.context";
import CheckOutPage from './CheckOutPage';

function Home() {
  return (
    <>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOutPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default Home;
