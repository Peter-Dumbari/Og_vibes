import React from "react";
import { Routes, Route } from "react-router";
import {
  Home,
  Artist,
  Music,
  Event,
  Blog,
  BlogDetail,
  Video,
} from "./pages/index.tsx";
import Layout from "./components/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/music" element={<Music />} />
        <Route path="/media/video" element={<Video />} />
        <Route path="/event" element={<Event />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blog_detail" element={<BlogDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
