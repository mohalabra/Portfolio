import { Box, Container, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

interface SectionInterface {
  title?: String;
  children: ReactNode;
}

const Section = ({ title, children }: SectionInterface) => {
  return (
    <Container maxWidth={'xl'}>
      <Box
        sx={(theme) => ({
          p: 3,
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[5],
          borderRadius: 4,
          maxWidth: '100%',
        })}
      >
        <Box
          pt={2}
          pb={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'end',
          }}
        >
          {title && (
            <Typography
              variant="h1"
              color="palette.primary"
              sx={{ fontWeight: 900, letterSpacing: '5px' }}
            >
              {title.toUpperCase()}
            </Typography>
          )}
        </Box>

        {children}
      </Box>
    </Container>
  );
};

export default Section;
