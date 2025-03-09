import { ExperienceType } from '@/src/types/types';
import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';

const ExperienceCard = ({
  title,
  startDate,
  endDate,
  what,
  where,
  tools,
}: ExperienceType) => {
  const theme = useTheme();
  return (
    <div className="shadow-lg cursor-pointer hover:animate-scale">
      <Box
        sx={{
          pt: 1,
          pb: 3,
          px: 5,
          backgroundColor: theme.palette.background.default,
          boxShadow: theme.shadows[1],
          borderRadius: 2,
          maxWidth: '100%',
        }}
      >
        <div className="text-center">
          <Typography variant="caption" className="text-blue-400">
            ({startDate} - {endDate ? endDate : 'Present'})
          </Typography>
        </div>

        <div className="flex items-center gap-4">
          <img src="/work-experience.png" alt="" className="w-16 h-16" />
          <div>
            <Typography variant="body1">{title}</Typography>
            <div className="ps-2">
              <Typography variant="body2">{where}</Typography>
              <Typography variant="body2" className="text-blue-400">
                {what}
              </Typography>
              <ul className="list-disc ps-6">
                <li>
                  <Typography variant="body2">{tools}</Typography>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default ExperienceCard;
