"use client";

import React, { useEffect, useRef } from "react";
import { Footer, Header } from "@/src/components";
import { Box } from "@mui/material";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const hasTracked = useRef(false);
  useEffect(() => {
    if (!hasTracked.current) {
      hasTracked.current = true;

      const trackVisitor = async () => {
        await fetch("/api/track-visitor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ page: window.location.pathname }),
        });
      };

      trackVisitor();
    }
  }, []);

  return (
    <>
      <Box
        sx={{
          color: "text.primary",
        }}
        className="relative w-full h-full"
      >
        {/* Overlay for opacity */}
        <Box
          sx={{
            backgroundColor: "background.default",
            position: "absolute",
            zIndex: 10,
            opacity: 0.75,
            inset: 0,
            maxWidth: "100vw",
            backgroundSize: "contain",
            backgroundRepeat: "repeat",
          }}
        ></Box>

        {/* Background Image */}
        <Box
          sx={{
            backgroundImage: `url('/background.jpeg')`,
            backgroundSize: "contain",
            backgroundRepeat: "repeat",
          }}
          className="absolute z-0 bg-center inset-0 max-w-screen"
        ></Box>

        {/* Content Layer */}
        <div className="relative z-30 w-full h-full">
          <Header />
          <div className="relative mt-32 mb-10">{children}</div>
          <Footer />
        </div>
      </Box>
    </>
  );
};

export default layout;
