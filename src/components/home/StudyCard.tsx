import { FormationType } from '@/src/types/types';
import { Box, Typography } from '@mui/material';
import React from 'react';

const StudyCard = ({
  title,
  startDate,
  endDate,
  description,
  where,
}: FormationType) => {
  return (
    <div className="shadow-lg cursor-pointer hover:animate-scale">
      <Box
        sx={(theme) => ({
          p: 3,
          backgroundColor: theme.palette.background.default,
          boxShadow: theme.shadows[1],
          borderRadius: 2,
          maxWidth: '100%',
        })}
      >
        <Typography variant="body1" fontWeight={'bold'} mb={1}>
          {title.toUpperCase()}
        </Typography>
        <Box pl={{ xs: 1, md: 2 }}>
          <Typography variant="body2" fontStyle={'italic'} mb={1}>
            {endDate ? (
              <span>
                From
                <span className="text-blue-400">{` September ${startDate} `}</span>
                to
                <span className="text-blue-400">{` July ${endDate}`}</span>
              </span>
            ) : (
              <span>
                Since
                <span className="text-blue-400">{` September ${startDate}`}</span>
              </span>
            )}
          </Typography>

          <Typography variant="body2" mb={1}>
            At <span className="text-blue-400">{where}</span>
          </Typography>

          <ul className="list-disc pl-7">
            {description.map((desc: string, index) => (
              <li key={index}>
                <Typography variant="body2">{desc}</Typography>
              </li>
            ))}
          </ul>
        </Box>
      </Box>
    </div>
  );
};

export default StudyCard;
