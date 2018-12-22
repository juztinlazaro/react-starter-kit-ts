import { createAction } from 'redux-actions';
import * as TYPES from './types';
export const getHomeDataEpics = createAction(TYPES.GET_HOME_DATA_EPIC);
export const getHomeDataLoading = createAction(TYPES.GET_HOME_DATA_LOADING);
export const getHomeDataSuccess = createAction(TYPES.GET_HOME_DATA_SUCCESS);
export const getHomeDataError = createAction(TYPES.GET_HOME_DATA_ERROR);
