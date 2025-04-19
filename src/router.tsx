import { Route, Routes, BrowserRouter } from "react-router";

import { HomePage, LoginPage, PokemonPage, NotFound } from "@/frontend/pages";
import DefaultLayout from "@/frontend/components/layouts/default-layout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/pokemon" element={<PokemonPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
