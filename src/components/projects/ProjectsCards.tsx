import { ProjectType } from "@/src/types/types";
import { Grid, Typography, Link, Card, CardContent, Box } from "@mui/material";
import React from "react";

const ProjectsCards = ({ projects }: { projects: Array<ProjectType> }) => {
  return (
    <Grid container spacing={3} justifyContent="center">
      {projects.map((item, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
          <Box
            height="100%"
            className="shadow-lg cursor-pointer hover:animate-scale"
          >
            <Card
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Link href={`/projects/${item.id}`}>
                <img
                  src={`/projects/${item.images[0]}`}
                  alt={item.title}
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    maxHeight: "250px",
                  }}
                />
              </Link>

              <CardContent>
                <Typography variant="body1" mb={1}>
                  <Link href={`/projects/${item.id}`} underline="hover">
                    {item.title}
                  </Link>
                </Typography>
                <div className="flex gap-4 items-center">
                  {item.projectType && (
                    <Typography
                      variant="caption"
                      className="rounded-full px-4 py-1"
                      sx={{
                        backgroundColor: "rgba(82, 82, 82, 0.5)",
                        color: "white",
                      }}
                    >
                      {item.projectType}
                    </Typography>
                  )}
                  <Typography
                    variant="caption"
                    className="rounded-full px-4 py-1"
                    sx={{
                      backgroundColor: "rgba(82, 82, 82, 0.5)",
                      color: "white",
                    }}
                  >
                    {item.date}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectsCards;
