import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Important: this includes Tailwind v4.1 styles
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./helpers/theme";
import { AuthProvider } from "./Context/AuthContext";
import { StoryProvider } from "./Context/StoryContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StoryProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </StoryProvider>
    </ThemeProvider>
  </React.StrictMode>
);
