'use client';
import React, { useEffect, useState } from 'react';

const LoadingPage: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [loadingAsset, setLoadingAsset] = useState('');

  const assets = [
    'AI Engineer',
    'Data Scientist',
    'Software Developer',
    'Problem Solver',
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
    </>
  );
};

export default LoadingPage;
