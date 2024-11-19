"use client";
import { Box, Container, Typography, useTheme } from "@mui/material";
import React, { ReactNode } from "react";

interface SectionInterface {
  title?: String;
  children: ReactNode;
}

const Section = ({ title, children }: SectionInterface) => {
  const theme = useTheme();
  return (
    <Container maxWidth={"xl"}>
      <Box
        sx={{
          p: 3,
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[5],
          borderRadius: 4,
          maxWidth: "100%",
        }}
      >
        <Box
          pt={2}
          pb={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
          }}
        >
          {title && (
            <Typography
              variant="h1"
              color="palette.primary"
              sx={{ fontWeight: 900, letterSpacing: "5px" }}
            >
              {title}
            </Typography>
          )}
        </Box>

        {children}
      </Box>
    </Container>
  );
};

export default Section;
