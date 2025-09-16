import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import { CartProvider } from "./lib/contexts/cart/provider";
import { ThemeProvider } from "./lib/contexts/theme/provider";
import { router } from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ThemeProvider>
  </StrictMode>
);
