'use client';
import { SportImages } from '@/src/data/sport-images.data';
import {
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const ImageGallery = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Dynamically adjust the number of columns based on screen size
  const cols = isSmallScreen ? 2 : isMediumScreen ? 2 : 4;

  return (
    <div className="flex justify-center px-4">
      <ImageList
        variant="quilted"
        cols={cols}
        gap={16}
        rowHeight={isSmallScreen ? 100 : 121}
        className="w-full sm:max-w-6xl"
      >
        {SportImages.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            className="relative group mb-4"
          >
            <img
              {...srcset(`/sports/${item.img}`, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              style={{
                borderRadius: '8px',
                objectFit: 'cover',
              }}
            />

            {item.date && item.location && (
              <div
                className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-center p-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ borderRadius: '0 0 8px 8px' }}
              >
                <p className="text-md font-semibold">{item.location}</p>
                <p className="text-sm">{item.date || 'Some details here'}</p>
              </div>
            )}
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default ImageGallery;
