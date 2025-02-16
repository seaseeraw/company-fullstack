// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const { name, email, password, confirmPassword } = formData;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     console.log("User Registered:", formData);
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center min-vh-100">
//       <Row>
//         <Col xs={12}>
//           <Card className="p-4 shadow-lg" style={{ maxWidth: "400px", margin: "auto" }}>
//             <Card.Body>
//               <h2 className="text-center mb-4">Sign Up</h2>
//               <Form onSubmit={handleSubmit}>
//                 {/* Name Field */}
//                 <Form.Group className="mb-3">
//                   <Form.Label>Full Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Enter your full name"
//                     name="name"
//                     value={name}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>

//                 {/* Email Field */}
//                 <Form.Group className="mb-3">
//                   <Form.Label>Email Address</Form.Label>
//                   <Form.Control
//                     type="email"
//                     placeholder="Enter your email"
//                     name="email"
//                     value={email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>

//                 {/* Password Field */}
//                 <Form.Group className="mb-3">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     placeholder="Enter password"
//                     name="password"
//                     value={password}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>

//                 {/* Confirm Password Field */}
//                 <Form.Group className="mb-3">
//                   <Form.Label>Confirm Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     placeholder="Confirm password"
//                     name="confirmPassword"
//                     value={confirmPassword}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>

//                 {/* Register Button */}
//                 <Button type="submit" variant="success" className="w-100">
//                   Register
//                 </Button>
//               </Form>

//               {/* Links */}
//               <div className="text-center mt-3">
//                 <small>
//                   Already have an account? <Link to="/login">Login</Link>
//                 </small>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Register;
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../App.css"; // Import CSS for styling

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !password || !confirmPassword) {
      toast.error("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    toast.success("Registration successful! 🎉 Redirecting to login...", {
      autoClose: 3000,
    });

    // Simulate user registration (Replace with API call)
    setTimeout(() => {
      navigate("/login"); // Redirect to login after successful registration
    }, 3000);
  };

  return (
    <Container className="register-container">
      <h2 className="text-center mb-4">Register</h2>
      <Form onSubmit={handleRegister} className="register-form">
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3 w-100">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
