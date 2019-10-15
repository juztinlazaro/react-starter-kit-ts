import { combineReducers } from 'redux';

import { IRootReducer } from './rootReducer.interface';
import homeReducer from './modules/home/reducer';
import StarwarsReducer from './modules/starwars/reducers';

const rootReducers = combineReducers<IRootReducer>({
  homes: homeReducer,
  starwars: StarwarsReducer
});

export default rootReducers;
