import React from "react";
import ReactDOM from "react-dom";
import createStore from "./store";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// serviceWorker.unregister();
