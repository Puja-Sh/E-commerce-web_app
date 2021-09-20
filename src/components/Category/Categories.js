import React from "react";
import { Card, CardDeck } from "react-bootstrap";

import "../../style/style.css";

function Categories() {
  return (
    <CardDeck className="categories-list">
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/b85eb6be-0223-4cca-bc81-56ca3089daf11597841355970-Content-westernwear-Essentials-Women-s-Trousers--copy--.jpg"
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/b85eb6be-0223-4cca-bc81-56ca3089daf11597841355970-Content-westernwear-Essentials-Women-s-Trousers--copy--.jpg"
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/b85eb6be-0223-4cca-bc81-56ca3089daf11597841355970-Content-westernwear-Essentials-Women-s-Trousers--copy--.jpg"
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/b85eb6be-0223-4cca-bc81-56ca3089daf11597841355970-Content-westernwear-Essentials-Women-s-Trousers--copy--.jpg"
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
        </Card.Body>
      </Card>
    </CardDeck>
  );
}

export default Categories;
