import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cart.context";

function ProductInCart() {
  const { cart } = useContext(CartContext);

  return (
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
        Total: {cart.reduce((a, b) => a + b.price, 0).toFixed(2)} €
      </div>
    </div>
  );
}

export default ProductInCart;
