import { IStarwarsReducer } from "./modules/starwars/reducers";

export interface IRootReducer {
  starwars: IStarwarsReducer;
}
