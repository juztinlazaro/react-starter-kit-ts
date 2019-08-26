import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import PublicRoutes from './public.routes';

interface IBaseRoutes {
  isLoggedIn: boolean;
}

const Routes: React.SFC<IBaseRoutes> = ({ isLoggedIn }) => {
  const [CombineRoutes, setCombineRoutes] = React.useState(
    PublicRoutes(isLoggedIn),
  );

  React.useEffect(() => {
    if (isLoggedIn) {
      import('./private.routes').then((module: any) => {
        setCombineRoutes([
          ...PublicRoutes(isLoggedIn),
          ...module.default(isLoggedIn),
        ]);
      });
    } else {
      setCombineRoutes([...PublicRoutes(isLoggedIn)]);
    }
  }, [isLoggedIn]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {CombineRoutes.map((route: any) => (
          <Route
            key={route.id}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ))}

        {!isLoggedIn && <Route component={() => <h2>404 public</h2>} />}
      </Switch>
    </Suspense>
  );
};

export default Routes;
