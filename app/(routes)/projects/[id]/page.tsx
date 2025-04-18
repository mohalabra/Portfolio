"use client";
import { useParams } from "next/navigation";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Dialog,
  DialogContent,
  IconButton,
  Container,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Close as CloseIcon } from "@mui/icons-material";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ProjectsCards, Section } from "@/src/components";
import notFound from "@/app/not-found";
import Link from "next/link";
import { projects } from "@/src/data/projects.data";

const ProjectPage = () => {
  const { id } = useParams();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const project = projects.find((item) => item.id === id);

  if (!project) {
    return notFound();
  }

  const jsonLd = {
    name: project.title,
    image: project.images[0],
    description: project.description,
  };

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  // Open the modal with the selected image
  const handleClickOpen = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  // Close the modal
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth={"xl"}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Box marginTop={5}>
        <Typography variant="h2" fontWeight={"bold"} gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" marginBottom={3}>
          Date: {project.date}
        </Typography>

        {/* Tools */}
        {project.tools && (
          <div className="flex gap-2 md:gap-4 flex-wrap mb-8">
            {project.tools.map((item, _idx) => (
              <div key={_idx}>
                <Typography
                  variant="body2"
                  sx={(theme) => ({
                    backgroundColor: theme.palette.background.toolsBackground,
                    color: theme.palette.background.toolColor,
                  })}
                  className={`rounded-full px-4 py-2 md:px-5 md:py-2`}
                >
                  {item}
                </Typography>
              </div>
            ))}
          </div>
        )}

        {/* DataSet */}
        {project.dataset && (
          <Typography>
            Dataset :{" "}
            <Link
              href={project.dataset.link}
              className="text-blue-600 underline"
              target="_blank"
            >
              {project.dataset?.name}
            </Link>
          </Typography>
        )}

        {/* Description */}
        <div className="flex flex-col items-center">
          <div className="">
            {project.description.map((desc, _index) => (
              <div key={_index}>
                {desc.title && (
                  <Typography variant="h3" mb={2} fontWeight={"bold"}>
                    {desc.title}
                  </Typography>
                )}
                {desc.subtitle && (
                  <Typography
                    variant="h4"
                    pl={2}
                    fontWeight={"bold"}
                    color="textSecondary"
                    mb={2}
                  >
                    {desc.subtitle}
                  </Typography>
                )}

                <Typography
                  variant="body1"
                  maxWidth={"1200px"}
                  pl={desc.title ? 2 : 4}
                  mb={3}
                  dangerouslySetInnerHTML={{
                    __html: desc.content || "",
                  }}
                />

                {desc.images &&
                  desc.images.map((image, _index) => (
                    <div className="flex justify-center mb-5" key={_index}>
                      <img src={image} alt={desc.title || desc.subtitle} />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* video */}
        {project.video && (
          <Box mb={6}>
            <Section title="Watch Video">
              <div className="flex flex-col items-center">
                <div className="sm:w-[100%] sm:h-[400px] md:w-[80%] md:h-[500px] lg:w-[70%] lg:h-[600px]">
                  {isMounted ? (
                    <ReactPlayer
                      url={project.video}
                      controls
                      width="100%"
                      height="100%"
                    />
                  ) : (
                    <div>Loading video...</div>
                  )}
                </div>
              </div>
            </Section>
          </Box>
        )}

        {/* Images */}
        <Box my={6}>
          <Section title="Images">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                1: {
                  slidesPerView: 1.1,
                },
                768: {
                  slidesPerView: 2.1,
                },
                1024: {
                  slidesPerView: 3.2,
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
          </Section>
        </Box>

        {/* Other Projects */}
        <Box mb={6}>
          <Typography variant="h2" textAlign={"center"} my={5} gutterBottom>
            Other Project
          </Typography>
          <ProjectsCards
            projects={projects.filter((item) => item.id !== id).slice(0, 4)}
          />
        </Box>

        {/* Image Modal (Popup) */}
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="lg"
          fullWidth
          disableScrollLock
        >
          <DialogContent
            sx={{
              maxHeight: "calc(100vh - 64px)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{
                position: "absolute",
                right: 8,
                top: 3,
              }}
            >
              <CloseIcon />
            </IconButton>
            <img
              src={`/projects/${selectedImage}`}
              alt={project.title}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "calc(100vh - 100px)",
                objectFit: "contain",
              }}
            />
          </DialogContent>
        </Dialog>
      </Box>
    </Container>
  );
};

export default ProjectPage;
