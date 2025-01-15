// src/auth/CallbackHandler.js
import React, { useEffect } from "react";
import { setAccessToken } from "../utils/spotify";

const CallbackHandler = () => {
  useEffect(() => {
    const clientId = "<ClientID>"; // Your Client ID
    const clientSecret = "<Client Pswrd>"; // Your Client Secret
    const redirectUri = "http://localhost:3000/callback"; // Your Redirect URI

    // Extract the authorization code from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const authorizationCode = urlParams.get("code");

    if (authorizationCode) {
      const tokenUrl = "https://accounts.spotify.com/api/token";

      const payload = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code: authorizationCode,
          redirect_uri: redirectUri,
        }),
      };

      // Exchange the authorization code for an access token
      fetch(tokenUrl, payload)
        .then((response) => response.json())
        .then((data) => {
          const accessToken = data.access_token;
          console.log("Access Token:", accessToken);

          // Save the access token (e.g., in localStorage or state)
          localStorage.setItem("spotifyAccessToken", accessToken);

          // Set the access token in your Spotify utility
          setAccessToken(accessToken);

          // Redirect the user to the main app (e.g., Music Player)
          window.location.href = "/";
        })
        .catch((error) => console.error("Error fetching access token:", error));
    }
  }, []);

  return <div>Handling Spotify callback...</div>;
};

export default CallbackHandler;
