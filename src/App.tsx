import { Route, Routes, BrowserRouter } from "react-router";
import { ErrorBoundary } from "react-error-boundary";

import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
