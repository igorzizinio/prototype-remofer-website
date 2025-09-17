import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { ShoppingBasketIcon, ShoppingCartIcon } from "lucide-react";
import { useParams } from "react-router";

const ProductPage = () => {
  const { id } = useParams();
  const product = {
    id,
    name: "Sample Product",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: [
      "https://remoferdobrasil.com.br/thumbs2.php?w=450&h=300&imagem=fotos/0912202416370400000085472.jpg",
    ],
    price: 99.99,
  };

  return (
    <div className="flex flex-col w-full items-center justify-center max-w-full p-4 gap-8">
      <div className="p-4 w-full max-w-7xl flex flex-col gap-2">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          {product.name}
        </h2>

        <div>Home &gt; Products &gt; {product.name}</div>
      </div>

      <div className="flex flex-row gap-8 w-full max-w-7xl items-center justify-center">
        <div className="flex flex-col gap-2">
          <Carousel>
            <CarouselContent>
              {product.images.map((src) => (
                <CarouselItem key={src} className="items-center justify-center">
                  <img width={512} key={src} src={src} alt="" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Por: R$ {product.price.toFixed(2).replace(".", ",")}
          </h3>
          <span className="text-sm text-primary">
            1x de R$ {product.price.toFixed(2).replace(".", ",")} sem juros
          </span>

          <div className="flex flex-row gap-2 items-center justify-center">
            <Button variant={"outline"}>
              <ShoppingCartIcon />
              Adicionar ao carrinho
            </Button>

            <Button>
              <ShoppingBasketIcon />
              Comprar agora
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full max-w-7xl justify-center">
        <div className="p-4 w-full max-w-7xl flex flex-col gap-2">
          <h3 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            Descrição do produto
          </h3>
        </div>

        <div className="flex flex-col gap-4 p-4">
          <p>{product.description}</p>
        </div>

        <Separator className="mt-12" />
      </div>
    </div>
  );
};

export default ProductPage;
