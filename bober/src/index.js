import React from "react";
import ReactDOM from "react-dom";

import "semantic-ui-css/semantic.min.css";
import App from "./App";
import "./components/Table/Table.css";
import "./PageStyles/Reset.css";
import "./PageStyles/NavBar.css";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store/configureStore";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
