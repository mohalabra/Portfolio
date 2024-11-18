import { Achievements, ImageGallery, Section } from "@/src/components";
import VideoGrid from "@/src/components/sport/VideoGrid";
import VideoPlayer from "@/src/components/sport/VideoPlayer";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Sport = () => {
  return (
    <Container maxWidth="xl">
      {/* First Contents */}
      <Box mb={6}>
        <div className="flex flex-col md:flex-row md:justify-center md:gap-10">
          <div className="md:hidden flex justify-center items-center flex-grow">
            <img
              src="/sports/img2.jpg"
              alt="Jiu Jitsu Vector"
              className="h-[300px] w-[300px]"
            />
          </div>
          <div className="flex-col md:max-w-[500px] lg:max-w-[800px] content-center justify-center">
            <Typography variant="h1">"My Jiu-Jitsu Journey"</Typography>
            <Typography variant="body1">
              I’m passionate about Brazilian Jiu-Jitsu. I started training in
              2014, and since then, Jiu-Jitsu has been more than just a sport to
              me—it's a way of life. The discipline, mental strength, and
              physical resilience I've developed have shaped who I am today.
              From local tournaments to representing my country internationally,
              each match brings new challenges and opportunities for growth.
            </Typography>
          </div>
          <div className="hidden md:flex h-[700px] w-auto">
            <img src="/sports/img1.jpg" alt="My Pict 1" />
          </div>
        </div>
      </Box>

      <Box mb={6}>
        <Typography
          variant="h1"
          textAlign="center"
          textTransform={"capitalize"}
          fontWeight={"bold"}
          mb={4}
        >
          Achievements
        </Typography>
        <div className="w-full flex justify-center">
          <Achievements />
        </div>
      </Box>

      <Box mb={6}>
        <Typography
          variant="h1"
          textAlign="center"
          textTransform={"capitalize"}
          fontWeight={"bold"}
          mb={4}
        >
          Videos
        </Typography>
        <VideoGrid />
      </Box>

      <Box mb={6}>
        <Typography
          variant="h1"
          textAlign="center"
          textTransform={"capitalize"}
          fontWeight={"bold"}
          mb={4}
        >
          Gallery
        </Typography>
        <ImageGallery />
      </Box>
    </Container>
  );
};

export default Sport;
