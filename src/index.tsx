import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'rxjs';
import { BrowserRouter } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import App from './appRoot/App';
import rootEpic from './store/rootEpics';
import rootReducer from './store/rootReducers';
import * as serviceWorker from './serviceWorker';

import './assets/css/main.scss';

const composeEnhancers =
  /* tslint:disable-next-line:no-string-literal */
  (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

const epicMiddlerware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddlerware)),
);

epicMiddlerware.run(rootEpic);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
