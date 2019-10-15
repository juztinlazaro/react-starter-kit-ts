import { handleActions } from 'redux-actions';
import { getStarwarsSuccess, getStarwarsLoading, getStarwarsError } from './actions';
import Model from './model';

export interface IStarwarsReducer {
  starwars?: any;
  loading: boolean;
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
    [onActionString(getStarwarsLoading)]: (state: object, action: any) => ({
      ...state,
      loading: true
    }),
    [onActionString(getStarwarsSuccess)]: (state: object, action: any) => ({
      ...state,
      starwars: action.payload,
      error: null,
      loading: false
    }),
    [onActionString(getStarwarsError)]: (state: object, action: any) => ({
      ...state,
      error: action.payload,
      loading: false
    })
  },
  Model
);
