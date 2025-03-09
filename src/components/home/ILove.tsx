import { ilove } from '@/src/data/ilove.data';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const ILove = () => {
  return (
    <Container maxWidth={'xl'}>
      <Box
        sx={(theme) => ({
          p: 3,
          backgroundImage: `url(/skills.png)`,
          backgroundSize: '80%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          boxShadow: theme.shadows[5],
          borderRadius: 4,
          maxWidth: '100%',
          minHeight: '45vh',
          position: 'relative',
        })}
      >
        <div
          className="absolute top-0 left-0 h-full w-full bg-gradient-to-bl from-slate-900 to-stone-800 rounded-[16px] z-0"
          style={{ opacity: '80%' }}
        ></div>

        <div className="relative h-full w-full z-10 xs:m-2 sm:m-4 md:m-5 lg:m-8">
          <Typography variant="h3" fontWeight="bold" color="white" mb={6}>
            What I Love Doing ?
          </Typography>

          <div className="w-full lg:max-w-[65%]">
            <Grid container gap={2} alignItems="stretch">
              {ilove.map((item, index) => (
                <Grid item xs={5} md={4} lg={3} key={index}>
                  <div
                    className="bg-blue-500 w-full p-4 rounded-xl h-full cursor-pointer hover:animate-scale"
                    style={{ opacity: '85%' }}
                  >
                    <Image
                      src={`/ilove/${item.icon}.png`}
                      alt={item.title}
                      className="mb-4"
                      width={60}
                      height={60}
                    />

                    <Typography variant="body2" color="white">
                      {item.title}
                    </Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default ILove;
