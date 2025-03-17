import React, { useEffect, useState } from "react";
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useTranslation } from "react-i18next";

const API_URL = "https://my.api.mockaroo.com/parcial.json?key=1925cd50";

export const MenuCarousel = () => {
  const { t } = useTranslation();
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="image1.jpg"
          alt={t("firstSlide")}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="image2.jpg"
          alt={t("secondSlide")}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="image3.jpg"
          alt={t("thirdSlide")}
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
      <h2 className="text-center my-4">{t("stores")}</h2>
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
