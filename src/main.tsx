import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/styles/layout.css";
import "@/styles/reset.css";
import "@/styles/theme.css";
import "@/styles/typography.css";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
