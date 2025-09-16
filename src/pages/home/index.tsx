import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Product } from "@/lib/components/product";

export function HomePage() {
  return (
    <div className="flex flex-col w-full items-center justify-center max-w-full p-4">
      <div className="w-full flex flex-row justify-center">
        <Carousel>
          <CarouselContent className="w-full max-w-7xl h-64 sm:h-80 lg:h-96 rounded-lg">
            <CarouselItem className="items-center justify-center">
              <img
                className="w-full rounded-md"
                src="https://remoferdobrasil.com.br/thumbs.php?w=1300&h=400&imagem=fotos/10082023152251000000276447.jpg"
                alt=""
              />
            </CarouselItem>

            <CarouselItem className="items-center justify-center">
              <img
                className="w-full rounded-md"
                src="https://remoferdobrasil.com.br/thumbs.php?w=1300&h=400&imagem=fotos/08072022164652000000862355.jpg"
                alt=""
              />
            </CarouselItem>

            <CarouselItem className="items-center justify-center">
              <img
                className="w-full rounded-md"
                src="https://remoferdobrasil.com.br/thumbs.php?w=1300&h=400&imagem=fotos/08072022164652000000862355.jpg"
                alt=""
              />
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="p-4 w-full max-w-7xl">
        <h2 className="text-2xl text-left font-bold p-2">Destaques</h2>
        <Separator />
      </div>

      <div className="flex flex-row w-full justify-center flex-wrap max-w-6xl gap-4 ">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
