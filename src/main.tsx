import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.scss";

// React root to render app inside DOM element
const root = ReactDOM.createRoot(document.getElementById("root") as Element);

// App entrypoint
root.render(<App />);
