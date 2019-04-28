import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import {
  switchMap,
  takeUntil,
  map,
  startWith,
  catchError,
} from 'rxjs/operators';
import { of } from 'rxjs';
import * as TYPES from './types';
import {
  getHomeDataSuccess,
  getHomeDataLoading,
  getHomeDataError,
} from './actions';

export const getHomeDataEpic = (action$: any) =>
  action$.pipe(
    ofType(TYPES.GET_HOME_DATA_EPIC),
    switchMap(() =>
      ajax('https://jsonplaceholder.typicode.com/users').pipe(
        map(result => getHomeDataSuccess(result.response)),
        takeUntil(action$.pipe(ofType(TYPES.GET_HOME_DATA_CANCEL))),
        catchError(error => of(getHomeDataError(error))),
        startWith(getHomeDataLoading('1')),
      ),
    ),
  );
