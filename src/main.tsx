// LIBs
import React from "react";
import ReactDOM from "react-dom/client";

// APPLICATION
import { App } from "./app.tsx";

// STYLEs
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
