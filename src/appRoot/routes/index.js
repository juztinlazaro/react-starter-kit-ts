import React, { Component, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PublicRoutes from './public.routes';

class Routes extends Component {
  state = {
    auth: true,
    routes: [],
  };

  componentDidMount() {
    //   will be change after the implementation of auth0
    if (this.state.auth) {
      this.setState({
        routes: [...PublicRoutes],
      });
    } else {
      this.setState({
        routes: [...PublicRoutes],
      });
    }
  }

  render() {
    const { routes } = this.state
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map(r => {
            return (
              <Route
                key={r.path}
                path={r.path}
                component={
                  r.async ? props => <r.component {...props} /> : r.component
                }
                exact
              />
            );
          })}
          {!this.state.auth && <Redirect to="/login" />}
          <Route component={() => <h1>404 no page found</h1>} />
        </Switch>
      </Suspense>
    );
  }
}

export default Routes;