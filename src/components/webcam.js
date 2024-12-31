import React, { useEffect } from "react";

const Webcam = () => {
  useEffect(() => {
    const startVideo = async () => {
      const video = document.getElementById("video");
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        video.srcObject = stream;
      } catch (error) {
        console.error("Error accessing webcam:", error);
      }
    };

    startVideo();
  }, []);

  return (
    <video id="video" autoPlay style={{ width: "100%", height: "auto" }} />
  );
};

export default Webcam;
