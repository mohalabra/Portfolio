import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Achievements, ImageGallery, VideoGrid } from '@/src/components';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { PiYoutubeLogo } from 'react-icons/pi';
import Link from 'next/link';

const links = [
  {
    to: 'https://www.instagram.com/labrassi_mohamed/profilecard/?igsh=ZDV1dWF3dWtvaXdy',
    icon: FaInstagram,
  },
  { to: 'https://www.youtube.com/@labrassimohamed3275', icon: PiYoutubeLogo },
  {
    to: 'https://www.facebook.com/profile.php?id=100008916455724&mibextid=ZbWKwL',
    icon: FaFacebookF,
  },
];

const Sport = () => {
  return (
    <Container maxWidth="xl">
      {/* First Contents */}
      <Box mb={6}>
        <div className="flex flex-col md:flex-row md:justify-center md:gap-10">
          <div className="md:hidden flex justify-center items-center flex-grow">
            <img
              src="/sports/img2.jpg"
              alt="Jiu Jitsu Vector"
              className="h-[300px] w-[300px]"
            />
          </div>
          <div className="flex-col md:max-w-[500px] lg:max-w-[800px] content-center justify-center">
            <Typography variant="h1">{`"`}My Jiu-Jitsu Journey{`"`}</Typography>
            <Typography variant="body1">
              I’m passionate about Brazilian Jiu-Jitsu. I started training in
              2014, and since then, Jiu-Jitsu has been more than just a sport to
              me—it's a way of life. The discipline, mental strength, and
              physical resilience I've developed have shaped who I am today.
              From local tournaments to representing my country internationally,
              each match brings new challenges and opportunities for growth.
            </Typography>

            <Box display="flex" justifyContent="flex-end" gap={3} mt={2}>
              {links.map((item, __index) => (
                <Link href={item.to} target="_blank" key={__index}>
                  <item.icon className="w-6 h-6 md:w-8 md:h-8 transition-all duration-300 hover:text-gray-500" />
                </Link>
              ))}
            </Box>
          </div>
          <div className="hidden md:flex h-[700px] w-auto">
            <img src="/sports/img1.jpg" alt="My Pict 1" />
          </div>
        </div>
      </Box>

      <Box mb={6}>
        <Typography
          variant="h1"
          textAlign="center"
          textTransform={'capitalize'}
          fontWeight={'bold'}
          mb={4}
        >
          Achievements
        </Typography>
        <div className="w-full flex justify-center">
          <Achievements />
        </div>
      </Box>

      <Box mb={6}>
        <Typography
          variant="h1"
          textAlign="center"
          textTransform={'capitalize'}
          fontWeight={'bold'}
          mb={4}
        >
          Videos
        </Typography>
        <VideoGrid />
      </Box>

      <Box mb={6}>
        <Typography
          variant="h1"
          textAlign="center"
          textTransform={'capitalize'}
          fontWeight={'bold'}
          mb={4}
        >
          Gallery
        </Typography>
        <ImageGallery />
      </Box>
    </Container>
  );
};

export default Sport;
