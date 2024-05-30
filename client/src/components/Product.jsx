import React from "react";
import { Card, Badge, Container, Row, Col, Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/cart.context";

function Product({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      {product && (
        <Container className="mt-4">
          <Row className="justify-content-center">
            <Col md={4}>
              <Card className="shadow-sm">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  alt={`${product.name} image`}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    ${product.price}
                  </Card.Subtitle>
                  <Card.Text>{product.description}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <Badge pill bg={product.inStock > 0 ? "success" : "danger"}>
                      {product.inStock > 0
                        ? `In Stock: ${product.inStock}`
                        : "Out of Stock"}
                    </Badge>
                    <Button
                      onClick={() => addToCart(product)}
                      variant="primary"
                    >
                      Add to cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default Product;
