import { IHomeReducer } from './modules/home/reducer';
import { IStarwarsReducer } from './modules/starwars/reducers';

export interface IRootReducer {
  homes: IHomeReducer;
  starwars: IStarwarsReducer;
}
