import { lazy } from 'react';

const Home = lazy(() => import('../../module/Home/Home'));
const Test = lazy(() => import('../../module/Test/Test'));

const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/test',
    component: Test,
  },
];

export default publicRoutes;