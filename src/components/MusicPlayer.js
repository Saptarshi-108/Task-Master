import React, { useState, useEffect } from "react";

const PLAYLIST_ID = "4ssbdKJUpahZGXTB4x8Teh"; // Task-Master playlist ID
const SPOTIFY_API_URL = `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}`;
const EMBED_URL = `https://open.spotify.com/embed/playlist/${PLAYLIST_ID}?utm_source=generator`;
const ACCESS_TOKEN =
  "BQCxCMltlk01h7agA58QIQ7pNtvBUkOrz6ZdhGP63BkD4FvQ8AKXhhWsz-zCBxERaq03T4bMu7xGfsphBLymNbrqlvRJsskglElHetx0EbQXAhpTbx4ffuqpN6y-VzpMc6ErWcmqUro"; // Replace with a valid token

const MusicPlayer = () => {
  const [tracks, setTracks] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  // Fetch playlist details
  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch(SPOTIFY_API_URL, {
          headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
        });
        if (!response.ok) throw new Error("Failed to fetch playlist");

        const data = await response.json();
        const songList = data.tracks.items.map((item) => ({
          name: item.track.name,
          artist: item.track.artists.map((artist) => artist.name).join(", "),
          preview_url: item.track.preview_url,
        }));

        setTracks(songList);
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };

    fetchPlaylist();
  }, []);

  // Handle Play/Pause
  const handlePlayPause = () => {
    const audio = document.getElementById("audio-player");
    if (audio) {
      audio.paused ? audio.play() : audio.pause();
    }
  };

  // Play Next Song
  const playNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  // Play Previous Song
  const playPrevious = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  return (
    <div className="p-2 bg-slate-500 text-white rounded-lg overflow-y-auto bg-opacity-60">
      <h2 className="text-xl font-bold mb-2 font-leckerli text-center ">
        Music
      </h2>

      {/* Spotify Embed Player */}
      <iframe
        style={{ borderRadius: "12px" }}
        src={EMBED_URL}
        width="100%"
        height="100"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>

      {/* Song List */}
      <ul className="mt-4">
        {tracks.map((track, index) => (
          <li
            key={index}
            className={`p-2 ${
              index === currentTrackIndex ? "bg-gray-300" : ""
            }`}
            onClick={() => setCurrentTrackIndex(index)}
          >
            {track.name} - {track.artist}
          </li>
        ))}
      </ul>

      {/* Audio Controls */}
      {tracks.length > 0 && tracks[currentTrackIndex].preview_url && (
        <div className="mt-4">
          <audio
            id="audio-player"
            src={tracks[currentTrackIndex].preview_url}
          />
          <div className="flex gap-2">
            <button onClick={playPrevious}>Prev</button>
            <button onClick={handlePlayPause}>Play/Pause</button>
            <button onClick={playNext}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
