import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { App } from "./components/App";
import "./index.css";

// basename = "/car-rental-app";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/car-rental-app">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
