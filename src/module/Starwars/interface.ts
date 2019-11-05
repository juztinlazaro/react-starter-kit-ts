export interface IProps extends IMapDispatchProps, IMapStateToProps {}

export interface IMapDispatchProps {
  getStarwarsRequest: () => void;
  getStarwarsConfirm: () => void;
  getPlanetsSaga: () => void;
  getPlanetsFork: () => void;
  getPlanetsCancel: () => void;
}

export interface IMapStateToProps {
  starwars: any;
  planets: any;
  loading: boolean;
}
