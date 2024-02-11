// LIBs
import React from "react";
import ReactDOM from "react-dom/client";

// CONTEXTs
import { FormScheduleProvider } from "./contexts/form-schedule.tsx";

// APPLICATION
import { App } from "./app.tsx";

// STYLEs
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FormScheduleProvider>
      <App />
    </FormScheduleProvider>
  </React.StrictMode>,
);
