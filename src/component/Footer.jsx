import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>We are a leading online retailer, offering a wide range of products at great prices.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">Shop</a></li>
              <li><a href="#" className="text-white">Cart</a></li>
              <li><a href="#" className="text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>123 Retail St, Shopping City</p>
            <p>Email: info@retailstore.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2025 Retail Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
