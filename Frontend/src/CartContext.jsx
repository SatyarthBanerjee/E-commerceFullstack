// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const updateCartItem = (updatedItem) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.prodnam === updatedItem.prodnam ? updatedItem : item
      )
    );
  };

  const removeCartItem = (itemName) => {
    setCart((prevCart) => prevCart.filter((item) => item.prodnam == itemName));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCartItem, removeCartItem, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
