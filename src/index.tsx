import React from "react";
import ReactDOM from "react-dom/client";

import { Provider as MOBXProvider } from "mobx-react";
import * as viewStores from "./stores/views";
import * as services from "./stores/services";

import App from "./app/App";

window.addEventListener("error", (err) => {
  console.warn(`Exception ${err.type}`); // here we can log uncaught exceptions
});

window.addEventListener("unhandledrejection", (err) => {
  console.warn(`Unhandled ${err.type}`); // here we can log unhandled promise rejections
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

// removed StrictMode on purpose
root.render(
  <MOBXProvider {...viewStores} {...services}>
    <App />
  </MOBXProvider>,
);
