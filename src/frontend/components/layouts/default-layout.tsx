import { Outlet } from "react-router";
import Header from "./header";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="container mx-auto min-h-[calc(100vh-64px)] w-full p-4">
        <Outlet />
      </main>
    </>
  );
}
