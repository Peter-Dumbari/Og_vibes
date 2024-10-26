import React from "react";
import { Outlet } from "react-router";
import Navbar from "./ui/navbar";

export default function Layout() {
  return (
    <div className="flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="w-3/4 p-4">
        <Outlet />
      </div>
    </div>
  );
}
