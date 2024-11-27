import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import PageHome from './pages';
import PageLayoutDefault from './layouts/LayoutDefault';
import { createTheme } from './theme';
import './App.css';

function App() {
  const theme = createTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route element={<PageLayoutDefault />}>
              <Route
                path="/"
                element={<PageHome />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
