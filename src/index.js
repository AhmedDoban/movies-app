import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/root.css";
import "./assets/css/style.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
