
// import React, { useState, useEffect, useContext } from "react";
// import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
// import { CartContext } from "../context/CartContext";
// import { toast } from "react-toastify";

// const Shop = () => {
//   const { addToCart } = useContext(CartContext);
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("/products.json") // Fetch the JSON file
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//         setLoading(false);
//       });
//   }, []);

//   const handleAddToCart = (product) => {
//     addToCart(product); // Add product to the cart via context
//     toast.success(`${product.title} has been added to your cart!`, {
//       position: "top-right", // Set toast position
//       autoClose: 3000, // Toast will auto close after 3 seconds
//     });
//   };

//   return (
//     <Container className="mt-5">
//       <h2 className="text-center mb-4">Shop Our Products</h2>

//       {loading && <Spinner animation="border" className="d-block mx-auto" />}

//       <Row>
//         {!loading && products.length > 0 ? (
//           products.map((product) => (
//             <Col key={product.id} md={4} className="mb-4">
//               <Card className="h-100 shadow-sm">
//                 <Card.Img
//                   variant="top"
//                   src={product.image}
//                   alt={product.title}
//                   className="p-3"
//                   style={{ height: "250px", objectFit: "cover" }}
//                 />
//                 <Card.Body className="text-center">
//                   <Card.Title>{product.title}</Card.Title>
//                   <Card.Text>${product.price.toFixed(2)}</Card.Text>
//                   <Button variant="primary" onClick={() => handleAddToCart(product)}>
//                     Add to Cart
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))
//         ) : (
//           !loading && <h5 className="text-center">No products found.</h5>
//         )}
//       </Row>
//     </Container>
//   );
// };

// export default Shop;


import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

const Shop = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (!isAuthenticated) {
      console.log("User not authenticated, redirecting to login...");
      navigate("/login"); // Redirect to login if user is not authenticated
      return;
    }

    console.log("Shop component mounted, fetching products...");

    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Products fetched:", data); // Debugging log
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, [navigate]);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.title} has been added to your cart!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Shop Our Products</h2>

      {loading && <Spinner animation="border" className="d-block mx-auto" />}

      <Row>
        {!loading && products.length > 0 ? (
          products.map((product) => (
            <Col key={product.id} md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.title}
                  className="p-3"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <Card.Body className="text-center">
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>${product.price.toFixed(2)}</Card.Text>
                  <Button variant="primary" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          !loading && <h5 className="text-center">No products found.</h5>
        )}
      </Row>
    </Container>
  );
};

export default Shop;
