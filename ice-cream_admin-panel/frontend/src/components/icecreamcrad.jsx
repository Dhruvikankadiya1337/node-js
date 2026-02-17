import React from "react";

const IceCreamCard = ({ item, handleAddToCart }) => {
  return (
    <div className="icecream-card">
      <img src={item.img} alt={item.name} />
      <h4>{item.name}</h4>
      <p>₹{item.price}</p>
      <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
    </div>
  );
};

export default IceCreamCard;
