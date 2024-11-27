import type { Theme } from '@mui/material/styles/createTheme';
import { createTheme as createMuiTheme } from '@mui/material/styles';

import { createOptions as createBaseOptions } from './base/create-options';

export const createTheme = (): Theme => {
  let theme = createMuiTheme(createBaseOptions());

  return theme;
};
