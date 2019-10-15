import { all, takeEvery } from 'redux-saga/effects';
import { getStarwarsSaga, getPlanetsSaga, getPlanetsFork } from './modules/starwars/saga';
import {
  GET_STARWARS_SAGA,
  GET_PLANETS_SAGA,
  GET_PLANENTS_FORK
} from './modules/starwars/types';

export default function* rootSaga() {
  yield all([
    takeEvery(GET_STARWARS_SAGA, getStarwarsSaga),
    takeEvery(GET_PLANETS_SAGA, getPlanetsSaga),
    takeEvery(GET_PLANENTS_FORK, getPlanetsFork)
  ]);
}
