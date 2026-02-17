import React from "react";

const Sidebar = ({ cart }) => {
  return (
    <div className="sidebar">
      <h3>Cart</h3>
      {cart.length === 0 && <p>No items in cart</p>}
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          {item.name} - ₹{item.price}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
