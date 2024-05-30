import React from "react";
import { CartContext } from "../context/cart.context";
import { useContext } from "react";
import Product from "../components/Product";
import { Button } from "react-bootstrap";

function CheckoutPage() {
  const { cart, buyCart } = useContext(CartContext);
  console.log(cart);
  console.log(typeof cart);

  return (
    <>
      Are you sure you want to buy this?
      <div className="product-cart">
          {cart.map((item) => (
            <div key={item._id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="price">{item.price} €</div>
            </div>
          ))}

          <hr />

          <div className="total">
            Total: {cart.reduce((a, b) => a + b.price, 0)} €
          </div>
        </div>
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
