import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch
import Pomodoro from "./components/pomodoro";
import MusicPlayer from "./components/MusicPlayer";
import Todo from "./components/todo";
import AuthRedirect from "./auth/authredirect"; // Ensure this matches the file name
import CallbackHandler from "./auth/callbackhandler"; // Ensure this matches the file name
import { setAccessToken, getAccessToken } from "./utils/spotify";
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
                  src="cinematography_by_studio_ghibli_1080p.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              {/* Header */}
              <h1
                className="text-4xl font-bold outline-text font--1 mb-2"
                style={{
                  position: "relative",
                  zIndex: 10,
                  textAlign: "center",
                }}
              >
                Task Master
              </h1>

              {/* Features Section */}
              <div
                className="flex flex-col gap-2 ml-2"
                style={{ position: "relative", zIndex: 10, width: "25%" }}
              >
                {/* Pomodoro Timer */}
                <div className="bg-white p-2 rounded-lg shadow-md">
                  <h2 className="text-lg font-semibold text-gray-700 mb-1">
                    Pomodoro Timer
                  </h2>
                  <Pomodoro />
                </div>

                {/* Todo List */}
                <div
                  className="bg-white p-2 rounded-lg shadow-md"
                  style={{ maxHeight: "200px", overflowY: "auto" }}
                >
                  <h2 className="text-lg font-semibold text-gray-700 mb-1">
                    Todo List
                  </h2>
                  <Todo />
                </div>

                {/* Music Player */}
                <div className="bg-white p-2 rounded-lg shadow-md">
                  <h2 className="text-lg font-semibold text-gray-700 mb-1">
                    Music Player
                  </h2>
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
