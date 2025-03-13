import React, { useState } from "react";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.includes("@") && password.length >= 5 && password.length <= 8) {
            navigate("/home");
        } else {
            alert("Correo o contraseña inválidos");
        }
    };

    return (
        <div className="login-container vh-100">
            <Container fluid className="h-100">
                <Row className="h-100">
                    <Col md={6} className="left-side d-flex flex-column justify-content-center align-items-center">
                        <h2 className="quote">"TOO GOOD TO GO FOOD WASTING SOLUTION"</h2>
                        <div className="login-image"></div>
                    </Col>
                    <Col md={6} className="right-side d-flex justify-content-center align-items-center">
                        <Card className="login-card">
                            <h3 className="text-center text-white">Log in</h3>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label className="text-white"></Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="input-field"
                                        placeholder="Username"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="text-white"></Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="input-field"
                                        placeholder="Password"
                                    />
                                </Form.Group>
                                <p className="text-center text-white small">Forgot Password?</p>
                                <Button variant="light" type="submit" className="w-100 mt-3 login-button">
                                    Login
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
