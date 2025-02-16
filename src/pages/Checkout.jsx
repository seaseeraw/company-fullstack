import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <Container className="mt-5 text-center">
      <h2>Checkout Successful 🎉</h2>
      <p>Your order has been placed. Thank you for shopping with us!</p>
      <Button variant="primary" onClick={() => navigate("/")}>
        Return to Home
      </Button>
    </Container>
  );
};

export default Checkout;
