import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FaUtensils, FaStore, FaShoppingCart } from "react-icons/fa";
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <Container className="menu-box">
                <button className="menu-button" onClick={() => navigate("/menu")}>
                    <FaUtensils className="icon" />
                    <span>MENU</span>
                </button>
                <button className="menu-button" onClick={() => navigate("/stores")}>
                    <FaStore className="icon" />
                    <span>STORES</span>
                </button>
                <button className="menu-button" onClick={() => navigate("/cart")}>
                    <FaShoppingCart className="icon" />
                    <span>CART</span>
                </button>
            </Container>
        </div>
    );
};

export default Home;
