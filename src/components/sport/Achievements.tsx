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
    year: "Nov 2021",
    title: "International Jiu-Jitsu Open",
    location: "Abu Dhabi - United Arab Emirates",
    division: "-69 KG ~ Gi",
    highlights:
      "Competing internationally was a milestone. Placing 14th in such a prestigious event motivated me to refine my skills and aim higher.",
  },
  {
    year: "Mars 2018",
    title: "National Jiu-Jitsu Championship",
    location: "Agadir-Morocco",
    result: "Gold Medal",
    division: "-66 KG ~ Gi",
    highlights:
      "Winning gold at this event solidified my belief in my training methods and marked a turning point in my competitive journey.",
  },
  {
    year: "Mars 2018",
    title: "National Jiu-Jitsu Championship",
    location: "Agadir-Morocco",
    result: "Gold Medal",
    division: "-66 KG ~ No Gi",
    highlights:
      "Securing gold in both Gi and No Gi divisions showed the versatility of my technique and adaptability in different formats.",
  },
  {
    year: "July 2017",
    title: "National Jiu-Jitsu Championship",
    location: "Rabat-Morocco",
    result: "Gold Medal",
    division: "-66 KG ~ Gi",
    highlights:
      "This victory reinforced my dedication to the sport and gave me the confidence to compete at a higher level.",
  },
  {
    year: "Mars 2017",
    title: "National Jiu-Jitsu Championship",
    location: "Agadir-Morocco",
    result: "Gold Medal",
    division: "-66 KG",
    highlights:
      "Earning my first competition and my first gold medal at a national level was a proud moment that motivated me to pursue even greater challenges.",
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
              {item.result && (
                <Typography variant="body2" color="textSecondary">
                  Result: {item.result}
                </Typography>
              )}
              <Typography variant="body2">{item.highlights}</Typography>
            </Box>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default Achievements;
