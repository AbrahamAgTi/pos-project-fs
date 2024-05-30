import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { CartContext } from "../context/cart.context";
import { Card, Badge, Container, Row, Col, Button } from "react-bootstrap";
import Product from "../components/Product";

const API_URL = "http://localhost:5005";

function ProductDetailsPage() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const { getToken } = useContext(AuthContext);
  const { addToCart } = useContext(CartContext);

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

  return <>{product && <Product product={product}></Product>}</>;
}

export default ProductDetailsPage;
