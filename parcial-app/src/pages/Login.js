import React, { useState } from "react";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Login.css";

const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.includes("@") && password.length >= 5 && password.length <= 8) {
      navigate("/home");
    } else {
      alert(t("invalidCredentials"));
    }
  };

  return (
    <div className="login-container vh-100">
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col
            md={6}
            className="left-side d-flex flex-column justify-content-center align-items-center"
          >
            <h2 className="quote">{t("slogan")}</h2>
            <div className="login-image"></div>
          </Col>
          <Col
            md={6}
            className="right-side d-flex justify-content-center align-items-center"
          >
            <Card className="login-card">
              <h3 className="text-center text-white">{t("login")}</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label className="text-white"></Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input-field"
                    placeholder={t("username")}
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
                    placeholder={t("password")}
                  />
                </Form.Group>
                <p className="text-center text-white small">
                  {t("forgotPassword")}
                </p>
                <Button
                  variant="light"
                  type="submit"
                  className="w-100 mt-3 login-button"
                >
                  {t("login")}
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
