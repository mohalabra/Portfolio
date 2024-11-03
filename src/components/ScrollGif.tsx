"use client";

import { useEffect, useState } from "react";

interface ScrollGifProps {
  scrollThreshold: number;
  gifPath: string;
}

const ScrollGif = ({ scrollThreshold, gifPath }: ScrollGifProps) => {
  const [showGif, setShowGif] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      if (scrollY >= scrollThreshold && scrollY <= scrollThreshold + 200) {
        setShowGif(true);

        setTimeout(() => {
          setShowGif(false);
        }, 2500);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]);

  return (
    showGif && (
      <div className="fixed bottom-5 right-5 transition-opacity duration-300 z-50">
        <img
          src={gifPath}
          alt="Scroll GIF"
          className="w-36 h-36 md:w-64 md:h-64"
        />
      </div>
    )
  );
};

export default ScrollGif;
