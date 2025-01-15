"use client";

import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import React from "react";

const ilove = [
  { title: "Building Stuff from Scratch", icon: "discussion" },
  { title: "Deploying and Scaling AI Models", icon: "deep-learning" },
  { title: "Optimizing Code and Performance", icon: "speed-radar" },
  { title: "Constantly Learning and Exploring New AI Techniques", icon: "solution" },
  { title: "Innovating with AI to Solve Real-World Challenges", icon: "ai" },
  {
    title: "Transforming Complex Problems into Simple Solutions",
    icon: "experience",
  },
];

const ILove = () => {
  const theme = useTheme();
  return (
    <Container maxWidth={"xl"}>
      <Box
        sx={{
          p: 3,
          backgroundImage: `url(/skills.png)`,
          backgroundSize: "80%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          boxShadow: theme.shadows[5],
          borderRadius: 4,
          maxWidth: "100%",
          minHeight: "45vh",
          position: "relative",
        }}
      >
        <div
          className="absolute top-0 left-0 h-full w-full bg-gradient-to-bl from-slate-900 to-stone-800 rounded-[16px] z-0"
          style={{ opacity: "80%" }}
        ></div>

        <div className="relative h-full w-full z-10 xs:m-2 sm:m-4 md:m-5 lg:m-8">
          <Typography variant="h3" fontWeight="bold" color="white" mb={6}>
            What I Love Doing ?
          </Typography>

          <div className="w-full lg:max-w-[65%]">
            <Grid container gap={2} alignItems="stretch">
              {ilove.map((item, index) => (
                <Grid item xs={5} md={4} lg={3} key={index}>
                  <div
                    className="bg-blue-500 w-full p-4 rounded-xl h-full cursor-pointer hover:animate-scale"
                    style={{ opacity: "85%" }}
                  >
                    <img
                      src={`/ilove/${item.icon}.png`}
                      alt=""
                      width="60px"
                      height="60px"
                      className="mb-4"
                    />

                    <Typography variant="body2" color="white">
                      {item.title}
                    </Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default ILove;
