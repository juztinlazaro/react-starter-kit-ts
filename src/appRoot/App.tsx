import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../module/Home/Home';
import './App.css';

const Test = React.lazy(() => import('../module/Test/Test'));

class App extends React.Component {
  render() {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route
            path="/test"
            component={(props: object) => <Test {...props} />}
            exact={true}
          />
          <Route
            path="/"
            component={(props: object) => <Home {...props} />}
            exact={true}
          />
        </Switch>
      </React.Suspense>
    );
  }
}

export default App;
