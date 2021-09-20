import React from "react";
import { Button, Card } from "react-bootstrap";

import "../../style/style.css";

function ProductCard() {
  return (
    <div className="products">
      <Card>
        <Card.Img
          variant="top"
          src="https://m.media-amazon.com/images/I/71Q2REeduXL._AC_UL480_FMwebp_QL65_.jpg"
          alt="naruto"
        />
        <Card.Body>
          <Card.Title>Jines</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ 2,00000</span>
            <div>Fast Delivery</div>
            <div>4 days delivery</div>
          </Card.Subtitle>
          <Button size="sm" variant="danger">
            Remove from Cart
          </Button>
          <Button variant="secondary" size="sm">
            Out of Stock
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
