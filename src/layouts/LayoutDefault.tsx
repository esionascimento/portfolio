import { ReactNode } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

import { HeaderDesktopLayoutDefault } from './components/HeaderDesktop';
import { TemporaryDrawer } from './components/HeaderMobile';

interface LayoutProps {
  children?: ReactNode;
}

const LayoutDefault = ({ children }: LayoutProps) => {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      {smUp && <HeaderDesktopLayoutDefault />}
      {!smUp && <TemporaryDrawer />}

      {children}
    </>
  );
};

export default LayoutDefault;
