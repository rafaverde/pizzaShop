import "./global.css";

import { RouterProvider } from "react-router-dom";
import { Router } from "./Router";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Pizza Shop" />
      <RouterProvider router={Router} />
    </HelmetProvider>
  );
}
