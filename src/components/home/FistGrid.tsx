import { Box, Grid, Typography, Container } from "@mui/material";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

const links = [
  { to: "https://mega.nz/file/pnMi2IrQ#zN7sGjwyzKrMTJu20EAYiMewaQpyhPrsCTUxFTyszOw", icon: FaFileDownload },
  { to: "https://github.com/labrassi-mohamed", icon: FaGithub },
  {
    to: "https://www.linkedin.com/in/labrassi-mohamed-%F0%9F%87%B5%F0%9F%87%B8-375566208/",
    icon: FaLinkedin,
  },
];

const FistGrid = () => {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={5}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid item xs={12} md={5} lg={4}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="/me.png"
              alt="my Image"
              className="rounded-full border-2 border-dashed border-[palette.text.primary] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]"
            />
          </Box>
        </Grid>

        <Grid item xs={10} md={6} lg={7} direction={"row"}>
          <Box>
            <Typography
              variant="h4"
              color="palette.text.primary"
              sx={{ pl: 2, mb: 0.5, letterSpacing: "2px" }}
            >
              Hi, my name is
            </Typography>

            <Typography
              variant="h3"
              fontWeight={500}
              sx={{
                pl: 1,
                mb: 1,
                textTransform: "uppercase",
                letterSpacing: "2px",
                textDecoration: "underline",
              }}
            >
              MOHAMED LABRASSI
            </Typography>

            <Typography
              variant="h5"
              color="palette.primary"
              fontWeight={400}
              sx={{ letterSpacing: "3px", textIndent: "10px" }}
            >
              An <span style={{ fontWeight: "bold" }}>AI Enginner</span> and
              Software Engineer passionate about leveraging technology to solve
              real-world problems.
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
    </Container>
  );
};

export default FistGrid;
