import React from "react";
import { Button, Card, Form } from "react-bootstrap";

import "../../style/style.css";

function Filter() {
  return (
    <div>
      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Header>Filter Products</Card.Header>
        <Card.Body>
          <Card.Title>Price</Card.Title>
          <Form.Check
            inline
            label="Price (High to Low)"
            name="group1"
            type="radio"
            id={`inline-1`}
            checked={false}
          />
          <Card.Title>Availability</Card.Title>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button>Reset</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Filter;
