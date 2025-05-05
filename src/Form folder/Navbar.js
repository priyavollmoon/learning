import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Navbar() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 row">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Navbar;
