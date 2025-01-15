// src/auth/AuthRedirect.js
import React, { useEffect } from "react";

const AuthRedirect = () => {
  useEffect(() => {
    const clientId = "<Client ID>"; // Your Client ID
    const redirectUri = "http://localhost:3000/callback"; // Your Redirect URI
    const scopes = "user-read-private user-read-email"; // Required scopes

    // Construct the authorization URL
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${encodeURIComponent(
      scopes
    )}`;

    // Redirect the user to Spotify's authorization page
    window.location.href = authUrl;
  }, []);

  return <div>Redirecting to Spotify...</div>;
};

export default AuthRedirect;
