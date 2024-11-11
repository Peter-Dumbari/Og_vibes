import React from "react";
import { Outlet } from "react-router";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";

export default function Layout() {
  return (
    <div className="layout_cont flex flex-col relative">
      <div className="nav">
        <Navbar />
      </div>
      <div className="outlet w-3/4 absolute">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
