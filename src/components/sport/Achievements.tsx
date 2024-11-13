"use client";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography, Box } from "@mui/material";

const achievements = [
  {
    year: "2021",
    title: "International Jiu-Jitsu Open",
    location: "Abu Dhabi - United Arab Emirates",
    division: "-69 KG",
    highlights:
      "Competing internationally was a dream come true. Facing athletes from around the world pushed me beyond my limits and inspired me to take my training to the next level.",
  },
  {
    year: "2018",
    title: "National Jiu-Jitsu Championship",
    location: "Agadir-Morocco",
    result: "Gold Medal",
    division: "-66 KG ~ Gi",
    highlights:
      "This was my first major national event, and it was a great experience competing against some of the top athletes in the country.",
  },
  {
    year: "July 2017",
    title: "National Jiu-Jitsu Championship",
    location: "Rabat-Morocco",
    result: "Gold Medal",
    division: "-66 KG",
    highlights:
      "This was my first major national event, and it was a great experience competing against some of the top athletes in the country.",
  },
  {
    year: "Mars 2017",
    title: "National Jiu-Jitsu Championship",
    location: "Agadir-Morocco",
    result: "Gold Medal",
    division: "-66 KG",
    highlights:
      "This was my first major national event, and it was a great experience competing against some of the top athletes in the country.",
  },
];

const Achievements = () => {
  return (
    <Timeline position="alternate" className="lg:max-w-[70%]">
      {achievements.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            {index < achievements.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6" component="span">
                {item.year} - {item.title}
              </Typography>
              {item.location && (
                <Typography variant="body2" color="textSecondary">
                  Location: {item.location}
                </Typography>
              )}
              <Typography variant="body2" color="textSecondary">
                Division: {item.division}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Result: {item.result}
              </Typography>
              <Typography variant="body2">{item.highlights}</Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default Achievements;
