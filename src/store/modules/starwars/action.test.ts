import { call, put, take } from 'redux-saga/effects';
import { getPlanetsSaga, api, getStarwarsSaga } from './saga';
import {
  getPlanetsLoading,
  getPlanetsSuccess,
  getStarwarsLoading,
  getStarwarsConfirm,
  getStarwarsSuccess
} from './actions';

describe('TEST planets', () => {
  const getStarwarRequest = getPlanetsSaga();

  it('Should hit planents loading', () => {
    expect(getStarwarRequest.next().value).toEqual(put(getPlanetsLoading()));
  });

  it('Should hit planets get request api', () => {
    expect(getStarwarRequest.next().value).toEqual(
      call(api, 'https://swapi.co/api/planets/')
    );
  });

  it('on success dispatch success action planents', () => {
    const planets = { results: [] };

    expect(getStarwarRequest.next(planets).value).toEqual(
      put(getPlanetsSuccess(planets.results))
    );
  });
});

describe('TEST planets', () => {
  const getStarwarsRequest = getStarwarsSaga();

  it('should confirm request', () => {
    expect(getStarwarsRequest.next().value).toEqual(take(getStarwarsConfirm));
  });

  it('should loading request', () => {
    expect(getStarwarsRequest.next().value).toEqual(put(getStarwarsLoading()));
  });

  it('should call api request', () => {
    expect(getStarwarsRequest.next().value).toEqual(
      call(api, 'https://swapi.co/api/people/')
    );
  });

  it('should api request success', () => {
    const hero = { results: [] };

    expect(getStarwarsRequest.next(hero).value).toEqual(
      put(getStarwarsSuccess(hero.results))
    );
  });
});
