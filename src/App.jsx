

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import NavigationBar from "./components/Navbar";
import CartProvider from "./context/CartContext";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css";

// import Footer from "./components/Footer";
// import "./styles/global.css";

function App() {
  return (
    <CartProvider>
        <Router>
        <ToastContainer position="top-right" autoClose={5000} />
    <NavigationBar /> 
    <AppRoutes />
    {/* <Footer /> */}
  </Router>
    </CartProvider>
  
  );
}

export default App;

