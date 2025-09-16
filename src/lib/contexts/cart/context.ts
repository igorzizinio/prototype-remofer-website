import { createContext } from "react";

export const CartProviderContext = createContext<
  | {
      cartOpen: boolean;
      setCartOpen: (open: boolean) => void;
    }
  | undefined
>(undefined);
