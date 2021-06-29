import { SagaIterator } from 'redux-saga';
import { call, put, take, fork, cancel, delay, cancelled } from 'redux-saga/effects';
import { people_api, planets_api } from 'store/endpoints/starwars';
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

export const api = (url: any) => fetch(url).then(response => response.json());


export function* getStarwarsSaga(): SagaIterator {
  try {
    yield take(getStarwarsConfirm);

    yield put(getStarwarsLoading());
    const person = yield call(api, people_api);

    yield put(getStarwarsSuccess(person.results));
  } catch (e) {
    yield put(getStarwarsError(e));
  }
}

export function* getPlanetsSaga(): SagaIterator {
  try {
    yield put(getPlanetsLoading());

    const planets = yield call(api, planets_api);

    yield put(getPlanetsSuccess(planets.results));
    yield delay(5000);
  } catch (e) {
    yield put(getPlanetsError(e));
  } finally {
    if (yield cancelled()) {
      console.log('cancel');
    }
  }
}

export function* getPlanetsFork(): SagaIterator {
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
