import React from "react";
import ReactDOM from "react-dom";
import App from "./f2.pages/app/App";
import { Provider } from "react-redux";
import { store } from "./f1.main/m2.bll/store";
import { HashRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
