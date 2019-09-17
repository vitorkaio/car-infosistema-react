import { combineEpics } from 'redux-observable';
import { carsEpic } from './cars/epics';

const epics = [
  carsEpic
];

const epicsRoots = combineEpics(...epics);

export default epicsRoots;
