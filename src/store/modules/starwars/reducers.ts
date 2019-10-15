import { handleActions } from 'redux-actions';
import {
  getStarwarsSuccess,
  getStarwarsLoading,
  getStarwarsError,
  getPlanetsLoading,
  getPlanetsSuccess,
  getPlanetsError
} from './actions';
import Model from './model';

export interface IStarwarsReducer {
  starwars?: any;
  loading: boolean;
  planets?: any;
  error?: any;
}

interface IPayload {
  payload: object;
}

const onActionString = (action: any) => {
  return action.toString();
};

export default handleActions<IStarwarsReducer, IPayload>(
  {
    [onActionString(getStarwarsLoading)]: (state: IStarwarsReducer, action: any) => ({
      ...state,
      loading: true
    }),
    [onActionString(getStarwarsSuccess)]: (state: IStarwarsReducer, action: any) => ({
      ...state,
      starwars: action.payload,
      error: null,
      loading: false
    }),
    [onActionString(getStarwarsError)]: (state: IStarwarsReducer, action: any) => ({
      ...state,
      error: action.payload,
      loading: false
    }),
    [onActionString(getPlanetsLoading)]: (state: IStarwarsReducer, action: any) => ({
      ...state,
      loading: true
    }),
    [onActionString(getPlanetsSuccess)]: (state: IStarwarsReducer, action: any) => ({
      ...state,
      planets: action.payload,
      error: null,
      loading: false
    }),
    [onActionString(getPlanetsError)]: (state: IStarwarsReducer, action: any) => ({
      ...state,
      error: action.payload,
      loading: false
    })
  },
  Model
);
