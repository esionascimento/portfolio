import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

const LayoutDefault = () => {
  return (
    <>
      <AppBar
        position="static"
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
            <Button
              color="inherit"
              sx={{ marginLeft: 2 }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              sx={{ marginLeft: 2 }}
            >
              Sobre mim
            </Button>
            <Button
              color="inherit"
              sx={{ marginLeft: 2 }}
            >
              Projetos
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginLeft: 2 }}
            >
              Vamos conversar
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};

export default LayoutDefault;
