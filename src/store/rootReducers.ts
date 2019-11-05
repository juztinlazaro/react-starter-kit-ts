import { combineReducers } from "redux";

import { IRootReducer } from "./rootReducer.interface";
import StarwarsReducer from "./modules/starwars/reducers";

const rootReducers = combineReducers<IRootReducer>({
  starwars: StarwarsReducer,
});

export default rootReducers;
