import React from "react";
import { Route, Routes } from "react-router-dom";
import NavbarTop from "../components/Navbar";
import NavbarDown from "../components/NavbarDown";
import AppOnly from "./AppOnly";
import Home from "./Home";
import NewArrivals from "./NewArrivals";
import Superdeal from "./Superdeals";

const Allroutes = () => {
  return (
    <>
      <NavbarTop />
      <NavbarDown/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/superdeal" element={<Superdeal/>}/>
        <Route path="/apponly" element={<AppOnly/>}/>
        <Route path="/newarrivals" element={<NewArrivals/>}/>
      </Routes>
    </>
  );
};

export default Allroutes;
