import React, { useEffect, useState } from "react";
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

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