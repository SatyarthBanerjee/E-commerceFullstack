// ProductCountsProvider.js
import React, { createContext, useContext, useState } from 'react';

const ProductCountsContext = createContext();

export function useProductCounts() {
  return useContext(ProductCountsContext);
}

export function ProductCountsProvider({ children }) {
  const pictures = ["Specs1.png", "Specs2.png", "Specs3.png", "Specs4.png", "Specs5.png", "Specs6.png"];
  const [productCounts, setProductCounts] = useState(Array(pictures.length).fill(0));

  return (
    <ProductCountsContext.Provider value={{ productCounts, setProductCounts }}>
      {children}
    </ProductCountsContext.Provider>
  );
}
