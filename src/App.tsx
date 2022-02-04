import { FC } from 'react';
import { useRoutes } from 'react-router-dom';

import { Main, About } from './pages';

export const App: FC = () => {
  const routes = useRoutes([
    { path: '/', element: <Main /> },
    { path: 'about', element: <About /> },
  ]);
  return routes;
};
