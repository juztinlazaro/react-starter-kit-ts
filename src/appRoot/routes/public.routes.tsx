import { lazy } from 'react';

const Public = lazy(() => import('module/Public/Public'));
const Starwars = lazy(() => import('module/Starwars/Starwars'));

const publicRoutesList = [
  {
    component: Public,
    exact: true,
    id: 'public-id',
    path: '/public'
  },
  {
    component: Starwars,
    exact: true,
    id: 'starwars-id',
    path: '/starwars'
  }
];

const PublicRoutes = (isLoggedIn: boolean) => {
  let publicRoutes = publicRoutesList;

  if (!isLoggedIn) {
    publicRoutes = [
      ...publicRoutesList,
      {
        component: Public,
        exact: true,
        id: 'public-id',
        path: '/'
      }
    ];
  }

  return publicRoutes;
};

export default PublicRoutes;
