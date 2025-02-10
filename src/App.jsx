


import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import NavigationBar from "./components/Navbar";
import CartProvider from "./context/CartContext";
import AuthProvider from "./context/AuthContext"; // Import AuthProvider
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthProvider> {/* Wrap entire app with AuthProvider */}
      <CartProvider>
        <Router>
          <ToastContainer position="top-right" autoClose={3000} />
          <NavigationBar />
          <AppRoutes />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
