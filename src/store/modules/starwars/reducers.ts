import { handleActions } from 'redux-actions';
import {
  getStarwarsSuccess,
  getStarwarsLoading,
  getStarwarsError,
  getPlanetsLoading,
  getPlanetsSuccess,
  getPlanetsError,
  getPlanetsCancel
} from './actions';
import Model from './model';
import { GET_PLANETS_SUCCESS } from './types';

export interface IStarwarsReducer {
  starwars?: any;
  loading: boolean;
  planets?: any;
  error?: any;
  success?: any;
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
      loading: true,
      success: {
        type: '',
        status: false
      },
      error: {
        type: '',
        status: false,
        message: ''
      }
    }),
    [onActionString(getPlanetsSuccess)]: (state: IStarwarsReducer, action: any) => ({
      ...state,
      planets: action.payload,
      error: null,
      loading: false,
      success: {
        type: GET_PLANETS_SUCCESS,
        status: true
      }
    }),
    [onActionString(getPlanetsError)]: (state: IStarwarsReducer, action: any) => ({
      ...state,
      loading: false,
      error: {
        type: GET_PLANETS_SUCCESS,
        status: true,
        message: action.payload
      }
    }),
    [onActionString(getPlanetsCancel)]: (state: IStarwarsReducer, action: any) => ({
      ...state,
      loading: false
    })
  },
  Model
);
