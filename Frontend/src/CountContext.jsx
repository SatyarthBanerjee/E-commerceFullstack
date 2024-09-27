import React, { createContext, useContext, useState } from 'react';

// Create a new context
const CountContext = createContext();

// Create a context provider
export function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

// Custom hook to use the count and setCount from the context
export function useCount() {
  return useContext(CountContext);
}
