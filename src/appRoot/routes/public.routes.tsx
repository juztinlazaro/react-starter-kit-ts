import React, { Fragment, Suspense, lazy, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { IPublicRoutes } from './interface';

const Public = lazy(() => import('module/Public/Public'));

const publicRoutesList = [
  {
    component: Public,
    exact: true,
    id: 'public-id',
    path: '/public',
  },
];

const PublicRoutes: React.SFC<IPublicRoutes> = ({ isLoggedIn }) => {
  const [publicRoutes, setRootPath] = useState(publicRoutesList);
  useEffect(() => {
    if (!isLoggedIn) {
      const newPath = [
        ...publicRoutes,
        {
          component: Public,
          exact: true,
          id: 'public-id',
          path: '/',
        },
      ];
      setRootPath(newPath);
    }
  }, [isLoggedIn]);

  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {publicRoutes.map((route: any) => (
            <Route
              key={route.id}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Suspense>
    </Fragment>
  );
};

export default PublicRoutes;
