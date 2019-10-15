import { bindActionCreators } from 'redux';
import * as actions from 'store/modules/home/actions';
import { IRootReducer } from 'store/rootReducer.interface';

export const mapStateToProps = (state: IRootReducer) => ({
  home: state.homes
});

export const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      getHomeDataCancel: () => actions.getHomeDataCancel(),
      getHomeDataEpic: () => actions.getHomeDataEpic()
    },
    dispatch
  );
