import React, { useState, useEffect } from "react";

const Pomodoro = () => {
  const [time, setTime] = useState(1500); // Default timer set to 25 minutes
  const [isActive, setIsActive] = useState(false);

  // Effect to handle the timer countdown
  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
      setIsActive(false); // Automatically stops when timer reaches 0
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  // Start Timer
  const startTimer = () => setIsActive(true);

  // Pause Timer
  const pauseTimer = () => setIsActive(false);

  // Reset Timer
  const resetTimer = () => {
    setIsActive(false);
    setTime(1500); // Resets to default 25 minutes
  };

  // Set Timer for Short Break (5 minutes)
  const shortBreak = () => {
    setIsActive(false);
    setTime(300); // 5 minutes
  };

  // Set Timer for Long Break (10 minutes)
  const longBreak = () => {
    setIsActive(false);
    setTime(600); // 10 minutes
  };

  // Format Time as MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg text-center">
      <div className="text-4xl font-mono mb-6">{formatTime(time)}</div>
      <div className="space-x-3">
        <button
          onClick={startTimer}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Start
        </button>
        <button
          onClick={pauseTimer}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Pause
        </button>
        <button
          onClick={resetTimer}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Reset
        </button>
      </div>
      <div className="mt-6 space-x-3">
        <button
          onClick={shortBreak}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Short Break (5 min)
        </button>
        <button
          onClick={longBreak}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Long Break (10 min)
        </button>
      </div>
    </div>
  );
};

export default Pomodoro;
