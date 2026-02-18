import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const placeOrder = () => {
    setOrders((prev) => [...prev, ...cart]);
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, orders, placeOrder }}>
      {children}
    </CartContext.Provider>
  );
};