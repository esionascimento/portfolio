import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { TypesWelcome, TypesWelcomeRedes } from 'src/@types';
import { Button, Typography } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const configCardWork = [
  {
    title: 'Este Portifólio',
    text: 'Projeto criado com NextJS, Material UI, TypeScript',
    chip: ['ReactJS', 'NextJS', 'TypeScript'],
    image: '',
    reposity: 'https://github.com/esionascimento/portfolio',
  },
  {
    title: 'FoodNas',
    text: 'Gestor de Pedidos - Utilizando API do Ifood, criado Frond e Back-end',
    chip: ['ReactJS', 'NodeJS'],
    image: '/image/foodnas.webp',
    reposity: 'https://github.com/esionascimento/foodNas',
  },
  {
    title: 'Calculadora de Tintas',
    text: 'Simular a quantidade de tinta nescessario para pintar uma parede.',
    chip: ['ReactJS'],
    image: '/image/simular-tinta.webp',
    reposity: 'https://github.com/esionascimento/desafioDigitalRepublic',
  },
  {
    title: 'Agenda Telefonica',
    text: 'Simular uma agenda telefonica, Aplicação desenvolvido com ReactJS',
    chip: ['ReactJS'],
    image: '/image/agenda-telefonica.webp',
    reposity: 'https://github.com/esionascimento/desafioKlever',
  },
];

export const configWelcomeRedes: TypesWelcomeRedes[] = [
  {
    text: 'Whatsapp',
    icon: <WhatsAppIcon sx={{ mr: 1 }} />,
    href: 'https://api.whatsapp.com/send?phone=5569992577460',
    sx: {
      variant: 'subtitle1',
      button: {
        display: 'flex',
        alignItems: 'start',
      },
      typography: {
        display: { xs: 'none', xp: 'flex' },
      },
    },
    renderCustom: (data) => {
      return (
        <Button sx={{ ...data?.sx?.button }}>
          {data?.icon}
          <Typography variant={data?.sx?.variant} gutterBottom sx={{ ...data?.sx?.typography }}>
            {data.text}
          </Typography>
        </Button>
      );
    },
  },
  {
    text: 'Github',
    href: 'https://github.com/esionascimento',
    icon: <GitHubIcon sx={{ mr: 1 }} />,
    sx: {
      variant: 'subtitle1',
      button: {
        display: 'flex',
        alignItems: 'start',
      },
      typography: {
        display: { xs: 'none', xp: 'flex' },
      },
    },
    renderCustom: (data) => {
      return (
        <Button sx={{ ...data?.sx?.button }}>
          {data?.icon}
          <Typography variant={data?.sx?.variant} gutterBottom sx={{ ...data?.sx?.typography }}>
            {data.text}
          </Typography>
        </Button>
      );
    },
  },
  {
    text: 'Linkedin',
    href: 'https://www.linkedin.com/in/esionascimento/',
    icon: <LinkedInIcon sx={{ mr: 1 }} />,
    sx: {
      variant: 'subtitle1',
      button: {
        display: 'flex',
        alignItems: 'start',
      },
      typography: {
        display: { xs: 'none', xp: 'flex' },
      },
    },
    renderCustom: (data) => {
      return (
        <Button sx={{ ...data?.sx?.button }}>
          {data?.icon}
          <Typography variant={data?.sx?.variant} gutterBottom sx={{ ...data?.sx?.typography }}>
            {data.text}
          </Typography>
        </Button>
      );
    },
  },
];

export const configWelcome: TypesWelcome[] = [
  { text: 'Olá, Mundo!', sx: { variant: 'h6' } },
  {
    text: 'Desenvolvedor Full Stack',
    icon: <WorkIcon sx={{ mr: 1 }} />,
    sx: { variant: 'subtitle1' },
  },
  {
    text: 'Porto Velho - RO',
    icon: <LocationOnIcon sx={{ mr: 1 }} />,
    sx: { variant: 'subtitle1' },
  },
  {
    text: 'Sou um desenvolvedor de software autodidata e muito dedicado com experiência na construção de sites e APIs Rest.',
    sx: { variant: 'subtitle1' },
  },
];
