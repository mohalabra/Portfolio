import React from 'react';
import StudyCard from './StudyCard';
import { FormationType } from '@/src/types/types';
import { FORMATIONS } from '@/src/data/formations.data';

const StudyCards = () => {
  return (
    <div className="flex-col space-y-4">
      {FORMATIONS.map((formation: FormationType, __index) => (
        <StudyCard
          title={formation.title}
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
