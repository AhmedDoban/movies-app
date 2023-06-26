import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/root.css";
import "./assets/css/style.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
