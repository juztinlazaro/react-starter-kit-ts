import { bindActionCreators } from 'redux';
import * as actions from 'store/modules/starwars/actions';
import { IRootReducer } from '../../store/rootReducer.interface';

export const mapStateToProps = (state: IRootReducer) => ({
  starwars: state.starwars.starwars,
  planets: state.starwars.planets,
  loading: state.starwars.loading
});

export const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      getStarwarsRequest: () => actions.getStarwarsSaga(),
      getStarwarsConfirm: () => actions.getStarwarsConfirm(),
      getPlanetsSaga: () => actions.getPlanetsSaga()
    },
    dispatch
  );
