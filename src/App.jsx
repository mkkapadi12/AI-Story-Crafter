import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyles";
//rrd
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
//helper
import { theme } from "./helpers/theme";
//pages
import Home from "./pages/Home";
//components
import Intro from "./components/intro";
import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Main>
          <GlobalStyle />
          {/* <Intro /> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="*" element={<Error />} />
          </Routes>
        </Main>
      </ThemeProvider>
    </>
  );
};

export default App;
