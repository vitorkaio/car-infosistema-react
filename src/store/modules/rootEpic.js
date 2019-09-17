import { combineEpics } from 'redux-observable';
import { carsEpic, createCarsEpic } from './cars/epics';

const epics = [
  carsEpic,
  createCarsEpic
];

const epicsRoots = combineEpics(...epics);

export default epicsRoots;
