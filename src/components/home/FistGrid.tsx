import { Box, Grid, Typography, Container } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaYoutube,
} from 'react-icons/fa';

const links = [
  {
    to: 'https://mega.nz/file/Jrlm1BgC#2MXqRhF0ENeBuLlgxlpQEw1mQKViDM67M8mum37_KXw',
    icon: FaFileDownload,
  },
  { to: 'https://github.com/labrassi-mohamed', icon: FaGithub },
  {
    to: 'https://www.linkedin.com/in/mohamed-labrassi-375566208/',
    icon: FaLinkedin,
  },
  {
    to: 'https://www.youtube.com/@supersimpleai02',
    icon: FaYoutube,
  },
];

const FistGrid = () => {
  return (
    <Container maxWidth="xl" sx={{ position: 'relative' }}>
      <Grid
        container
        spacing={5}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Grid item xs={12} md={5} lg={4}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src="/me.png"
              alt="my Image"
              className="rounded-full border-2 border-dashed border-[palette.text.primary] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]"
            />
          </Box>
        </Grid>

        <Grid item xs={10} md={6} lg={7} direction={'row'}>
          <Box>
            <Typography
              variant="h4"
              color="palette.text.primary"
              sx={{ pl: 1, mb: 0.5, letterSpacing: '2px' }}
            >
              Hi, my name is
            </Typography>

            <Typography
              variant="h3"
              fontWeight={500}
              sx={{
                pl: 1,
                mb: 1,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                textDecoration: 'underline',
              }}
            >
              MOHAMED LABRASSI
            </Typography>

            <Typography
              variant="h5"
              color="palette.primary"
              fontWeight={400}
              sx={{ letterSpacing: '3px', textIndent: '10px' }}
            >
              An{' '}
              <span style={{ fontWeight: 'bold' }}>AI & Software Engineer</span>{' '}
              specializing in machine learning, deep learning, and full-stack
              development. I engineer intelligent systems that transform
              cutting-edge research into scalable, real-world solutions.
            </Typography>
          </Box>

          <Box display="flex" justifyContent="flex-end" gap={3} mt={1}>
            {links.map((item, __index) => (
              <Link href={item.to} target="_blank" key={__index}>
                <item.icon className="w-6 h-6 md:w-8 md:h-8 transition-all duration-300 hover:text-gray-500" />
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>
      <div className="absolute w-full h-full top-0 left-0 -z-20">
        <div className="absolute top-5 right-5 md:top-10 md:right-10 animate-rotate">
          <img src="/gifs/robot4.gif" alt="Rotating Robot" />
        </div>

        <div className="absolute -bottom-2 left-1/3 animate-slide">
          <img src="/gifs/robot2.gif" alt="Animated Robot" />
        </div>

        <div className="absolute top-5 left-5 md:top-10 md:left-10">
          <img src="/gifs/robot3.gif" alt="" />
        </div>
      </div>
    </Container>
  );
};

export default FistGrid;
