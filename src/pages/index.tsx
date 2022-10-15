import * as React from 'react';
import NavbarHorizontal from 'src/components/Navbar';
import { configTabs } from 'src/config/navbar';
import { Welcome, Work } from 'src/sections/home';
import { Box, Fab, Fade, Toolbar, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Footer } from 'src/components/Footer';

function ScrollTop(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

const Home = (props: any) => {
  return (
    <>
      <NavbarHorizontal pages={configTabs} />
      <Toolbar id="back-to-top-anchor" />
      <Welcome />

      <Work />

      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

      <Footer />
    </>
  );
};

export default Home;
