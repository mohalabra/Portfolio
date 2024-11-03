import React from "react";
import StudyCard from "./StudyCard";
import { FormationType } from "@/src/types/types";

const formations: FormationType[] = [
  {
    name: "MASTER OF SCIENCES AND TECHNIQUES (MST)",
    startDate: 2023,
    where: "Faculty of Sciences and Techniques Marrakesh, Morocco",
    description: [
      "Master's in Artificial Intelligence and Computer Engineering.",
      "Relevant courses: Deep Learning, Machine Learning, Data Analysis, Power BI , DevOps, Recommendation systems ...",
    ],
  },
  {
    name: "Bachelor Of SCIENCES And TECHNQUES (LST)",
    startDate: 2021,
    endDate: 2022,
    where: "Faculty of Sciences and Techniques Marrakesh, Morocco",
    description: [
      "Bachelor's in Distributed Computer Systems",
      "Relevant courses: Linux, DBMS/RDBMS, Computer Networks, Distributed Architectures ...",
    ],
  },
  {
    name: "Diploma of Scientific and Technical University Studies (DEUST)",
    startDate: 2019,
    endDate: 2021,
    where: "Faculty of Sciences and Techniques Marrakesh, Morocco",
    description: [
      "Mathematics, Computer Science, Physics, Chemistry (MIPC) Field",
      "Relevant courses: Data Structure (C Language), Algebra, Analysis, Quantum mechanics, Chemistry ...",
    ],
  },
  {
    name: "PROFESSIONAL BACCALAUREATE",
    startDate: 2019,
    endDate: 2018,
    where: "Mohammed VI School Marrakesh, Morocco",
    description: [
      "Electrotechnics and Communicating Equipment Field",
    ],
  },
];

const StudyCards = () => {
  return (
    <div className="flex-col space-y-4">
      {formations.map((formation: FormationType, __index) => (
        <StudyCard
          name={formation.name}
          startDate={formation.startDate}
          endDate={formation?.endDate}
          where={formation.where}
          description={formation.description}
          key={__index}
        />
      ))}
    </div>
  );
};

export default StudyCards;
