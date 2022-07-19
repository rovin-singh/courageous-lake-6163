import React from "react";
import { Route, Routes } from "react-router-dom";
import NavbarTop from "../components/Navbar";
import NavbarDown from "../components/NavbarDown";
import Home from "./Home";

const Allroutes = () => {
  return (
    <>
      <NavbarTop />
      <NavbarDown/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
};

export default Allroutes;
