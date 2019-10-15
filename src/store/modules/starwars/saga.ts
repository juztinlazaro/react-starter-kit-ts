import { call, put, take, fork, cancel } from 'redux-saga/effects';
import {
  getStarwarsSuccess,
  getStarwarsLoading,
  getStarwarsError,
  getStarwarsConfirm,
  getPlanetsLoading,
  getPlanetsSuccess,
  getPlanetsError,
  getPlanetsCancel
} from './actions';

const api = (url: any) => fetch(url).then(response => response.json());

export function* getStarwarsSaga() {
  try {
    yield take(getStarwarsConfirm);

    yield put(getStarwarsLoading());

    const person = yield call(api, 'https://swapi.co/api/people/');

    yield put(getStarwarsSuccess(person.results));
  } catch (e) {
    yield put(getStarwarsError(e));
  }
}

export function* getPlanetsSaga() {
  try {
    yield put(getPlanetsLoading());

    const planets = yield call(api, 'https://swapi.co/api/planets/');

    yield put(getPlanetsSuccess(planets.results));
  } catch (e) {
    yield put(getPlanetsError(e));
  }
}

export function* getPlanetsFork() {
  const syncGetStarwars = yield fork(getPlanetsSaga);
  yield take(getPlanetsCancel);
  yield cancel(syncGetStarwars);
}

// function* handleInput(input: any) {
//   //...
// }

// function* watchInput() {
//   yield throttle(500, 'INPUT_CHANGES', handleInput)
// }

// export function* getStarwarsSaga(action: any) {
//   try {

//     yield put(getStarwarsLoading());

//     const person = yield call(api, 'https://swapi.co/api/people/');

//     const selector = yield select(state => state.starwars);

//     console.log('selector', selector);
//     yield

//     yield put(getStarwarsSuccess(person.results));
//   } catch (e) {
//     yield put(getStarwarsError(e));
//   }
// }
