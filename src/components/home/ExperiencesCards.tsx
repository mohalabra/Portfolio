import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/src/data/experiences.data";

const ExperiencesCards = () => {
  return (
    <div className="flex-col space-y-4">
      {experiences.map((exp, __index) => (
        <ExperienceCard
          title={exp.title}
          startDate={exp.startDate}
          endDate={exp.endDate}
          where={exp.where}
          what={exp.what}
          tools={exp.tools}
          key={__index}
        />
      ))}
    </div>
  );
};

export default ExperiencesCards;
