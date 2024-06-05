import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import App from "./App.jsx";
import AuthProvider from "./context/auth.context.jsx";
import themes from "./config/theme.js";
import Toast from "./components/Toast/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={themes}>
    <AuthProvider>
      <React.StrictMode>
        <App />
        <Toast />
      </React.StrictMode>
    </AuthProvider>
  </ThemeProvider>
);
