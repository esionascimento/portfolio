import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

const LayoutDefault = () => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: '#000' }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
          >
            Nascimento
          </Typography>
          <Box>
            <Link href="/#home">
              <Button
                color="inherit"
                sx={{ marginLeft: 2 }}
              >
                Home
              </Button>
            </Link>
            <Link href="/#sobre-mim">
              <Button
                color="inherit"
                sx={{ marginLeft: 2 }}
              >
                Sobre mim
              </Button>
            </Link>
            <Link href="/#projetos">
              <Button
                color="inherit"
                sx={{ marginLeft: 2 }}
              >
                Projetos
              </Button>
            </Link>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=5569992577460&text=Olá&type=phone_number&app_absent=0"
            >
              <Button
                id="button-vamos-conversar"
                variant="contained"
                color="primary"
                sx={{ marginLeft: 2 }}
              >
                Vamos conversar
              </Button>
            </a>
          </Box>
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};

export default LayoutDefault;
