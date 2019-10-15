import { createAction } from 'redux-actions';
import * as TYPES from './types';

export const getStarwarsRequest = createAction(TYPES.GET_STARTWARS_REQUEST);
export const getStarwarsSuccess = createAction(TYPES.GET_STARWARS_SUCCESS);
export const getStarwarsError = createAction(TYPES.GET_STARWARS_ERROR);
export const getStarwarsLoading = createAction(TYPES.GET_STARWARS_LOADING);
