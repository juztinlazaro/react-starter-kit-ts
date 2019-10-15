import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import createSagaMiddleware from 'redux-saga';

import rootEpic from './rootEpics';
import rootReducer from './rootReducers';
import rootSaga from './rootSaga';

const composeEnhancers = composeWithDevTools({});

const sagaMiddleware = createSagaMiddleware();

const epicMiddlerware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddlerware, sagaMiddleware))
);

epicMiddlerware.run(rootEpic);
sagaMiddleware.run(rootSaga);

export default store;
