import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Our Retail Store</h1>
      <Link to="/shop">Shop Now</Link>
    </div>
  );
};

export default Home;

