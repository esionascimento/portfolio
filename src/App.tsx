import { useRoutes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { createTheme } from './theme';
import { routes } from './routes';
import './App.css';

function App() {
  const theme = createTheme();

  const element = useRoutes(routes);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {element}
      </ThemeProvider>
    </>
  );
}

export default App;
