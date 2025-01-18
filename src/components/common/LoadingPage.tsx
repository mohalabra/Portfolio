"use client"
import React, { useEffect, useState } from "react";

const LoadingPage: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [loadingAsset, setLoadingAsset] = useState("");

  // const assets = ["logo1290", "image001", "script.js", "data.json", "style.css"];
  const assets = [
    "AI Engineer",
    "Data Scientist",
    "Software Developer",
    "Problem Solver",
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 5 : 100));
    }, 500); // Increase progress every 500ms

    const assetInterval = setInterval(() => {
      setLoadingAsset(assets[Math.floor(Math.random() * assets.length)]);
    }, 1000); // Change loading asset every 1 second

    return () => {
      clearInterval(progressInterval);
      clearInterval(assetInterval);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-black text-white font-mono">
        <h1 className="text-3xl mb-6">Loading...</h1>
        <div className="w-1/2 bg-gray-700 h-6 rounded mb-2 relative">
          <div
            className="bg-gray-400 h-full rounded transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-xl mb-4">{progress}%</div>
        <div className="text-lg">MOHAMED LABRASSI: {loadingAsset}</div>
      </div>

      {/* <div className="overflow-hidden w-[400px] h-[165px]">
        <svg
          width="400"
          height="165"
          viewBox="0 0 400 165"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="group1"
            style={{
              animation: "scroll 1s linear infinite",
            }}
          >
            <g id="line1">
              <rect x="0" y="0" width="40" height="20" rx="10" fill="#F92672" />
              <rect
                x="43"
                y="0"
                width="60"
                height="20"
                rx="10"
                fill="#A6E22E"
              />
              <rect
                x="106"
                y="0"
                width="100"
                height="20"
                rx="10"
                fill="#FFE792"
              />
              <rect
                x="209"
                y="0"
                width="70"
                height="20"
                rx="10"
                fill="#FFE792"
              />
            </g>
            <g id="line2" transform="translate(30, 27)">
              <rect x="0" y="0" width="40" height="20" rx="10" fill="#F92672" />
              <rect
                x="43"
                y="0"
                width="60"
                height="20"
                rx="10"
                fill="#A6E22E"
              />
              <rect
                x="106"
                y="0"
                width="80"
                height="20"
                rx="10"
                fill="#FFE792"
              />
            </g>
            <rect x="0" y="135" width="40" height="20" rx="10" fill="#F92672" />
            <rect
              x="60"
              y="54"
              width="290"
              height="20"
              rx="10"
              fill="#F8F8F2"
            />
            <rect
              x="60"
              y="81"
              width="225"
              height="20"
              rx="10"
              fill="#F8F8F2"
            />
            <rect
              x="30"
              y="108"
              width="40"
              height="20"
              rx="10"
              fill="#F92672"
            />
          </g>
          <g
            id="group2"
            style={{
              transform: "translateY(165px)",
              animation: "scroll2 1s linear infinite",
            }}
          >
            <g id="line1">
              <rect x="0" y="0" width="40" height="20" rx="10" fill="#F92672" />
              <rect
                x="43"
                y="0"
                width="60"
                height="20"
                rx="10"
                fill="#A6E22E"
              />
              <rect
                x="106"
                y="0"
                width="100"
                height="20"
                rx="10"
                fill="#FFE792"
              />
              <rect
                x="209"
                y="0"
                width="70"
                height="20"
                rx="10"
                fill="#FFE792"
              />
            </g>
            <g id="line2" transform="translate(30, 27)">
              <rect x="0" y="0" width="40" height="20" rx="10" fill="#F92672" />
              <rect
                x="43"
                y="0"
                width="60"
                height="20"
                rx="10"
                fill="#A6E22E"
              />
              <rect
                x="106"
                y="0"
                width="80"
                height="20"
                rx="10"
                fill="#FFE792"
              />
            </g>
            <rect x="0" y="135" width="40" height="20" rx="10" fill="#F92672" />
            <rect
              x="60"
              y="54"
              width="290"
              height="20"
              rx="10"
              fill="#F8F8F2"
            />
            <rect
              x="60"
              y="81"
              width="225"
              height="20"
              rx="10"
              fill="#F8F8F2"
            />
            <rect
              x="30"
              y="108"
              width="40"
              height="20"
              rx="10"
              fill="#F92672"
            />
          </g>
        </svg>
      </div> */}
    </>
  );
};

export default LoadingPage;
