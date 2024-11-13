import React from "react";

const VideoPlayer: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <video
        controls
        autoPlay
        loop
        muted
        className="rounded-lg shadow-lg w-full max-w-4xl"
      >
        <source src="https://coverr.co/videos/posing-with-christmas-bags-qffjkgupge" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
