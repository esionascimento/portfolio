import React from 'react';
import { Box, Typography } from '@mui/material';

export const RodapeSection: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
      <Typography
        variant="body2"
        color="textSecondary"
      >
        Copyright 2024 Esio Nascimento. Todos os direitos reservados.
      </Typography>
    </Box>
  );
};
