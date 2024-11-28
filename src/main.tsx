import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/router";
import "@fontsource/ubuntu/700.css";
import "@fontsource/ubuntu/400.css";
import "./styles/styles.css";

const root = document.querySelector(".root");

if (!root) {
  throw new Error("Root does not exist");
}

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
