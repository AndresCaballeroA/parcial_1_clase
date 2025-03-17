import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FaUtensils, FaStore, FaShoppingCart } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <Container className="menu-box">
        <button className="menu-button" onClick={() => navigate("/menu")}>
          <FaUtensils className="icon" />
          <span>{t("menu")}</span>
        </button>
        <button className="menu-button" onClick={() => navigate("/stores")}>
          <FaStore className="icon" />
          <span>{t("stores")}</span>
        </button>
        <button className="menu-button" onClick={() => navigate("/cart")}>
          <FaShoppingCart className="icon" />
          <span>{t("cart")}</span>
        </button>
      </Container>
    </div>
  );
};

export default Home;
