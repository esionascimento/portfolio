import { Box, Card, Container, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';

const Footer = () => {
  return (
    <Card sx={{ py: 2, px: 3, mt: 5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box>
          <Typography variant="h6" gutterBottom>
            Feito por Esio Rodrigues da Silva Nascimento
          </Typography>
          <Typography variant="body1">2022</Typography>
        </Box>
      </Box>
    </Card>
  );
};

export { Footer };
