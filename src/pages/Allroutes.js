import React from "react";
import { Route, Routes } from "react-router-dom";
import NavbarTop from "../components/Navbar";
import Home from "./Home";

const Allroutes = () => {
  return (
    <>
      <NavbarTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
};

export default Allroutes;
