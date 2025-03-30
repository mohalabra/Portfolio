"use client";

import React, { useEffect, useRef, useState } from "react";
import { Footer, Header } from "@/src/components";
import { Box } from "@mui/material";
import FeedbackButton from "@/src/components/common/FeedbackButton";
import FeedbackForm from "@/src/components/common/FeedbackForm";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [openFeedback, setOpenFeedback] = useState<boolean>(false);
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
          <FeedbackForm isOpen={openFeedback} setIsOpen={setOpenFeedback} />
          <div className="relative mt-32 mb-10 min-h-[90vh]">
            <>
              <div className="bottom-10 left-10 fixed z-50">
                <FeedbackButton setOpenFeedback={setOpenFeedback} />
              </div>
              {children}
            </>
          </div>

          <Footer />
        </div>
      </Box>
    </>
  );
};

export default layout;
