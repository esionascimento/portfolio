import { Box, Button, Container, Typography, useMediaQuery, useTheme } from '@mui/material';

export const HomeSection = () => {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <Box
        id="box-root-home"
        sx={{
          fontFamily: 'Roboto, sans-serif',
          minHeight: '100vh',
          backgroundColor: '#111',
          color: '#fff',
          ...{
            marginTop: smUp ? 0 : '50px',
          },
          alignContent: 'center',
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 3,
            background: 'linear-gradient(135deg, #FFA726, #AB47BC)',
            borderRadius: 2,
          }}
        >
          <Box>
            <Typography
              variant={smUp ? 'h4' : 'h6'}
              gutterBottom
            >
              Olá! Eu sou Esio Nascimento
            </Typography>
            <Typography
              variant={smUp ? 'h2' : 'h4'}
              fontWeight="bold"
              gutterBottom
            >
              Desenvolvedor Full-Stack
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
            >
              Sou Desenvolvedor Web, curioso, criativo e sempre em busca de desafios que ampliem minhas
              competências. Apaixonado por segurança cibernética, concluí o Certificado de Segurança do Google
              e almejo proteger informações valiosas contra ameaças. Quero desenvolver uma mentalidade hacker
              e conectar-me a profissionais experientes para aprender e colaborar.
            </Typography>
            <Box sx={{ marginTop: 3 }}>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=5569992577460&text=Olá&type=phone_number&app_absent=0"
              >
                <Button
                  id="button-me-contrate"
                  variant="contained"
                  color="primary"
                  sx={{ marginRight: 2 }}
                >
                  me contrate
                </Button>
              </a>
              <a
                href="/src/assets/profile.pdf"
                download={'esio-nascimento-curriculum-vitae.pdf'}
              >
                <Button
                  variant="contained"
                  color="primary"
                >
                  Download CV
                </Button>
              </a>
            </Box>
          </Box>

          {/* TODO: adicionar imagem */}
          <Box
            sx={{
              width: '40%',
              backgroundImage: 'url(/your-image.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '300px',
              borderRadius: '10px',
            }}
          ></Box>
        </Container>

        <Container
          maxWidth="lg"
          sx={{ textAlign: 'center', marginTop: 5 }}
        >
          <Box
            display="flex"
            justifyContent="space-around"
          >
            <Box>
              <Typography variant="h4">5+</Typography>
              <Typography>Projeto concluído</Typography>
            </Box>
            <Box>
              <Typography variant="h4">3+</Typography>
              <Typography>Anos de experiência</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
