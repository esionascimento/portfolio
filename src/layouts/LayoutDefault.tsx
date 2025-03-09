import { ReactNode } from 'react';
import { AppBar, Box, Button, Link, Toolbar, useMediaQuery, useTheme } from '@mui/material';

interface LayoutProps {
  children?: ReactNode;
}

const LayoutDefault = ({ children }: LayoutProps) => {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      {smUp && (
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
      )}

      {children}
    </>
  );
};

export default LayoutDefault;
