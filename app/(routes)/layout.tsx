import React from "react";
import { Footer, Header } from "@/src/components";
import { Box } from "@mui/material";


const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

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
            sx={{ backgroundColor: "background.default" }}
            className={`absolute z-10 bg-center inset-0 opacity-75 max-w-screen`}
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
