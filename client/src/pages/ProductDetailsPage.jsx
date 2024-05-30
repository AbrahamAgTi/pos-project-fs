import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { Card, Badge, Container, Row, Col, Button } from "react-bootstrap";

const API_URL = "http://localhost:5005";

function ProductDetailsPage() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const { getToken } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${API_URL}/products/${productId}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
      .then((res) => {
        console.log("you´re here");
        setProduct(res.data);
      });
  }, [productId]);

  if (!productId) {
    return <div>Product not found</div>;
  }

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
                  alt={`${name} image`}
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
                    <Button variant="primary">Buy Now</Button>
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

export default ProductDetailsPage;
