// src/utils/spotify.js
import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();

// Set the access token
export const setAccessToken = (token) => {
  spotifyApi.setAccessToken(token);
};

// Search for tracks
export const searchTracks = async (query) => {
  try {
    const response = await spotifyApi.searchTracks(query);
    return response.tracks.items;
  } catch (error) {
    console.error("Error searching tracks:", error);
    return [];
  }
};

// Get track details by ID
export const getTrack = async (trackId) => {
  try {
    const response = await spotifyApi.getTrack(trackId);
    return response;
  } catch (error) {
    console.error("Error fetching track:", error);
    return null;
  }
};

// Get the user's access token from localStorage
export const getAccessToken = () => {
  return localStorage.getItem("spotifyAccessToken");
};
