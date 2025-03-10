import { Box, Container } from '@mui/material';
import { AccordionsHinos } from './components/AccordionsHinos';

export const CcbSection = () => {
  return (
    <>
      <Box
        id="box-root-ccb"
        sx={{
          fontFamily: 'Roboto, sans-serif',
          minHeight: '100vh',
          backgroundColor: '#111',
          color: '#fff',
          pt: 10,
        }}
      >
        <Container maxWidth="lg">
          <AccordionsHinos />
        </Container>
      </Box>
    </>
  );
};
