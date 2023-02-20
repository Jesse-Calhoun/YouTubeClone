// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState } from 'react';


// Pages Imports
// import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import VideoPage from "./pages/VideoPage/VideoPage"

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
// import PrivateRoute from "./utils/PrivateRoute";

function App() {

  const [selectedVideo, setSelectedVideo] = useState({})
  const [videoPageUrl, setVideoPageUrl] = useState('')
  if (selectedVideo){
    // setVideoPageUrl()`/watch/${selectedVideo.id.videoId}`
    
    return (
      <div>
      <Navbar />
      <Routes>
        {/* <Route
          path="/"
          element={
            <PrivateRoute>
            <HomePage />             
            </PrivateRoute>
          }
        /> */}
        <Route path='/' element={<SearchPage setSelectedVideo={setSelectedVideo} selectedVideo={selectedVideo} videoPageUrl={videoPageUrl} setVideoPageUrl={setVideoPageUrl}/>}/>
        <Route path={videoPageUrl} element={<VideoPage selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} />}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
}

export default App;
