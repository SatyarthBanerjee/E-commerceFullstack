import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CountProvider } from "./CountContext";
import { ProductCountsProvider } from "./ProductCountsProvider";
import { WishProvider } from "./WishContext";
import { CartProvider } from "./CartContext";
import { AuthProvider } from "./AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <WishProvider>
          <ProductCountsProvider>
            <CountProvider>
              <App />
            </CountProvider>
          </ProductCountsProvider>
        </WishProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
