import { createAction } from 'redux-actions';
import * as TYPES from './types';

export const getStarwarsSaga = createAction(TYPES.GET_STARWARS_SAGA);
export const getStarwarsSuccess = createAction(TYPES.GET_STARWARS_SUCCESS);
export const getStarwarsError = createAction(TYPES.GET_STARWARS_ERROR);
export const getStarwarsLoading = createAction(TYPES.GET_STARWARS_LOADING);
export const getStarwarsConfirm = createAction(TYPES.GET_STARWARS_CONFIRM);

export const getPlanetsSaga = createAction(TYPES.GET_PLANETS_SAGA);
export const getPlanetsSuccess = createAction(TYPES.GET_PLANETS_SUCCESS);
export const getPlanetsError = createAction(TYPES.GET_PLANETS_ERROR);
export const getPlanetsLoading = createAction(TYPES.GET_PLANETS_LOADING);
export const getPlanetsCancel = createAction(TYPES.GET_PLANENTS_CANCEL);
export const getPlanetsFork = createAction(TYPES.GET_PLANENTS_FORK);
