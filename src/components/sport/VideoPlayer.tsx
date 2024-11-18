import React from "react";

const VideoPlayer: React.FC = () => {
  return (
    <video width="320" height="240" controls preload="none">
      <source src="https://www.youtube.com/watch?v=PiPyko0Fo-0" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
