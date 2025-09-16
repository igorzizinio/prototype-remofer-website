import { useContext } from "react";
import { CartProviderContext } from "./context";

export const useCart = () => {
  const context = useContext(CartProviderContext);
  if (context === undefined)
    throw new Error("useCart must be used within a CartProvider");
  return context;
};
