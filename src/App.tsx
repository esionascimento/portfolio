import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PageHome from './pages';
import PageLayoutDefault from './layouts/LayoutDefault';
import './App.css';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
