import React, { useEffect, useState } from "react";
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
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