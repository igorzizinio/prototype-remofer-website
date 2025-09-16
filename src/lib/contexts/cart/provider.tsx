import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { TrashIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { CartProviderContext } from "./context";

export function CartProvider({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const [cartOpen, setCartOpen] = useState(false);

  const value = useMemo(() => ({ cartOpen, setCartOpen }), [cartOpen]);

  return (
    <CartProviderContext.Provider value={value}>
      <Sheet open={cartOpen} onOpenChange={setCartOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Carrinho</SheetTitle>
          </SheetHeader>

          <div>
            <ul className="flex flex-col gap-4">
              <li className="flex flex-row justify-between items-center w-full border-b border-border/50 p-4">
                <img
                  className="w-18 h-18 object-cover"
                  src="https://remoferdobrasil.com.br/thumbs2.php?w=450&h=300&imagem=fotos/09122024172336000000276508.jpg"
                  alt=""
                />

                <div className="flex flex-col">
                  <h3 className="font-bold">Item 1</h3>
                  <button className="text-xs text-destructive flex flex-row items-center gap-1">
                    <TrashIcon size={12} />
                    Remover
                  </button>
                </div>

                <div>
                  <Input className="w-16" type="number" value={1} />
                </div>

                <div>
                  <span className="font-bold">R$99,99</span>
                </div>
              </li>
            </ul>

            <div className="flex flex-row justify-between items-center border-t border-border/50 p-4">
              <span className="font-bold">Total</span>
              <span className="font-bold">R$99,99</span>
            </div>

            <div className="flex flex-row p-4">
              <Button>Finalizar compra</Button>
            </div>
          </div>
        </SheetContent>

        {children}
      </Sheet>
    </CartProviderContext.Provider>
  );
}
