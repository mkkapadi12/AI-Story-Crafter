import React from "react";

import { GlobalStyle } from "./GlobalStyles";
//rrd
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
//helper

//pages
import Home from "./pages/Home";
//components
import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <Main>
        <GlobalStyle />
        {/* <Intro /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </Main>
    </>
  );
};

export default App;
