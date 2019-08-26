import { combineReducers } from 'redux';

import homeReducer from './home/reducer';

const rootReducers = combineReducers({
  homes: homeReducer,
});

export default rootReducers;
