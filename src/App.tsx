import "./global.css";

import { RouterProvider } from "react-router-dom";
import { Router } from "./Router";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="@pizza-shop-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | Pizza Shop" />
        <Toaster richColors />
        <RouterProvider router={Router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}
