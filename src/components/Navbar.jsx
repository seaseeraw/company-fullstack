




import React, { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext"; // Import Auth Context

const NavigationBar = () => {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext); // Get user state and logout function

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Retail Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>

            {user ? (
              <>
                <Button variant="outline-danger" className="mx-2" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            )}

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
