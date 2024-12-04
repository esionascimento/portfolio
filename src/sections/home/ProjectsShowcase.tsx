import React from 'react';
import { Box, Typography, Button, Card, CardContent, CardMedia, Stack, Link, Grid2 } from '@mui/material';
import { Favorite, Visibility } from '@mui/icons-material';

import ImgConsumoCombustivel from 'src/assets/home/projects/consumo-combustivel.jpeg';
import ImgAgendaTelefonica from 'src/assets/home/projects/agenda-telefonica.webp';
import { Chips } from '../components/Chips';

export const ProjectsShowcaseSection: React.FC = () => {
  return (
    <Box sx={{ marginTop: '2rem', padding: '3rem 1rem', backgroundColor: '#f9fafb' }}>
      <Stack
        spacing={2}
        alignItems="center"
        mb={4}
      >
        <Chips label="+ Trabalho selecionado" />

        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
        >
          Apresentando meus projetos
        </Typography>
        {/* <Typography
          variant="body1"
          color="textSecondary"
          textAlign="center"
          maxWidth="600px"
        >
        </Typography> */}
      </Stack>

      <Card sx={{ display: 'flex', boxShadow: 2, borderRadius: 3 }}>
        <Grid2
          container
          spacing={1}
        >
          <Grid2 size={{ xs: 12, sm: 8, md: 9.5 }}>
            <CardContent
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '2rem',
              }}
            >
              <Typography
                variant="subtitle2"
                color="secondary"
                fontWeight="bold"
                mb={1}
              >
                Visão
              </Typography>
              <Typography
                variant="h5"
                fontWeight="bold"
                mb={2}
              >
                Projeto Pessoal: AppThey
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                mb={3}
              >
                O AppThey foi criado para simplificar tarefas do dia a dia, oferecendo funcionalidades
                práticas como o cálculo de regra de três e o custo de consumo por quilômetro. Desenvolvido em
                Kotlin, o app utiliza boas práticas de programação e design para garantir uma experiência
                intuitiva e eficiente.
              </Typography>
              <Stack
                direction="row"
                spacing={2}
                mb={3}
              >
                <Favorite color="secondary" />
                <Visibility color="secondary" />
              </Stack>
              <Link
                target="_blank"
                href="https://github.com/esionascimento/appThey"
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ textTransform: 'none', borderRadius: '20px' }}
                >
                  Ver Projeto
                </Button>
              </Link>
            </CardContent>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4, md: 2.5 }}>
            <CardMedia
              component="img"
              image={ImgConsumoCombustivel}
              alt="Project Image"
              sx={{ width: '100%', objectFit: 'cover' }}
            />
          </Grid2>
        </Grid2>
      </Card>

      <br />

      <Card sx={{ display: 'flex', boxShadow: 2, borderRadius: 3 }}>
        <Grid2
          container
          spacing={1}
        >
          <Grid2 size={{ xs: 12, md: 6 }}>
            <CardContent
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '2rem',
              }}
            >
              <Typography
                variant="subtitle2"
                color="secondary"
                fontWeight="bold"
                mb={1}
              >
                Visão
              </Typography>
              <Typography
                variant="h5"
                fontWeight="bold"
                mb={2}
              >
                Projeto Pessoal: Agenda Telefônica
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                mb={3}
              >
                Simular uma agenda telefônica, Aplicação desenvolvido com ReactJS
              </Typography>
              <Stack
                direction="row"
                spacing={2}
                mb={3}
              >
                <Favorite color="secondary" />
                <Visibility color="secondary" />
              </Stack>
              <Link
                target="_blank"
                href="https://github.com/esionascimento/desafioKlever"
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ textTransform: 'none', borderRadius: '20px' }}
                >
                  Ver Projeto
                </Button>
              </Link>
            </CardContent>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <CardMedia
              component="img"
              image={ImgAgendaTelefonica}
              alt="Project Image"
              sx={{ width: '100%', objectFit: 'cover' }}
            />
          </Grid2>
        </Grid2>
      </Card>
    </Box>
  );
};
