import { createAction } from 'redux-actions';
import * as TYPES from './types';

export const getHomeDataCancel = createAction(TYPES.GET_HOME_DATA_CANCEL);
export const getHomeDataEpic = createAction(TYPES.GET_HOME_DATA_EPIC);
export const getHomeDataError = createAction(TYPES.GET_HOME_DATA_ERROR);
export const getHomeDataLoading = createAction(TYPES.GET_HOME_DATA_LOADING);
export const getHomeDataSuccess = createAction(TYPES.GET_HOME_DATA_SUCCESS);
