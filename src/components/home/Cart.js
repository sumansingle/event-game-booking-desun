import React, { useContext } from "react";
import { CartContext } from "./Create.context";
import { useNavigate } from "react-router-dom";
import './Cart.css';

function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  const handleClick = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <img src={item.img} alt={item.id} style={{ width: "100px", height: "50px" }}/>
              <p>Price: ${item.price}</p>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          ))}
          <button className="checkout-button" onClick={handleClick}>Checkout</button>
        </>
      )}
    </div>
  );
}

export default CartPage;
