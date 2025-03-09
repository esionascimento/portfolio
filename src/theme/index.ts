import { useMemo } from 'react';
import type { Theme, ThemeOptions } from '@mui/material/styles/createTheme';
import { createTheme as createMuiTheme } from '@mui/material/styles';

import ComponentsOverrides from './overrides';
import palette from './palette';

export const createTheme = (): Theme => {
  const themeMode: any = 'light';
  const isLight = themeMode === 'light';

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      shape: { borderRadius: 8 },
    }),
    [isLight],
  );

  const theme = createMuiTheme(themeOptions);

  theme.components = ComponentsOverrides(theme);

  return theme;
};
