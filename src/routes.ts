import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/home";
import { RootComponent } from "./root";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootComponent,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
]);

export { router };
