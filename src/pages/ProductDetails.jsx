// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Container, Row, Col, Button, Card } from "react-bootstrap";

// const ProductDetails = () => {
//   const { id } = useParams();  // Get product ID from URL params
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     // Fetch product details using the product ID from the URL
//     fetch("/products.json")
//       .then((response) => response.json())
//       .then((data) => {
//         const selectedProduct = data.find((prod) => prod.id === parseInt(id));
//         setProduct(selectedProduct);
//       })
//       .catch((error) => {
//         console.error("Error fetching product details:", error);
//       });
//   }, [id]);

//   return (
//     <Container className="mt-5 pt-4">
//       {product ? (
//         <Row>
//           <Col md={6}>
//             <Card>
//               <Card.Img variant="top" src={product.image} alt={product.title} />
//             </Card>
//           </Col>
//           <Col md={6}>
//             <h2>{product.title}</h2>
//             <p className="fw-bold">${product.price}</p>
//             <p>{product.description}</p> {/* Render the description here */}
//             <Button variant="primary">Add to Cart</Button>
//           </Col>
//         </Row>
//       ) : (
//         <p>Loading product details...</p>
//       )}
//     </Container>
//   );
// };

// export default ProductDetails;



import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { toast } from "react-toastify"; // Import toastify

const ProductDetails = () => {
  const { id } = useParams();  // Get product ID from URL params
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch product details using the product ID from the URL
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedProduct = data.find((prod) => prod.id === parseInt(id));
        if (selectedProduct) {
          setProduct(selectedProduct);
        } else {
          setError("Product not found.");
        }
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching product details.");
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    // Show a success message using toastify
    toast.success(`${product.title} has been added to your cart!`, {
      position: "top-right",
      autoClose: 3000, // Toast will disappear after 3 seconds
    });
  };

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container className="mt-5 pt-4">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={product.image} alt={product.title} />
          </Card>
        </Col>
        <Col md={6}>
          <h2>{product.title}</h2>
          <p className="fw-bold">${product.price}</p>
          <p>{product.description}</p> {/* Render the description here */}
          <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
