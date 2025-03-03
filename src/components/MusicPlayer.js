import React from "react";

const MusicPlayer = () => {
  return (
    <div className="bg-slate-700 p-2 shadow-md rounded-b-lg bg-opacity-50">
      <h2 className="text-2xl font-semibold mt-1 pb-2 text-center font-leckerli text-white">
        Music
      </h2>

      {/* Spotify Embed Player */}
      <div
        className="flex justify-center mb-0"
        style={{ paddingBottom: "5px" }}
      >
        <iframe
          style={{ borderRadius: "12px", display: "grid" }}
          src="https://open.spotify.com/embed/playlist/4ssbdKJUpahZGXTB4x8Teh?utm_source=generator"
          width="150%"
          height="100"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <div className="bg-slate-900 p-0 font--1 bg-opacity-40 text-white rounded-lg text-center ">
        Made with ❤️ by Saptarshi.
      </div>
    </div>
  );
};

export default MusicPlayer;
