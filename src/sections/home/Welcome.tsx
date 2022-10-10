import { Box, Card, Container, Paper, styled } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';
import React from 'react';

const Welcome = () => {
  return (
    <Container maxWidth="lg">
      <Grid container columnSpacing={{ xs: 2, sm: 4, md: 4 }} sx={{ mt: 3 }}>
        <Grid xs={12} md={4}>
          <Card sx={{ py: 2, px: 3, height: '100%' }}>
            <Box
              sx={{
                display: 'grid',
                columnGap: 2,
                rowGap: 1,
                gridTemplateColumns: {
                  xs: 'repeat(2, 1fr)',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(1, 1fr)',
                },
                alignItems: 'center',
              }}
            >
              <Image
                alt="Remy Sharp"
                src="https://avatars.githubusercontent.com/u/74088591?v=4"
                width={'300%'}
                height={'300%'}
              />
            </Box>
          </Card>
        </Grid>
        <Grid xs={12} md={8}>
          <Card sx={{ py: 2, px: 3, height: '100%' }}>
            <Box
              sx={{
                display: 'grid',
                columnGap: 2,
                rowGap: 1,
                gridTemplateColumns: {
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(1, 1fr)',
                },
                alignItems: 'center',
              }}
            >
              <p>Olá</p>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export { Welcome };
