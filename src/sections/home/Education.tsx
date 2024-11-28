import React from 'react';
import { Box, Typography, Stack, Grid2, Divider } from '@mui/material';
import { Lock, School, Work } from '@mui/icons-material';

import { Chips } from '../components/Chips';

export const EducationSection: React.FC = () => {
  return (
    <Box sx={{ padding: '3rem 1rem', backgroundColor: '#f8f9fa' }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
        >
          Educação
        </Typography>

        <Chips label="+ Vida" />
      </Stack>

      <Grid2
        container
        spacing={4}
      >
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <Stack spacing={3}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
            >
              <School color="primary" />
              <Typography
                variant="h6"
                color="primary"
                fontWeight="bold"
              >
                2024 - 2026
              </Typography>
            </Stack>
            <Typography
              variant="h6"
              fontWeight="bold"
            >
              Bacharelado, Ciência da Computação
            </Typography>
            <Typography variant="body1">UNOPAR - Universidade Norte do Paraná</Typography>
            <Typography
              variant="body2"
              color="textSecondary"
            >
              Unopar, Porto Velho, RO, Brasil
            </Typography>
          </Stack>

          <Divider sx={{ my: 3 }} />

          <Stack spacing={3}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
            >
              <Lock color="primary" />
              <Typography
                variant="h6"
                color="primary"
                fontWeight="bold"
              >
                2018 - 2020
              </Typography>
            </Stack>
            <Typography
              variant="h6"
              fontWeight="bold"
            >
              Bacharelado, Ciência da Computação (interrompida)
            </Typography>
            <Typography variant="body1">
              A Universidade Federal de Rondônia (UNIR) é uma instituição de ensino superior pública federal
              brasileira, localizada no estado de Rondônia.
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
            >
              Universidade Federal de Rondônia, Porto Velho, RO, Brasil
            </Typography>
          </Stack>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 6 }}>
          <Stack spacing={3}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
            >
              <Work color="primary" />
              <Typography
                variant="h6"
                color="primary"
                fontWeight="bold"
              >
                2021 - 2022
              </Typography>
            </Stack>
            <Typography
              variant="h6"
              fontWeight="bold"
            >
              Desenvolvedor Full-Stack
            </Typography>
            <Typography variant="body1">
              A Trybe é uma escola de tecnologia focada em formar profissionais capacitados para o mercado de
              trabalho.
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
            >
              Trybe, Porto Velho, RO, Brasil
            </Typography>
          </Stack>
        </Grid2>
      </Grid2>
    </Box>
  );
};
