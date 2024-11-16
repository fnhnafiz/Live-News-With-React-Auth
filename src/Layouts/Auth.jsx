import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div className="container mx-auto my-8 bg-[#F3F3F3]">
      <header>
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
    </div>
  );
};

export default Auth;
