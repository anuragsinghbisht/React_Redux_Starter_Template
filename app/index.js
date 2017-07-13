import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index.store";
import { BrowserRouter } from "react-router-dom";
import Main from "./pages/main.page";
import "bootstrap";

render(
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
