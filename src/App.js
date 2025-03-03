import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pomodoro from "./components/pomodoro";
import MusicPlayer from "./components/MusicPlayer";
import Todo from "./components/todo";
import FullScreenToggle from "./FullScreenToggle";
import "./App.css";

const App = () => {
  // Corrected video list
  const vidList = [
    "video1.mp4",
    "video2.mp4",
    "video3.mp4",
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
  ];
  const [vidSrc, setVidSrc] = useState(vidList[0]);

  // Corrected function to change video
  const changeVid = () => {
    const randomVid = vidList[Math.floor(Math.random() * vidList.length)];
    setVidSrc(randomVid);
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-100 p-2 relative">
              {/* Background Video or Image*/}
              {vidSrc.endsWith(".mp4") ? (
                <video
                  key={vidSrc}
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
                  <source src={vidSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={vidSrc}
                  alt="Background"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 0,
                  }}
                />
              )}

              {/* Change Video Button */}
              <button
                onClick={changeVid}
                className="absolute top-4 right-4 bg-zinc-300 text-white px-4 py-2 rounded-lg hover:bg-zinc-"
                style={{ zIndex: 20 }}
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB90lEQVR4nO2ZO0rEUBSGP4U5YqMLcOwtdBF27sDSLVi7BhuXYC/IgDM2dvYWLsFCGAsbGxH0ykAGQphHbnLuI5nzw2WaOyHfl/s4yQWLxWLRjwD3gCvaBNhhQ+HdJkmQJfAbIUHWwPdagtSE76UE8YTvlQRpCN8LCdISvtMSBBitAXsADoBhAbmq76i4Zm/gXQE+z2GN/p2QIDXhmwjIXoJ4wM/n9rCAf/T4X5YSRGnB6+TCKJHhs5IgieCzkCCJ4ZNKkEzgk0iQzOCjSxgpVXja/Vxxb8HjlAoc7X7zZgJST4FJzQpPu1+0KTDIdBEcx9wJBplJiAqfm4Qk8LlIKMPvAS8Nr/MBnBDpNdgptfJr8ez3qeX1pl0aCePSk98CbpWu2yriORJ8KrxlT36Wa0Wxnfskdqk8sjr1UfQc+M1RQF0JvhVeGf4U+FaGVxWguTBW9/lj4DMAvLoADQlV+NmIeQsEH0RAGwlV+H3gNSB8MAFNJFThd4HnwPBBBfhIqMJvA3cR4IMLqCNh0YvNTST4KAJWbZGLjryuIlSW0QUskrAI/gL487j5JpVlMgHrcgb8eN58rwR8Nbj5pqfNWQpwiVo2cSYAGwHOpgC2BjhbBLFdwNk2iNUBzgohNqsSnCbYAlsdjWnnCHiPCN/qcNRisVjoa/4BsKo5LvKKZRwAAAAASUVORK5CYII="
                  alt="dice-cubes"
                  className="h-5 w-5 "
                />
              </button>
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
                <div className="bg-white p-2 rounded-lg bg-gray-600 bg-opacity-70">
                  <Pomodoro />
                  {/* Todo List */}
                  <div
                    className=" bg-slate-300 p-2 bg-opacity-70"
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
