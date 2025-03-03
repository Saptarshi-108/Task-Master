import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pomodoro from "./components/pomodoro";
import MusicPlayer from "./components/MusicPlayer";
import Todo from "./components/todo";
import FullScreenToggle from "./FullScreenToggle";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-100 p-2 relative">
              {/* Background Video */}
              <video
                autoPlay
                loop
                muted
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 0,
                }}
              >
                <source
                  src="4K No Copyright Videos _ Motion Graphics _ Background _ Animation _ Video Clips__Jazz_Rain_LoFi.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              {/* Header */}
              <h1
                className="text-6xl font-extrabold font-serif font--2 mb-2"
                style={{
                  position: "relative",
                  zIndex: 10,
                  textAlign: "center",
                }}
              >
                TaskMaster
              </h1>

              {/* Features Section */}
              <div
                className="flex flex-col gap-2 ml-2"
                style={{ position: "relative", zIndex: 10, width: "25%" }}
              >
                {/* Pomodoro Timer */}
                <div className="bg-white p-2 rounded-lg">
                  <Pomodoro />
                  {/* Todo List */}
                  <div
                    className=" bg-slate-300 p-2 "
                    style={{ maxHeight: "150px", overflowY: "auto" }}
                  >
                    <Todo />
                  </div>
                  {/* Music Player */}
                  <MusicPlayer />
                </div>
              </div>

              {/* Full Screen Toggle */}
              <FullScreenToggle />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
