"use client";
import {
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { Fragment } from "react";

const images = [
  {
    img: "hist1.jpg",
    location: "Agadir Morocco",
    rows: 4,
    cols: 2,
    date: "Mar 25, 2018",
  },
  {
    img: "hist3.jpg",
    location: "Marrakesh Morocco",
    rows: 3,
    cols: 2,
    date: "Aug 2, 2018",
  },
  {
    img: "hist4.jpg",
    location: "Agadir Morocco",
    rows: 3,
    cols: 2,
    date: "Mar 25, 2018",
  },
  {
    img: "hist2.jpg",
    title: "Burger",
    location: "Marrakesh Morocco",
    rows: 3,
    cols: 2,
    date: "May 2, 2021",
  },
  {
    img: "hist5.jpg",
    location: "Agadir Morocco",
    rows: 3,
    cols: 2,
    date: "Mar 25, 2018",
  },
  {
    img: "hist6.jpg",
    location: "Agadir Morocco",
    rows: 3,
    cols: 2,
    date: "Mar 25, 2018",
  },
  {
    img: "hist7.jpg",
    location: "Agadir Morocco",
    rows: 3,
    cols: 2,
    date: "Mar 25, 2018",
  },
  {
    img: "hist8.jpg",
    location: "Agadir Morocco",
    rows: 3,
    cols: 2,
    date: "Mar 25, 2018",
  },
  {
    img: "hist10.jpg",
    location: "Rabat Morocco",
    rows: 3,
    cols: 2,
    date: "Jul 24, 2017",
  },
  {
    img: "hist11.jpg",
    location: "Agadir Morocco",
    rows: 3,
    cols: 2,
    date: "Mar 12, 2017",
  },
  {
    img: "img1.jpg",
    location: "Abu Dhabi United Arab Emirates",
    rows: 3,
    cols: 1,
    date: "Nov 08, 2021",
  },
  {
    img: "hist12.jpg",
    location: "Casa Blanca Morocco",
    rows: 3,
    cols: 1,
    date: "April 30, 2023",
  },
  {
    img: "hist9.jpg",
    location: "Casa Blanca Morocco",
    rows: 3,
    cols: 2,
    date: "Mar 12, 2017",
  },
];

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
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

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
        {images.map((item) => (
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
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />

            {item.date && item.location && (
              <div
                className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-center p-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ borderRadius: "0 0 8px 8px" }}
              >
                <p className="text-md font-semibold">{item.location}</p>
                <p className="text-sm">{item.date || "Some details here"}</p>
              </div>
            )}
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default ImageGallery;
