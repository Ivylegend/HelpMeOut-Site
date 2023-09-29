import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../src/pages/Landing";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import VideoPage from "./pages/VideoPage";
import ReadyVideos from "./pages/ReadyVideos";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/video" element={<VideoPage />} />
          <Route path="/file/video_id" element={<ReadyVideos />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
