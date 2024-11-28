import { Box, Button, Grid2, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { Chips } from '../components/Chips';

export const AboutMeSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f8f9fa',
        color: '#111',
        padding: '3rem 1rem',
        borderRadius: 2,
        marginTop: '2rem',
      }}
    >
      <Grid2
        container
        spacing={4}
        alignItems="center"
      >
        <Grid2 size={{ xs: 12, sm: 4 }}>
          <Chips label="+ Sobre mim" />

          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
          >
            Olá! Eu sou Esio Nascimento
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
          >
            Sou Desenvolvedor Web, curioso, criativo e sempre em busca de desafios para expandir meus
            conhecimentos e habilidades. Tenho uma grande paixão por segurança cibernética, pois ela me
            permite proteger dados valiosos contra ameaças e agentes mal-intencionados. Recentemente, concluí
            o Certificado de Segurança Cibernética do Google e estou comprometido em desenvolver uma
            mentalidade hacker para enfrentar as técnicas de ataque em constante evolução. Quero me conectar
            com outros profissionais do setor para aprender e colaborar. Vamos trocar experiências?
          </Typography>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 8 }}>
          <Grid2
            container
            spacing={3}
          >
            <Grid2 size={{ xs: 6, sm: 4 }}>
              <Typography fontWeight="bold">Contato</Typography>
              <Typography>esio.rsn1@gmail.com</Typography>
            </Grid2>
            <Grid2 size={{ xs: 6, sm: 4 }}>
              <Typography fontWeight="bold">Telefone</Typography>
              <Typography>+55 (69)9 9257-7460</Typography>
            </Grid2>
            <Grid2 size={{ xs: 6, sm: 4 }}>
              <Typography fontWeight="bold">Data de nascimento</Typography>
              <Typography>Março 25, 1998</Typography>
            </Grid2>
            <Grid2 size={{ xs: 6, sm: 4 }}>
              <Typography fontWeight="bold">Línguas faladas</Typography>
              <Typography>Português</Typography>
            </Grid2>
            <Grid2 size={{ xs: 6, sm: 4 }}>
              <Typography fontWeight="bold">Interesse</Typography>
              <Typography>Música, Leitura, Viagem</Typography>
            </Grid2>
            <Grid2 size={{ xs: 6, sm: 4 }}>
              <Typography fontWeight="bold">Mídias sociais</Typography>
              <Box>
                <Button
                  size="small"
                  sx={{
                    backgroundColor: '#0077b5',
                    color: '#fff',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    minWidth: '30px',
                    marginRight: '0.5rem',
                  }}
                >
                  <LinkedInIcon />
                </Button>
                <Button
                  size="small"
                  sx={{
                    backgroundColor: '#7289DA',
                    color: '#fff',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    minWidth: '30px',
                    marginRight: '0.5rem',
                  }}
                >
                  <InstagramIcon />
                </Button>
                <Button
                  size="small"
                  sx={{
                    backgroundColor: '#25D366',
                    color: '#fff',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    minWidth: '30px',
                  }}
                >
                  <WhatsAppIcon />
                </Button>
              </Box>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};
