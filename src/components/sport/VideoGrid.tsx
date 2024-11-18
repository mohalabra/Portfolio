"use client";
import { Fragment, useState } from "react";
import ReactPlayer from "react-player";
import { FaPlayCircle } from "react-icons/fa";
import { TbXboxX } from "react-icons/tb";

export interface Video {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
  url: string;
}

export const videos: Video[] = [
  {
    id: "1",
    title: "Agadir - National Moroccan Competition",
    date: "24 Mars 2018",
    thumbnail: "/sports/vid1.jpeg",
    url: "https://youtu.be/DMG95m-rbow",
  },
  {
    id: "2",
    title: "UAE - International Competition (Fight 1)",
    date: "08 Nov 2021",
    thumbnail: "/sports/vid2.webp",
    url: "https://youtu.be/V50O7O8yKY8",
  },
  {
    id: "3",
    title: "UAE - International Competition (Fight 2)",
    date: "08 Nov 2021",
    thumbnail: "/sports/vid3.png",
    url: "https://youtu.be/r5T9CP05xrE",
  },
  {
    id: "4",
    title: "Casa Blanca - National Selection",
    date: "25 Sep 2022",
    thumbnail: "/sports/vid4.jpg",
    url: "https://youtu.be/6BOKQn3Wlc8",
  },
  {
    id: "5",
    title: "Marrakesh -Training Session",
    date: "08 Juin 2021",
    thumbnail: "/sports/vid5.jpg",
    url: "https://youtu.be/VWK73i5u7Iw",
  },
  {
    id: "6",
    title: "Marrakesh -Training Session",
    date: "22 Sep 2017",
    thumbnail: "/sports/vid6.jpg",
    url: "https://youtu.be/OY1rKhzI22s",
  },
];

const VideoGrid: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const openVideo = (video: Video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <Fragment>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div key={video.id} className="" onClick={() => openVideo(video)}>
            <div className="relative cursor-pointer group">
              {/* Thumbnail Image */}
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full rounded-lg object-cover"
              />
              {/* Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100">
                {/* Outer Circles */}
                {!selectedVideo && (
                  <div className="absolute w-16 h-16 rounded-full border-4 border-white animate-ping"></div>
                )}
                {/* Play Icon */}
                <FaPlayCircle className="text-white text-6xl transform group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            <h3 className="text-lg font-medium mt-2">{video.title}</h3>
            <p className="text-sm text-gray-500">{video.date}</p>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeVideo}
        >
          <div
            className="bg-white rounded-lg p-4 w-11/12 max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="text-red-500 font-bold mb-2"
              onClick={closeVideo}
            >
              <TbXboxX className="w-8 h-8" />
            </button>
            <ReactPlayer
              url={selectedVideo.url}
              controls
              width="100%"
              height="360px"
            />
            <h3 className="text-lg font-medium mt-2">{selectedVideo.title}</h3>
            <p className="text-sm text-gray-500">{selectedVideo.date}</p>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default VideoGrid;
