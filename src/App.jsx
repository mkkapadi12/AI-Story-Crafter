import React from "react";
import { GlobalStyle } from "./GlobalStyles";
//rrd
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
//helper

//pages
import Home from "./pages/Home";
import NotFound from "./pages/Error";
//components

const App = () => {
  return (
    <>
      <Main>
        <GlobalStyle />
        {/* <Intro /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
};

export default App;
