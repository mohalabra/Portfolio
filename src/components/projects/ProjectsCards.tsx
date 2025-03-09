import { ProjectType } from '@/src/types/types';
import { Grid, Typography, Link, Card, CardContent, Box } from '@mui/material';
import React from 'react';
import ProjectCard from '../home/ProjectCard';

const ProjectsCards = ({ projects }: { projects: Array<ProjectType> }) => {
  return (
    <Grid container spacing={3} justifyContent="center">
      {projects.map((item, index) => (
        <ProjectCard key={index} project={item} />
      ))}
    </Grid>
  );
};

export default ProjectsCards;
