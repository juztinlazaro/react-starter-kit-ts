import { Dispatch, bindActionCreators } from "redux";
import * as actions from "store/modules/starwars/actions";
import { IRootReducer } from "store/rootReducer.interface";
import { IMapStateToProps, IMapDispatchProps } from "./interface";

export const mapStateToProps = (state: IRootReducer): IMapStateToProps => ({
  starwars: state.starwars.starwars,
  planets: state.starwars.planets,
  loading: state.starwars.loading,
});

export const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchProps =>
  bindActionCreators(
    {
      getStarwarsRequest: () => actions.getStarwarsSaga(),
      getStarwarsConfirm: () => actions.getStarwarsConfirm(),
      getPlanetsSaga: () => actions.getPlanetsSaga(),
      getPlanetsFork: () => actions.getPlanetsFork(),
      getPlanetsCancel: () => actions.getPlanetsCancel(),
    },
    dispatch,
  );
