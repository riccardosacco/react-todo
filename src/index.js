import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.scss";

import State from "./context/state";

ReactDOM.render(
  <React.StrictMode>
    <State>
      <App />
    </State>
  </React.StrictMode>,
  document.getElementById("root")
);
