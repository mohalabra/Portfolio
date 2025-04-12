import { HeroSection } from "@/src/components";
import ContactSection from "@/src/components/about/ContactSection";
import { Box, Container } from "@mui/material";
import Image from "next/image";
import React from "react";

function About() {
  return (
    <Container maxWidth="lg">
      <HeroSection />

      <Box sx={{display: "flex", justifyContent:  "center", my: 4}}>
        <Image
          src="/pics.png"
          alt="My pics"
          width={700}
          height={700}
          loading="lazy"
        />
      </Box>

      <ContactSection />
    </Container>
  );
}

export default About;
