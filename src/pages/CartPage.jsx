import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CartPage.css";

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, i) => (
              <div className="cart-item" key={i}>
                <img src={item.image} alt={item.title} />
                <div className="cart-item-info">
                  <h4>{item.title}</h4>
                  <p>Rs. {item.price}</p>
                  <button className="remove-btn" onClick={() => removeFromCart(i)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h3>Total: Rs. {totalPrice}</h3>
        </>
      )}
    </div>
  );
};

export default CartPage;
