import React from "react";
import { GlobalStyle } from "./GlobalStyles";
//rrd
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
//helper

//pages
import Home from "./pages/Home";
import NotFound from "./pages/Error";
import Gallery from "./pages/Discover";
import About from "./pages/About";
import Discover from "./pages/Discover";
import StoryGenerator from "./pages/StoryGenerator";
//components

const App = () => {
  return (
    <>
      <Main>
        <GlobalStyle />
        {/* <Intro /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/discover" element={<Discover />} />
          <Route exact path="/create" element={<StoryGenerator />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
};

export default App;
