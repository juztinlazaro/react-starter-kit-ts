import { combineEpics } from 'redux-observable';
import { getHomeDataEpic } from './home/epics';

const rootEpic = combineEpics<any>(getHomeDataEpic);

export default rootEpic;
