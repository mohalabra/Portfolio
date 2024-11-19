import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Card, CardMedia } from "@mui/material";


interface ProjectProps {
  project: {
    title: string;
    images: string[];
  };
  handleClickOpen: (image: string) => void;
}

const ProjectCarousel: React.FC<ProjectProps> = ({ project, handleClickOpen }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      pagination={{ clickable: true }}
      navigation
      breakpoints={{
        640: {
          slidesPerView: 1, 
        },
        768: {
          slidesPerView: 2, 
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {project.images.map((image, index) => (
        <SwiperSlide key={index}>
          <Card>
            <CardMedia
              component="img"
              image={`/projects/${image}`}
              alt={project.title}
              style={{ cursor: "pointer" }}
              onClick={() => handleClickOpen(image)}
            />
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectCarousel;
