import { HeroSection } from "@/src/components";
import ContactSection from "@/src/components/about/ContactSection";
import { Container } from "@mui/material";
import React, { Fragment } from "react";

function About() {
  return (
    <Container maxWidth="lg">
      <HeroSection />

      <ContactSection />
    </Container>
  );
}

export default About;
