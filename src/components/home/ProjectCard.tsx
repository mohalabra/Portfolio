import { ProjectType } from '@/src/types/types';
import { Box, Card, CardContent, Typography, Link, Grid } from '@mui/material';
import React from 'react';

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <Box
        height="100%"
        className="shadow-lg cursor-pointer hover:animate-scale"
      >
        <Card
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <Link href={`/projects/${project.id}`}>
            <img
              src={`/projects/${project.images[0]}`}
              alt={project.title}
              style={{
                width: '100%',
                objectFit: 'contain',
              }}
              className="max-h-[150px] lg:max-h-[170px] xl:max-h-[200px]"
            />
          </Link>

          <CardContent>
            <Typography variant="body1" mb={1}>
              <Link href={`/projects/${project.id}`} underline="hover">
                {project.title}
              </Link>
            </Typography>
            <div className="flex gap-4 items-center">
              {project.projectType && (
                <Typography
                  variant="caption"
                  className="rounded-full px-4 py-1"
                  sx={{
                    backgroundColor: 'rgba(82, 82, 82, 0.5)',
                    color: 'white',
                  }}
                >
                  {project.projectType}
                </Typography>
              )}
              <Typography
                variant="caption"
                className="rounded-full px-4 py-1"
                sx={{
                  backgroundColor: 'rgba(82, 82, 82, 0.5)',
                  color: 'white',
                }}
              >
                {project.date}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
};

export default ProjectCard;
