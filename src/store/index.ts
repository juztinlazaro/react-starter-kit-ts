import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootEpic from './rootEpics';
import rootReducer from './rootReducers';

const composeEnhancers = composeWithDevTools({});
const epicMiddlerware = createEpicMiddleware();
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddlerware)),
);

epicMiddlerware.run(rootEpic);

export default store;
