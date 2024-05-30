import React from "react";
import { CartContext } from "../context/cart.context";
import { useContext } from "react";
import Product from "../components/Product";
import { Button } from "react-bootstrap";
import ProductsInCart from "../components/ProductsInCart";

function CheckoutPage() {
  const { cart, buyCart } = useContext(CartContext);
  console.log(cart);
  console.log(typeof cart);

  return (
    <>
      Are you sure you want to buy this?
      <ProductsInCart></ProductsInCart>
      <Button onClick={() => buyCart()} variant="primary">
        Buy
      </Button>
    </>
  );
}

// when you buy

/*



*/

export default CheckoutPage;
