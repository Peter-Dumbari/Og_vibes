import React from "react";
import { Routes, Route } from "react-router";
import { Home } from "./pages";
import Layout from "./components/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
