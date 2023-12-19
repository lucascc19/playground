import { App } from "./App.tsx";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
