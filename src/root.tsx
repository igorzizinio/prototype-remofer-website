import { Outlet } from "react-router";
import { Header } from "./lib/components/header";

export function RootComponent() {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden">
      <Header />
      <Outlet />
    </div>
  );
}
