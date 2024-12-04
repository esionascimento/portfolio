import React, { useEffect, useState } from 'react';
import { Box, Button, Grid2, Typography, Stack, Container } from '@mui/material';
import { Phone, Email } from '@mui/icons-material';

interface IUserGithub {
  name: string;
  avatar_url: string;
}

export const ContactSection: React.FC = () => {
  const [userGithub, setUserGithub] = useState<IUserGithub>();

  useEffect(() => {
    async function fetchGithub() {
      const response = await fetch(`https://api.github.com/users/esionascimento`);
      const response_1 = await response.json();
      setUserGithub(response_1);
    }
    fetchGithub();
  }, []);

  return (
    <Box sx={{ backgroundColor: '#0a0a0a', color: '#fff', padding: '4rem 1rem', position: 'relative' }}>
      <Container maxWidth="lg">
        <Grid2
          container
          spacing={4}
          alignItems="center"
        >
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              mb={2}
            >
              Tem um projeto em mente? <br /> Vamos trabalhar.
            </Typography>
            <a
              target="_blank"
              href={`https://api.whatsapp.com/send/?phone=5569992577460&text=Olá! 👋 Vi que você é desenvolvedor e estou interessado nos seus serviços.&type=phone_number&app_absent=0`}
            >
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  textTransform: 'none',
                  borderRadius: '30px',
                  padding: '0.8rem 2rem',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                }}
              >
                Diga Olá
              </Button>
            </a>
          </Grid2>

          <Grid2
            size={{ xs: 12, md: 6 }}
            display="flex"
            justifyContent="center"
          >
            <img
              src={userGithub?.avatar_url}
              alt="Pessoa com laptop"
              style={{ borderRadius: '10px', height: '200px', width: '200px' }}
            />
          </Grid2>
        </Grid2>

        <Box
          sx={{
            backgroundColor: '#7b2cff',
            borderRadius: '20px',
            marginTop: '3rem',
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <Grid2
            container
            spacing={4}
          >
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Stack
                direction="column"
                alignItems="center"
                spacing={1}
              >
                <Phone sx={{ fontSize: '2rem', color: '#fff' }} />
                <Typography
                  variant="body1"
                  fontWeight="bold"
                >
                  +55 (69)9 9257-7460
                </Typography>
              </Stack>
            </Grid2>

            <Grid2 size={{ xs: 12, md: 4 }}>
              <Stack
                direction="column"
                alignItems="center"
                spacing={1}
              >
                <Email sx={{ fontSize: '2rem', color: '#fff' }} />
                <Typography
                  variant="body1"
                  fontWeight="bold"
                >
                  esio.rsn1@gmail.com
                </Typography>
              </Stack>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Box>
  );
};
