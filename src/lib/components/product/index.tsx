import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { ShoppingCartIcon } from "lucide-react";
import { Link } from "react-router";

const Product = () => {
  return (
    <Card className="transition-transform">
      <CardContent>
        <Link to="/product/1">
          <img
            width={194}
            height={194}
            src="https://remoferdobrasil.com.br/thumbs2.php?w=450&h=300&imagem=fotos/09122024172336000000276508.jpg"
            alt=""
          />
        </Link>
      </CardContent>

      <Link to="/product/1">
        <CardTitle className="px-8">Produto</CardTitle>
      </Link>

      <CardFooter className="flex flex-row justify-between">
        <span className="text-sm">$99,99</span>

        <Button>
          <ShoppingCartIcon />
          Adicionar
        </Button>
      </CardFooter>
    </Card>
  );
};

export { Product };
