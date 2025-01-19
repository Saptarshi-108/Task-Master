// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pomodoro from "./components/pomodoro";
import MusicPlayer from "./components/MusicPlayer";
import Todo from "./components/todo";
import AuthRedirect from "./auth/authredirect";
import CallbackHandler from "./auth/callbackhandler";
import { setAccessToken, getAccessToken } from "./utils/spotify";
import FullScreenToggle from "./FullScreenToggle";
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is authenticated (has an access token)
  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      setAccessToken(token);
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* Home Page */}
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
                    style={{ maxHeight: "200px", overflowY: "auto" }}
                  >
                    <Todo />
                  </div>
                  {/* Music Player */}
                  {isAuthenticated ? (
                    <MusicPlayer />
                  ) : (
                    <button
                      onClick={() => (window.location.href = "/auth")}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                      Login with Spotify
                    </button>
                  )}
                </div>
              </div>

              {/* Full Screen Toggle */}
              <FullScreenToggle />
            </div>
          }
        />

        {/* Redirect to Spotify Authorization Page */}
        <Route path="/auth" element={<AuthRedirect />} />

        {/* Handle Spotify Callback */}
        <Route path="/callback" element={<CallbackHandler />} />
      </Routes>
    </Router>
  );
};

export default App;
