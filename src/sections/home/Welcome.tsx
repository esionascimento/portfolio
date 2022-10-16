import { useState } from 'react';
import { Box, Card, Container, styled, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';
import { configWelcome } from 'src/config/navbar';
import { motion } from 'framer-motion';
import { MotionImage } from 'src/components/Motion/Image';

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

// const StyledBox = styled(Box)(({ theme }: any) => ({
//   [theme.breakpoints.up('xs')]: {
//     // display: 'none',
//     border: '5px solid red',
//   },
//   [theme.breakpoints.up('xp')]: {
//     // display: 'none',
//     border: '5px solid orange',
//   },
//   [theme.breakpoints.up('sm')]: {
//     display: 'flex',
//     border: '5px solid black',
//   },
// }));

const Welcome = () => {
  const [isInView, setIsInView] = useState(false);

  return (
    <Container maxWidth="lg">
      <Grid container columnSpacing={{ xs: 2, sm: 4, md: 4 }} sx={{ mt: 5 }}>
        <Grid xs={12} md={4}>
          <Card sx={{ py: 2, px: 3, height: '100%' }}>
            <Box
              sx={{
                display: 'grid',
                columnGap: 2,
                rowGap: 1,
                gridTemplateColumns: {
                  xs: 'repeat(1, 1fr)',
                  xp: 'repeat(2, 1fr)',
                  md: 'repeat(1, 1fr)',
                },
              }}
            >
              <motion.div
                initial={false}
                animate={
                  true && isInView
                    ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                    : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                }
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
                onViewportEnter={() => setIsInView(true)}
              >
                <MotionImage
                  src={'https://avatars.githubusercontent.com/u/74088591?v=4'}
                  width={'100%'}
                  height={'100%'}
                  layout={'responsive'}
                />
              </motion.div>
              <Box
                sx={{
                  ml: 1,
                  display: { xs: 'none', xp: 'flex', sm: 'flex', md: 'none' },
                  flexDirection: 'column',
                }}
              >
                {configWelcome?.map((data, index: number) => (
                  <Box key={index} display={'flex'}>
                    {data?.icon}
                    <Typography variant={data?.sx?.variant} gutterBottom>
                      {data.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid xs={12} md={8}>
          {/* display: { xs: 'none', xp: 'flex', sm: 'flex', md: 'none' }, */}
          <Card
            sx={{ py: 2, px: 3, height: '100%', display: { xs: 'block', xp: 'none', md: 'block' } }}
          >
            <Box
              sx={{
                display: { xs: 'block', xp: 'none', md: 'block' },
              }}
            >
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
                {configWelcome?.map((data, index: number) => (
                  <Box key={index} display={'flex'}>
                    {data?.icon}
                    <Typography variant={data?.sx?.variant} gutterBottom>
                      {data.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export { Welcome };
