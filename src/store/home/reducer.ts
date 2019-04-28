import { handleActions } from 'redux-actions';
import {
  getHomeDataSuccess,
  getHomeDataError,
  getHomeDataLoading,
} from './actions';
import Model from './model';

interface IHomeReducer {
  homeData: object;
  loading: boolean;
}

interface IPayload {
  payload: object;
}

const onActionString = (action: any) => {
  return action.toString();
};

export default handleActions<IHomeReducer, IPayload>(
  {
    [onActionString(getHomeDataSuccess)]: (state: object, action: any) => ({
      ...state,
      homeData: action.payload,
      loading: false,
    }),
    [onActionString(getHomeDataLoading)]: state => ({
      ...state,
      loading: true,
    }),
    [onActionString(getHomeDataError)]: (state, action) => ({
      ...state,
      error: action.payload,
      loading: false,
    }),
  },
  Model,
);
