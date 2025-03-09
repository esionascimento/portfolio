import { Theme } from '@mui/material/styles';
import Accordion from './Accordion';

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(Accordion(theme));
}
