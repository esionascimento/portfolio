import type { TypographyOptions } from '@mui/material/styles/createTypography';

export const createTypography = (): TypographyOptions => {
  return {
    body1: {
      fontSize: '0.8rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.675rem',
      fontWeight: 400,
      lineHeight: 1.57,
    },
    button: {
      fontWeight: 600,
    },
    caption: {
      fontSize: '0.55rem',
      fontWeight: 500,
      lineHeight: 1.66,
    },
    subtitle1: {
      fontSize: '0.8rem',
      fontWeight: 500,
      lineHeight: 1.57,
    },
    subtitle2: {
      fontSize: '0.675rem',
      fontWeight: 500,
      lineHeight: 1.57,
    },
    overline: {
      fontSize: '0.55rem',
      fontWeight: 600,
      letterSpacing: '0.5px',
      lineHeight: 2.5,
      textTransform: 'uppercase',
    },
    h1: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 700,
      fontSize: '3.3rem',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 700,
      fontSize: '2.8rem',
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 700,
      fontSize: '2.05rem',
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 700,
      fontSize: '1.8rem',
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 700,
      fontSize: '1.3rem',
      lineHeight: 1.2,
    },
    h6: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 700,
      fontSize: '0.925rem',
      lineHeight: 1.2,
    },
  };
};
