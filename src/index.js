import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./router";
import reportWebVitals from "./reportWebVitals";
import "./css/color/red.css";
import "./css/elements.css";
import "./css/responsive.css";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
