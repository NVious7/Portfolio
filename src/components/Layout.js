import React from "react";
import { Routes, Route } from "react-router-dom"

// Components
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";

function Layout() {
  return (
    <Routes>
      <Route path="/" exact={true} element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
};

export default Layout;