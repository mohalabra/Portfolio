"use client"

import {
  ExperiencesCards,
  FirstGrid,
  ILove,
  ProjectsCards,
  ScrollGif,
  Section,
  StudyCards,
  Skills,
} from "@/src/components";
import { projects } from "@/src/utils/Constants";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const page = () => {
  return (
    <Box>
      {/* Welcopme message */}
      <Box mb={5} sx={{ textAlign: "center" }}>
        <Typography variant="h2" color="palette.primary" fontWeight={800}>
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
        <Section title={"FORMATION"}>
          <Grid container gap={2} justifyContent="space-evenly">
            {/* Gif */}
            <Grid item md={5} xs={12} className="place-items-center">
              <img
                src="/gifs/studying-study.gif"
                alt="Study Gif"
                className="pt-3"
              />
            </Grid>
            {/* Studyied card */}
            <Grid item md={6} xs={12}>
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
        <Section title={"WORK EXPERIENCE"}>
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
                width={"600px"}
                height={"600px"}
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
        <Section title={"PROJECTS"}>
          <ProjectsCards projects={projects.slice(0, 4)} />
          <div className="m-5 text-center">
            <a href="/projects" className="underline">
              See More ...
            </a>
          </div>
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
};

export default page;
