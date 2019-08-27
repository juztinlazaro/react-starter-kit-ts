import { combineReducers } from 'redux';

import { IRootReducer } from './rootReducer.interface';
import homeReducer from './modules/home/reducer';

const rootReducers = combineReducers<IRootReducer>({
  homes: homeReducer,
});

export default rootReducers;
