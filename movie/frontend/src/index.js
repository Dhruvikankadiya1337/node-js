import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/reset.css";
import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/sidebar.css";
import "./styles/grid.css";
import "./styles/card.css";
import "./styles/details.css";
import "./styles/forms.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
