import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Ép kiểu cho phần tử root (có thể null)
const container = document.getElementById("root");
if (!container) {
  throw new Error("Root container not found. Did you forget to add <div id=\"root\"></div> in index.html?");
}

const root = ReactDOM.createRoot(container as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
