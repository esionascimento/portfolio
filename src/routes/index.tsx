import { lazy } from 'react';
import type { RouteObject } from 'react-router';
import { Outlet } from 'react-router-dom';

import LayoutDefault from 'src/layouts/LayoutDefault';
const HomePage = lazy(() => import('src/pages/index'));
const PageCcb = lazy(() => import('src/pages/ccb'));

export const routes: RouteObject[] = [
  {
    element: (
      <LayoutDefault>
        <Outlet />
      </LayoutDefault>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'ccb',
        element: <PageCcb />,
      },
    ],
  },
];
