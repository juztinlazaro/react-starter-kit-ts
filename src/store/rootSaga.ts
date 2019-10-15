import { all, takeLatest } from 'redux-saga/effects';
import { getStarwarsRequest } from './modules/starwars/saga';
import { GET_STARTWARS_REQUEST } from './modules/starwars/types';

export default function* rootSaga() {
  yield all([takeLatest(GET_STARTWARS_REQUEST, getStarwarsRequest)]);
}
