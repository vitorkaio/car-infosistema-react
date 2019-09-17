import { combineEpics } from 'redux-observable';
import { carsEpic, createCarsEpic, deleteCarsEpic, updateCarsEpic } from './cars/epics';

const epics = [
  carsEpic,
  createCarsEpic,
  deleteCarsEpic,
  updateCarsEpic
];

const epicsRoots = combineEpics(...epics);

export default epicsRoots;
