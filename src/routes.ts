import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/home";
import { RootComponent } from "./root";

const ProductPage = lazy(() => import("./pages/product"));

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootComponent,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "product/:id",
        Component: ProductPage,
      },
    ],
  },
]);

export { router };
