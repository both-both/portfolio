import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router";
import { theme } from "./style/Theme.ts";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/Global.ts";
import { LanguageProvider } from "./context/LanguageProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <LanguageProvider>
          <GlobalStyle />
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
