import { AppBar, Box, Button, Link, Toolbar } from '@mui/material';

export const HeaderDesktopLayoutDefault = () => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: '#000' }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/">
              <Button color="inherit">Nascimento</Button>
            </Link>
          </Box>
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
    </>
  );
};
