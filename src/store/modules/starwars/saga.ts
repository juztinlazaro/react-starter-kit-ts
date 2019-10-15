import { call, put, take } from 'redux-saga/effects';
import {
  getStarwarsSuccess,
  getStarwarsLoading,
  getStarwarsError,
  getStarwarsConfirm
} from './actions';

const api = (url: any) => fetch(url).then(response => response.json());

export function* getStarwarsRequest(action: any) {
  try {
    yield take(getStarwarsConfirm);

    yield put(getStarwarsLoading());

    const person = yield call(api, 'https://swapi.co/api/people/');

    yield put(getStarwarsSuccess(person.results));
  } catch (e) {
    yield put(getStarwarsError(e));
  }
}
