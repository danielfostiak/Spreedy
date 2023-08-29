import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>,
  document.getElementById("root")
);
