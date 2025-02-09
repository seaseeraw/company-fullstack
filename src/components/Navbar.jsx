// import React from "react";
// import { Link } from "react-router-dom";
// import { Navbar, Nav, Container, Button } from "react-bootstrap";
// import { FaShoppingCart } from "react-icons/fa";


// const NavigationBar = () => {
  
//   return (
//     <Navbar bg="light" expand="lg" fixed="top">
//       <Container>
      
//         <Navbar.Brand as={Link} to="/" className="fw-bold">
//           Retail<span className="text-primary">Store</span>
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" />

        
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link>
//             <Nav.Link as={Link} to="/shop" className="mx-2">Shop</Nav.Link>
//             <Nav.Link as={Link} to="/cart" className="mx-2">
//               Cart <FaShoppingCart />
//             </Nav.Link>
//             <Button as={Link} to="/login" variant="primary" className="mx-2">
//               Login
//             </Button>
//             <Button as={Link} to="/register" variant="success" className="mx-2">
//               Register
//             </Button>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavigationBar;


import React, { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

const NavigationBar = () => {
  const { cart } = useContext(CartContext);

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Retail Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Button as={Link} to="/cart" variant="outline-primary">
              <FaShoppingCart /> Cart ({cart.length})
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
