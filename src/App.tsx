import React from "react";
import { Routes, Route } from "react-router";
import { Home } from "./pages";
import Layout from "./components/layout";
import Artist from "./pages/artist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/artist" element={<Artist />} />
      </Route>
    </Routes>
  );
}

export default App;
