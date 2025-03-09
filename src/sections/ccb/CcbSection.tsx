import { Box, Container } from '@mui/material';
import { ControlledAccordions } from './components/Accordions';

export const HomeSection = () => {
  return (
    <>
      <Box
        id="box-root-home"
        sx={{
          fontFamily: 'Roboto, sans-serif',
          minHeight: '100vh',
          backgroundColor: '#111',
          color: '#fff',
          pt: 10,
        }}
      >
        <Container maxWidth="md">
          <ControlledAccordions />
        </Container>
      </Box>
    </>
  );
};
