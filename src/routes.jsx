



import React from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import ProtectedRoute from "./ProtectedRoute"; // Import Protected Route

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      {/* Protect Cart Route */}
      <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
    </Routes>
  );
};

export default AppRoutes;
