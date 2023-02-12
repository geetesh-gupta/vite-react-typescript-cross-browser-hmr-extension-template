import "../enableDevHmr";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Browser from 'webextension-polyfill';

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

Browser
  .devtools
  .panels
  .create('Dev Tools', 'icon-34.png', 'src/entries/devtools/index.html')
  .catch(console.error);