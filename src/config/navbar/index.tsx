export const configTabs = ['Home', 'Skills', 'Sobre mim'];
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { TypesWelcome } from 'src/@types/welcome';

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
