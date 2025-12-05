import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { Form } from "./form.jsx"; // named import

import App from "./form.jsx"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
