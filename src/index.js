import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { config } from "./config/config";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ClerkProvider publishableKey={config.publishKey}>
      <App />
    </ClerkProvider>
  </BrowserRouter>
);
