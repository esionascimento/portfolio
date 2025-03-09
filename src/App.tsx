import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import PageHome from './pages';
import LayoutDefault from './layouts/LayoutDefault';
import { createTheme } from './theme';
import './App.css';
import PageCcb from './pages/ccb';

function App() {
  const theme = createTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route element={<LayoutDefault />}>
              <Route
                path="/"
                element={<PageHome />}
              />
              <Route
                path="/ccb"
                element={<PageCcb />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
