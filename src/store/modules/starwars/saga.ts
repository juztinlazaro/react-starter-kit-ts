import { call, put } from 'redux-saga/effects';
import { getStarwarsSuccess } from './actions';

const api = (url: any) => fetch(url).then(response => response.json());

export function* getStarwarsRequest(action: any) {
  try {
    const person = yield call(api, 'https://swapi.co/api/people/');

    yield put(getStarwarsSuccess(person.results));
  } catch (e) {
    console.log('error', e);
  }
}
