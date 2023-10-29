import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import { Grit } from "./Grit";
import { Fruit } from "./Fruit";

const Landing = () => {
  return (
    <BrowserRouter>
      <Nav />
      <br /> <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grit" element={<Grit />} />
        <Route path="/fruit" element={<Fruit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Landing;
