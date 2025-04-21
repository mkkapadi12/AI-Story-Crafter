import React from "react";
import { Toaster } from "react-hot-toast";
import { GlobalStyle } from "./GlobalStyles";
//rrd
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
//helper

//pages
import Home from "./pages/Home";
import NotFound from "./pages/Error";
import About from "./pages/About";
import Discover from "./pages/Discover";
import StoryGenerator from "./pages/StoryGenerator";
//Auth
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import Logout from "./Auth/Logout";
//components

const App = () => {
  return (
    <>
      <Main>
        <GlobalStyle />

        <Routes>
          {/* Authentication pages */}
          <Route exact path="/login" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/logout" element={<Logout />} />

          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/discover" element={<Discover />} />
          <Route exact path="/create" element={<StoryGenerator />} />
          {/* Error Page */}
          <Route exact path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </Main>
    </>
  );
};

export default App;
