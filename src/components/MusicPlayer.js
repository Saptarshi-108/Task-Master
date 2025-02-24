import React, { useState, useEffect } from "react";
import { setAccessToken, searchTracks, getTrack } from "../utils/spotify";

const MusicPlayer = () => {
  const [query, setQuery] = useState(""); // State for search query
  const [tracks, setTracks] = useState([]); // State for search results
  const [selectedTrack, setSelectedTrack] = useState(null); // State for selected track
  const [isPlaying, setIsPlaying] = useState(false); // State to track if audio is playing

  // Set your Spotify access token (replace with your token)
  useEffect(() => {
    const accessToken = ""; // Replace with your token
    setAccessToken(accessToken);
  }, []);

  // Handle search
  const handleSearch = async () => {
    if (query.trim() === "") return;
    const results = await searchTracks(query);
    setTracks(results);
  };

  // Handle track selection
  const handleTrackSelect = async (trackId) => {
    const track = await getTrack(trackId);
    setSelectedTrack(track);
    setIsPlaying(true); // Automatically play the selected track
  };

  // Handle play/pause
  const togglePlay = () => {
    const audio = document.getElementById("audio");
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-slate-300 p-4 shadow-md rounded-b-lg ">
      <h2 className="text-lg font-semibold text-gray-700 mb-2 font--1 text-center">
        Music Player
      </h2>

      {/* Search Bar */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a song..."
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 "
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-leckerli"
        >
          Search
        </button>
      </div>

      {/* Search Results */}
      <div className="space-y-2">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="flex items-center justify-between p-2 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"
            onClick={() => handleTrackSelect(track.id)}
          >
            <div className="flex items-center gap-2">
              <img
                src={track.album.images[0]?.url}
                alt={track.name}
                className="w-10 h-10 rounded-lg"
              />
              <div>
                <p className="text-sm font-semibold text-gray-700">
                  {track.name}
                </p>
                <p className="text-xs text-gray-500">
                  {track.artists.map((artist) => artist.name).join(", ")}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleTrackSelect(track.id)}
              className="px-2 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Play
            </button>
          </div>
        ))}
      </div>

      {/* Selected Track Details */}
      {selectedTrack && (
        <div className="mt-4 p-2 border-t border-gray-300">
          <h3 className="text-lg font-semibold">Now Playing:</h3>
          <p className="text-sm">
            {selectedTrack.name} by{" "}
            {selectedTrack.artists.map((artist) => artist.name).join(", ")}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={togglePlay}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
            <audio id="audio" controls>
              <source src={selectedTrack.preview_url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
