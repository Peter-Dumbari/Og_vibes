import React from "react";
import { Outlet } from "react-router";
import Navbar from "./ui/navbar";

export default function Layout() {
  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-200 p-4">
        <Navbar />
      </div>
      <div className="w-3/4 p-4">
        <Outlet />
      </div>
    </div>
  );
}
