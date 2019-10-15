import { all, takeLatest } from 'redux-saga/effects';
import { getStarwarsSaga } from './modules/starwars/saga';
import { GET_STARWARS_SAGA } from './modules/starwars/types';

export default function* rootSaga() {
  yield all([takeLatest(GET_STARWARS_SAGA, getStarwarsSaga)]);
}
