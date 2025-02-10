


// import React, { useContext } from "react";
// import { Container, Row, Col, Table, Button, Image } from "react-bootstrap";
// import { CartContext } from "../context/CartContext";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify"; // Import toast

// const Cart = () => {
//   const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

//   // Calculate total price
//   const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   const handleRemove = (id, name) => {
//     removeFromCart(id); // Remove item from cart
//     toast.success(`${name} has been removed from your cart.`, {
//       position: "top-right",
//       autoClose: 3000, // Auto close after 3 seconds
//     });
//   };

//   return (
//     <Container className="mt-5">
//       <h2 className="text-center mb-4">Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <div className="text-center">
//           <h4>Your cart is empty</h4>
//           <Link to="/shop" className="btn btn-primary mt-3">
//             Continue Shopping
//           </Link>
//         </div>
//       ) : (
//         <>
//           <Table striped bordered hover responsive>
//             <thead className="bg-light">
//               <tr>
//                 <th>Image</th>
//                 <th>Product</th>
//                 <th>Price</th>
//                 <th>Quantity</th>
//                 <th>Total</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cart.map((item) => (
//                 <tr key={item.id}>
//                   <td>
//                     <Image src={item.image} alt={item.name} width="60" height="60" rounded />
//                   </td>
//                   <td>{item.name}</td>
//                   <td>${item.price.toFixed(2)}</td>
//                   <td>
//                     <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
//                     <span className="mx-2">{item.quantity}</span>
//                     <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
//                   </td>
//                   <td>${(item.price * item.quantity).toFixed(2)}</td>
//                   <td>
//                     <Button variant="danger" size="sm" onClick={() => handleRemove(item.id, item.name)}>Remove</Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>

//           <div className="d-flex justify-content-between align-items-center mt-4">
//             <Button variant="danger" onClick={clearCart}>Clear Cart</Button>
//             <h4>Total: ${totalPrice.toFixed(2)}</h4>
//             <Button variant="success">Checkout</Button>
//           </div>
//         </>
//       )}
//     </Container>
//   );
// };

// export default Cart;


// import React, { useContext } from "react";
// import { Container, Row, Col, Table, Button, Image } from "react-bootstrap";
// import { CartContext } from "../context/CartContext";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";

// const Cart = () => {
//   const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

//   // Calculate total price
//   const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   // Handle product removal
//   // const handleRemove = (id, name) => {
//   //   removeFromCart(id); // Remove item from cart
//   //   const productName = name || "Unknown Product"; // Fallback if name is undefined
//   //   toast.success(`${productName} has been removed from your cart.`, {
//   //     position: "top-right",
//   //     autoClose: 3000, // Auto close after 3 seconds
//   //   });
//   // };

 
  

//   return (
//     <Container className="mt-5">
//       <h2 className="text-center mb-4">Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <div className="text-center">
//           <h4>Your cart is empty</h4>
//           <Link to="/shop" className="btn btn-primary mt-3">
//             Continue Shopping
//           </Link>
//         </div>
//       ) : (
//         <>
//           <Table striped bordered hover responsive>
//             <thead className="bg-light">
//               <tr>
//                 <th>Image</th>
//                 <th>Product</th>
//                 <th>Price</th>
//                 <th>Quantity</th>
//                 <th>Total</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cart.map((item) => (
//                 <tr key={item.id}>
//                   <td>
//                     <Image src={item.image} alt={item.name} width="60" height="60" rounded />
//                   </td>
//                   <td>{item.name}</td>
//                   <td>${item.price.toFixed(2)}</td>
//                   <td>
//                     <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
//                     <span className="mx-2">{item.quantity}</span>
//                     <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
//                   </td>
//                   <td>${(item.price * item.quantity).toFixed(2)}</td>
//                   <td>
//                     <Button variant="danger" size="sm" onClick={() => handleRemove(item.id, item.name)}>Remove</Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>

//           <div className="d-flex justify-content-between align-items-center mt-4">
//             <Button variant="danger" onClick={clearCart}>Clear Cart</Button>
//             <h4>Total: ${totalPrice.toFixed(2)}</h4>
//             <Button variant="success">Checkout</Button>
//           </div>
//         </>
//       )}
//     </Container>
//   );
// };

// export default Cart;



import React, { useContext } from "react";
import { Container, Row, Col, Table, Button, Image } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleRemove = (id, name) => {
    removeFromCart(id); // Remove item from cart
    // Show toast with product name if it's available
    if (name) {
      toast.error(`${name} has been removed from your cart.`, {
        position: "top-right",
        autoClose: 3000, // Auto close after 3 seconds
      });
    } else {
      toast.error("Product has been removed from your cart.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="text-center">
          <h4>Your cart is empty</h4>
          <Link to="/shop" className="btn btn-primary mt-3">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead className="bg-light">
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Image src={item.image} alt={item.name} width="60" height="60" rounded />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button variant="outline-secondary" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <Button variant="danger" size="sm" onClick={() => handleRemove(item.id, item.name)}>Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <Button variant="danger" onClick={clearCart}>Clear Cart</Button>
            <h4>Total: ${totalPrice.toFixed(2)}</h4>
            <Button variant="success">Checkout</Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;

