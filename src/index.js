import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, BrowserHistory} from "react-router-dom";
import App from "./App";
import "./css/index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={BrowserHistory} basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
