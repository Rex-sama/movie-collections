import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "../node_modules/react-modal-video/css/modal-video.css";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
