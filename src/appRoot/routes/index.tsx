import React, { Suspense, useState, useEffect, lazy } from 'react';
import PublicRoutes from './public.routes';

interface IBaseRoutes {
  isLoggedIn: boolean;
}

const Routes: React.SFC<IBaseRoutes> = ({ isLoggedIn }) => {
  const [PrivateRoutes, setRoutes] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      const privateLazy = lazy(() => import('./private.routes'));
      setRoutes(privateLazy);
    }
  }, [isLoggedIn]);

  return (
    <React.Fragment>
      <PublicRoutes isLoggedIn={isLoggedIn} />

      {isLoggedIn && PrivateRoutes && (
        <Suspense fallback={<div>loading..</div>}>
          <PrivateRoutes isLoggedIn={isLoggedIn} />
        </Suspense>
      )}
    </React.Fragment>
  );
};

export default Routes;
