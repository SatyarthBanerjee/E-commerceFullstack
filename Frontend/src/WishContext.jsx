// WishContext.js
import React, { createContext, useContext, useState } from 'react';

const WishContext = createContext();

export function useWish() {
  return useContext(WishContext);
}

export function WishProvider({ children }) {
  const [wish, setWish] = useState([]);

  return (
    <WishContext.Provider value={{ wish, setWish }}>
      {children}
    </WishContext.Provider>
  );
}
