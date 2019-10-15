import { handleActions } from 'redux-actions';
import { getStarwarsSuccess } from './actions';
import Model from './model';

export interface IStarwarsReducer {
  starwars: object;
  loading: boolean;
}

interface IPayload {
  payload: object;
}

const onActionString = (action: any) => {
  return action.toString();
};

export default handleActions<IStarwarsReducer, IPayload>(
  {
    [onActionString(getStarwarsSuccess)]: (state: object, action: any) => ({
      ...state,
      starwars: action.payload,
      loading: false
    })
  },
  Model
);
