"use client";

import React from "react";
import Box from "@mui/material/Box";
import { Typography, useTheme, Grid } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import {
  ExperiencesCards,
  FirstGrid,
  ILove,
  ProjectsCards,
  Section,
  Skills,
} from "../src/components";
import StudyCards from "@/src/components/home/StudyCards";
import ScrollGif from "@/src/components/ScrollGif";

function Home() {
  const theme = useTheme();
  return (
    <Box>
      {/* Welcopme message */}
      <Box mb={5} sx={{ textAlign: "center" }}>
        <Typography variant="h3" color="palette.primary" fontWeight={800}>
          <TypeAnimation
            sequence={["Welcome to my portfolio !", 2000]}
            wrapper="span"
            speed={40}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </Typography>
      </Box>

      {/* First Grid */}
      <Box mb={6}>
        <FirstGrid />
      </Box>

      {/* Formations */}
      <Box mb={6}>
        <Section title={"FORMATION"} theme={theme}>
          <Grid container gap={2} justifyContent="space-evenly">
            {/* Gif */}
            <Grid item md={5} xs={12} className="place-items-center">
              <img src="/gifs/studying-study.gif" alt="Study Gif" className="pt-3" />
            </Grid>
            {/*  */}
            <Grid item md={6} xs={12}>
              {/* Boxs */}
              <StudyCards />
            </Grid>
          </Grid>
        </Section>
      </Box>

      {/* What I Love Doing */}
      <Box mb={6}>
        <ILove />
      </Box>

      {/* WORK EXPERIENCE */}
      <Box mb={6}>
        <Section title={"WORK EXPERIENCE"} theme={theme}>
          <Grid container gap={2} justifyContent="space-evenly">
            {/* Experiences */}
            <Grid item md={6} xs={12}>
              <ExperiencesCards />
            </Grid>
            {/* Gif */}
            <Grid item md={5} xs={12} className="place-items-center">
              <img
                src="/Laptop.svg"
                alt="Laptop svg"
                width={"500px"}
                height={"500px"}
              />
            </Grid>
          </Grid>
        </Section>
      </Box>

      {/* Skills */}
      <Box mb={6}>
        <Skills />
      </Box>

      {/* Projects */}
      <Box mb={6}>
        <Section title={"PROJECTS"} theme={theme}>
          <Grid container gap={2} justifyContent="space-evenly">
            <ProjectsCards />
          </Grid>
        </Section>
      </Box>

      {/* Scroll Gifs */}
      <ScrollGif
        scrollThreshold={1800}
        gifPath="/gifs/i-love-doing-this-jared-dines.gif"
      />
      <ScrollGif
        scrollThreshold={2800}
        gifPath="/gifs/i-like-taking-on-major-project-alex.gif"
      />
    </Box>
  );
}

export default Home;
