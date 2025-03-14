import { skills } from '@/src/data/skills.data';
import { Grid, Typography, Container } from '@mui/material';
import React from 'react';

const Skills = () => {
  return (
    <Container maxWidth={'xl'}>
      <Typography
        variant="h1"
        color="palette.primary"
        sx={{
          fontWeight: 900,
          letterSpacing: '5px',
          pt: 3,
          pb: 6,
          textAlign: 'center',
        }}
      >
        {'My Skills'.toUpperCase()}
      </Typography>

      <Grid
        container
        direction="row"
        sx={{
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
        gap={4}
      >
        {skills.map((skill, __index) => (
          <Grid
            key={__index}
            item
            xs={12}
            sm={9}
            md={7}
            lg={5}
            
            className="bg-blue-300 px-3 py-5 rounded-3xl shadow-md shadow-gray-500 cursor-pointer hover:animate-scale"
          >
            <div className="flex gap-4">
              <img
                src={`/skills/${skill.icon}`}
                alt={skill.title}
                className="w-12 h-12 md:w-16 md:h-16"
              />
              <div className="flex-col">
                <Typography variant="body1" fontWeight={'bold'} mb={1}>
                  {skill.title}
                </Typography>
                <div className="flex w-full flex-wrap">
                  {skill.a.map((item, _index) => (
                    <p
                      className="text-xs md:text-sm bg-blue-700 bg-opacity-40 my-2 px-4 py-2 text-blue-950 font-bold rounded-3xl mx-2"
                      key={_index}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
