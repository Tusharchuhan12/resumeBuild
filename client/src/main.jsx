import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";   // <-- Redux Provider
import store from "./store/store.js";       // <-- Redux store

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>             {/* Redux Wrap */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
