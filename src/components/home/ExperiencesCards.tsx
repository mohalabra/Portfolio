import React from "react";
import ExperienceCard from "./ExperienceCard";
import { ExperienceType } from "@/src/types/types";

const experiences: ExperienceType[] = [
  {
    title: "Full Stack developer ( 6 month )",
    startDate: "June 2023",
    endDate: "December 2023",
    where: "AliDanTik IT Solusions Company Marrakech",
    what: "Paid Internship",
    tools:
      "Tools and Technologies (Backend: Nodejs | Frontend: Nextjs | DB: MongoDB, Redis)",
  },
  {
    title: "Full Stack Developer (2 month)",
    startDate: "April 2022",
    endDate: "June 2022",
    where: "International innovation platform (IIP) Marrakesh",
    what: "Final Year Project",
    tools: "Tools and Technologies (Backend: Spring Boot | Frontend: Angular )",
  },
];

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
