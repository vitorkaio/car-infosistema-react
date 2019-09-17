import { action } from 'typesafe-actions';
import * as typeActions from './typeActions';

export const carsRequest = () => action(typeActions.CARS_REQUEST);
export const carsSuccess = (cars) => action(typeActions.CARS_SUCCESS, { cars });
export const carsFail = () => action(typeActions.CARS_FAIL);

export const createCarsRequest = (newCar) => action(typeActions.CARS_CREATE_REQUEST, { newCar });
export const createCarsSuccess = (cars, msg) => action(typeActions.CARS_CREATE_SUCCESS, { cars, msg });
export const createCarsFail = (msg) => action(typeActions.CARS_CREATE_FAIL, { msg });
export const createCarsReset = () => action(typeActions.CARS_CREATE_RESET);

export const deleteCarsRequest = (id) => action(typeActions.CARS_DELETE_REQUEST, { id });
export const deleteCarsSuccess = (cars, msg) => action(typeActions.CARS_DELETE_SUCCESS, { cars, msg });
export const deleteCarsFail = (msg) => action(typeActions.CARS_DELETE_FAIL, { msg });
export const deleteCarsResete = () => action(typeActions.CARS_DELETE_RESET);

export const selectCar = (car) => action(typeActions.CARS_SELECTED, { car });
export const updateCarsRequest = (car) => action(typeActions.CARS_UPDATE_REQUEST, { car });
export const updateCarsSuccess = (cars, msg) => action(typeActions.CARS_UPDATE_SUCCESS, { cars, msg });
export const updateCarsFail = (msg) => action(typeActions.CARS_UPDATE_FAIL, { msg });
export const updateCarsResete = () => action(typeActions.CARS_UPDATE_RESET);
