import { all, takeLatest } from 'redux-saga/effects';
import { getStarwarsSaga, getPlanetsSaga } from './modules/starwars/saga';
import { GET_STARWARS_SAGA, GET_PLANETS_SAGA } from './modules/starwars/types';

export default function* rootSaga() {
  yield all([
    takeLatest(GET_STARWARS_SAGA, getStarwarsSaga),
    takeLatest(GET_PLANETS_SAGA, getPlanetsSaga)
  ]);
}
