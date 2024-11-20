import { ProjectType } from "@/src/types/types";
import { Grid, Typography, Link, Card, CardContent, Box } from "@mui/material";
import React from "react";

const ProjectsCards = ({projects}: {projects: Array<ProjectType>}) => {
  return (
    <Grid container spacing={3} justifyContent="center">
      {projects.map((item, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} >
          <Box height="100%" className="shadow-lg">
            <Card
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <img
                src={`/projects/${item.images[0]}`}
                alt={item.title}
                style={{
                  width: "100%",
                  objectFit: "contain",
                  maxHeight: "250px", 
                  
                }}
              />
              <CardContent>
                <Typography variant="h6">
                  <Link href={`/projects/${item.id}`} underline="hover">
                    {item.title}
                  </Link>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.date}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectsCards;
