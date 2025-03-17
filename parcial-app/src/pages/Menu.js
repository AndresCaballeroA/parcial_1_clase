import React from "react";
import { Carousel, Card } from "react-bootstrap";

export const MenuCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/path/to/image1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/path/to/image2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export const MenuCard = ({ image, title }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

import React, { useEffect, useState } from "react";
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { MenuCarousel, MenuCard } from "./MenuComponents"; // o la ruta correspondiente

const API_URL = "https://my.api.mockaroo.com/parcial.json?key=1925cd50";

const MenuPage = () => {
  const { t } = useTranslation();
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <h2 className="text-center my-4">{t("menu")}</h2>
      <MenuCarousel />
      <Row className="mt-4">
        {menuItems.map((item, index) => (
          <Col key={index} md={3} className="mb-4">
            <MenuCard image={item.imagen} title={item.first_name} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MenuPage;
