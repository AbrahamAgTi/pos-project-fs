import { useContext } from "react";
import { CartContext } from "../context/cart.context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProductsInCart from "../components/ProductsInCart";

function CartPage() {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);

  return (
    <div>
      <h1>Your Cart!</h1>

      {cart.length == 0 ? (
        <>
          You have nothing in your cart!
          <Link to={"/products"}>Add some products!</Link>
        </>
      ) : (
        <>
          <ProductsInCart></ProductsInCart>
          <button onClick={() => navigate(`/checkout`)}>
            {" "}
            Proceed to checkout
          </button>
        </>
      )}
    </div>
  );
}

export default CartPage;
