import { combineReducers } from 'redux';

import homeReducer from './home/reducer';

const rootReducers = combineReducers({
  homes: homeReducer,
} as any);

export default rootReducers;
