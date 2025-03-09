import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { Theme } from '@mui/material/styles/createTheme';
import { Link } from '@mui/material';

const Page = () => {
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          py: '80px',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            align="center"
            variant={mdUp ? 'h1' : 'h4'}
          >
            404: A página que você está procurando não está aqui
          </Typography>
          <Typography
            align="center"
            color="text.secondary"
            sx={{ mt: 0.5 }}
          >
            Ou você tentou alguma rota obscura ou veio aqui por engano. Seja qual for, tente usar a navegação.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 6,
            }}
          >
            <Button
              component={Link}
              href={'/'}
            >
              Voltar para início
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Page;
