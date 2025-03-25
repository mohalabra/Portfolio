"use client";

import { ProjectCategory, ProjectType } from "@/src/types/types";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import ProjectCard from "../home/ProjectCard";

const ProjectsCards = ({ projects }: { projects: Array<ProjectType> }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Function to filter projects based on selected category
  const filteredProjects = selectedCategory
    ? projects.filter((project) =>
        project.categories?.includes(selectedCategory as ProjectCategory)
      )
    : projects;
  return (
    <>
      {/* Category Selection */}
      <div className="flex justify-center gap-4 mb-4">
        {[
          null,
          ProjectCategory.IOT,
          ProjectCategory.AI,
          ProjectCategory.FULLSTACK,
        ].map((category, index) => (
          <p
            key={index}
            className={`px-4 py-2 cursor-pointer transition-all duration-300 rounded-lg 
        ${
          selectedCategory === category
            ? "font-bold bg-blue-600 text-white shadow-lg scale-105"
            : "hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700 dark:hover:text-white bg-blue-100 text-black"
        }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category === null ? "All" : category}
          </p>
        ))}
      </div>
      <Grid container spacing={3} justifyContent="center">
        {filteredProjects.map((item, index) => (
          <ProjectCard key={index} project={item} />
        ))}
      </Grid>
    </>
  );
};

export default ProjectsCards;
