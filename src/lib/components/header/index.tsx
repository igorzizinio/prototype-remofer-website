import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { SearchIcon, ShoppingCartIcon } from "lucide-react";

import { useCart } from "@/lib/contexts/cart";
import { Link } from "react-router";
import { LanguagePicker } from "../language-picker";
import { ModeToggle } from "../mode-toggle";

const Header = () => {
  const { setCartOpen } = useCart();
  return (
    <header className="flex flex-col items-center w-full border-b border-accent">
      <div className="flex w-full bg-gradient-to-r from-blue-700 via-purple-700 to-red-700 items-center justify-center">
        <div className="flex flex-row items-center p-2 justify-between w-full max-w-7xl">
          <span className="text-sm text-white">
            Remofer - A melhor do Brasil
          </span>

          <div className="flex flex-row gap-3">
            <LanguagePicker />
            <ModeToggle />
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-evenly items-center w-full max-w-7xl mx-auto p-4">
        <Link to={"/"}>
          <img src="https://remoferdobrasil.com.br/imagens/logo.png" alt="" />
        </Link>

        <div className="relative flex flex-row w-1/3">
          <Input className="w-full" placeholder="Procure aqui..." />
          <SearchIcon
            size={18}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          />
        </div>

        <div className="flex flex-col gap-8">
          <Button>Entrar</Button>

          <button
            className="flex flex-row justify-center gap-4 items-center text-sm"
            onClick={() => setCartOpen(true)}
          >
            <div className="flex flex-row items-center gap-2">
              <ShoppingCartIcon />
              Carrinho
            </div>

            <div className="flex flex-row items-center gap-2">
              <span>0 items</span>
            </div>
          </button>
        </div>
      </div>

      <div className="flex flex-row justify-evenly items-center w-full max-w-7xl mx-auto p-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/">Início</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/empresa">A empresa</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/">Serviços</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/">Produtos</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/">Cursos online</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/">Treinamentos</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/">Blog</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/">Fórum</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/">Fale conosco</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export { Header };
