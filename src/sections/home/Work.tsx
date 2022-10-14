import React from 'react';
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  CssBaseline,
  Fab,
  Fade,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import Image from 'next/image';
import Grid from '@mui/material/Unstable_Grid2';
import { configWelcome } from 'src/config/navbar';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { configCardWork } from 'src/config/home/Body';
import Link from 'next/link';
import { MotionImage } from 'src/components/Motion/Image';

const Work = (props) => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
        <Typography variant="h3" component="h2" gutterBottom>
          {'portfólio'.toUpperCase()}
        </Typography>
      </Box>

      <Container maxWidth={false}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} sx={{ mt: 3 }}>
          {configCardWork?.map((data) => {
            return (
              <Grid xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    py: 2,
                    px: 3,
                    height: '100%',
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        display: 'grid',
                        columnGap: 2,
                        rowGap: 1,

                        alignItems: 'center',
                      }}
                    >
                      <MotionImage
                        src={data?.image}
                        width={'100%'}
                        height={'50%'}
                        layout={'responsive'}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: 'grid',
                        columnGap: 2,
                        rowGap: 1,
                        gridTemplateColumns: {
                          xs: 'repeat(1, 1fr)',
                          sm: 'repeat(1, 1fr)',
                        },
                        alignItems: 'center',
                      }}
                    >
                      <Typography variant="h5" gutterBottom mt={1}>
                        {data.title}
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>
                        {data.text}
                      </Typography>
                      <Box sx={{ b: 0 }}>
                        <Stack direction="row" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                          {data?.chip.map((chip) => {
                            console.log('chip: ', chip);
                            return <Chip label={chip} variant="outlined" sx={{ mr: 1, mt: 1 }} />;
                          })}
                        </Stack>
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Button sx={{ color: 'white' }}>
                      <Link href={data.reposity} passHref>
                        <a style={{ color: 'white', textDecoration: 'none' }} target="_blank">
                          Repositório
                        </a>
                      </Link>
                    </Button>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export { Work };
