import { combineEpics } from 'redux-observable';
import { getHomeDataEpic } from './modules/home/epics';

const rootEpic = combineEpics<any>(getHomeDataEpic);

export default rootEpic;
