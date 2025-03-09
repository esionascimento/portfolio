import { Box, Container } from '@mui/material';
import { AccordionsHinos } from './components/AccordionsHinos';

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
          <AccordionsHinos />
        </Container>
      </Box>
    </>
  );
};
