import { ProjectsCards } from "@/src/components";
import { projects } from "@/src/data/projects.data";
import { Container, Typography } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h2" fontWeight={"bold"} textAlign={"center"} mb={6} >
        All Projects 💻
      </Typography>
      <ProjectsCards projects={projects} />
    </Container>
  );
};

export default page;
