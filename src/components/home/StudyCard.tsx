"use client";

import { FormationType } from "@/src/types/types";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import React from "react";

const StudyCard = ({
  name,
  startDate,
  endDate,
  description,
  where,
}: FormationType) => {
  const theme = useTheme();
  return (
    <div className="shadow-lg cursor-pointer hover:animate-scale">
      <Box
        sx={{
          p: 3,
          backgroundColor: theme.palette.background.default,
          boxShadow: theme.shadows[1],
          borderRadius: 2,
          maxWidth: "100%",
        }}
        
      >
        <Typography variant="body2" fontWeight={"bold"} mb={1}>
          {name.toUpperCase()}
        </Typography>
        <Box pl={{ xs: 1, md: 2 }}>
          <Typography variant="body2" fontStyle={"italic"} mb={1}>
            {endDate ? (
              <span>
                From
                <span className="text-blue-400">{` September ${startDate} `}</span>
                to
                <span className="text-blue-400">{` July ${endDate}`}</span>
              </span>
            ) : (
              <span>
                Since
                <span className="text-blue-400">{` September ${startDate}`}</span>
              </span>
            )}
          </Typography>

          <Typography variant="body2" mb={1}>
            At <span className="text-blue-400">{where}</span>
          </Typography>

          <ul className="list-disc pl-7">
            {description.map((desc: string, index) => (
              <li key={index}>
                <Typography variant="body2">{desc}</Typography>
              </li>
            ))}
          </ul>
        </Box>
      </Box>
    </div>
  );
};

export default StudyCard;
