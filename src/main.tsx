import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import "./styles/styles.css";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/700.css";

const root = document.querySelector(".root");

if (!root) {
  throw new Error("Root does not exist");
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
