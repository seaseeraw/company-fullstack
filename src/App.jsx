

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import NavigationBar from "./components/Navbar";
import CartProvider from "./context/CartContext";

// import Footer from "./components/Footer";
// import "./styles/global.css";

function App() {
  return (
    <CartProvider>
        <Router>
    
    <NavigationBar />
    <AppRoutes />
    {/* <Footer /> */}
  </Router>
    </CartProvider>
  
  );
}

export default App;

