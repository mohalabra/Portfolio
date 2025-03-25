"use client";

import { ProjectType } from "@/src/types/types";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Link,
  Grid,
  useTheme,
} from "@mui/material";
import { ProjectStatus as ps } from "@/src/types/types";

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const theme = useTheme();

  return (
    <Grid item xs={12} sm={7} md={5} lg={4}>
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
          <Link href={`/projects/${project.id}`}>
            <img
              src={`/projects/${project.images[0]}`}
              alt={project.title}
              style={{
                width: "100%",
                objectFit: "contain",
              }}
              className="max-h-[220px] lg:max-h-[170px] xl:max-h-[270px]"
            />
          </Link>

          <CardContent sx={{ padding: "16px" }}>
            <Typography variant="body1" mb={3}>
              <Link href={`/projects/${project.id}`} underline="hover">
                {project.title.length > 30
                  ? `${project.title.substring(0, 30)}...`
                  : project.title}
              </Link>
            </Typography>

            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                {project.projectType && (
                  <Typography
                    variant="body2"
                    className="rounded-full px-4 py-1"
                    sx={{
                      backgroundColor: "rgba(82, 82, 82, 0.5)",
                      color: "white",
                    }}
                  >
                    {project.projectType}
                  </Typography>
                )}
                <Typography
                  variant="body2"
                  className="rounded-full px-4 py-1"
                  sx={{
                    backgroundColor: "rgba(82, 82, 82, 0.5)",
                    color: "white",
                  }}
                >
                  {project.date}
                </Typography>
              </div>

              <Typography
                variant="body2"
                className="rounded-full px-4 py-1"
                sx={{
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? project.status === ps.Completed
                        ? "#00E676" 
                        : project.status === ps.InProgress
                          ? "#448AFF" 
                          : "#90A4AE" 
                      : project.status === ps.Completed
                        ? "#2E7D32" 
                        : project.status === ps.InProgress
                          ? "#1565C0" 
                          : "#546E7A", 
                  color: theme.palette.mode == "dark" ? "black" : "white",
                }}
              >
                {project.status}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
};

export default ProjectCard;
