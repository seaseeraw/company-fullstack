
// import React from "react";
// import { Link } from "react-router-dom";
// import { Container, Row, Col, Button, Card } from "react-bootstrap";

// const Home = () => {
//   return (
//     <Container fluid className="mt-5 pt-4">
      
//       <Row className="text-center bg-light py-5">
//         <Col>
//           <h1 className="fw-bold">Welcome to Retail Store</h1>
//           <p className="lead text-muted">Find the best products at unbeatable prices!</p>
//           <Button as={Link} to="/shop" variant="primary" size="lg">
//             Shop Now
//           </Button>
//         </Col>
//       </Row>

      
//       <Container className="mt-5">
//         <h2 className="text-center mb-4">Featured Products</h2>
//         <Row className="g-4">
//           {[
//             { id: 1, name: "Product A", price: "$20", img: "https://via.placeholder.com/300" },
//             { id: 2, name: "Product B", price: "$30", img: "https://via.placeholder.com/300" },
//             { id: 3, name: "Product C", price: "$40", img: "https://via.placeholder.com/300" },
//           ].map((product) => (
//             <Col key={product.id} md={4}>
//               <Card>
//                 <Card.Img variant="top" src={product.img} />
//                 <Card.Body className="text-center">
//                   <Card.Title>{product.name}</Card.Title>
//                   <Card.Text className="fw-bold">{product.price}</Card.Text>
//                   <Button as={Link} to={`/product/${product.id}`} variant="outline-primary">
//                     View Details
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>

      
//       <Row className="bg-dark text-white text-center py-5 mt-5">
//         <Col>
//           <h3>Join our newsletter for the latest deals!</h3>
//           <Button variant="light" size="lg">
//             Subscribe Now
//           </Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Home;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card, Spinner } from "react-bootstrap";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch product data from products.json
  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Container fluid className="mt-5 pt-4">
      {/* Hero Section */}
      <Row className="text-center bg-light py-5">
        <Col>
          <h1 className="fw-bold">Welcome to Retail Store</h1>
          <p className="lead text-muted">Find the best products at unbeatable prices!</p>
          <Button as={Link} to="/shop" variant="primary" size="lg">
            Shop Now
          </Button>
        </Col>
      </Row>

      {/* Featured Products */}
      <Container className="mt-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        
        {loading ? (
          <Spinner animation="border" className="d-block mx-auto" />
        ) : (
          <Row className="g-4">
            {products.map((product) => (
              <Col key={product.id} md={4}>
                <Card>
                  <Card.Img variant="top" src={product.image} alt={product.name} />
                  <Card.Body className="text-center">
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text className="fw-bold">${product.price}</Card.Text>
                   
                    <Button as={Link} to={`/product/${product.id}`} variant="outline-primary">
  View Details
</Button>

                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>

      {/* Call to Action */}
      <Row className="bg-dark text-white text-center py-5 mt-5">
        <Col>
          <h3>Join our newsletter for the latest deals!</h3>
          <Button variant="light" size="lg">
            Subscribe Now
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
