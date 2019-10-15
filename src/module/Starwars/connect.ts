import { bindActionCreators } from 'redux';
import * as actions from 'store/modules/starwars/actions';
import { IRootReducer } from '../../store/rootReducer.interface';

export const mapStateToProps = (state: IRootReducer) => ({
  starwars: state.starwars.starwars,
  loading: state.starwars.loading
});

export const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      getStarwarsRequest: () => actions.getStarwarsSaga(),
      getStarwarsConfirm: () => actions.getStarwarsConfirm()
    },
    dispatch
  );
