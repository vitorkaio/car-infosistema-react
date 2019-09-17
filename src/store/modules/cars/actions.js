import { action } from 'typesafe-actions';
import * as typeActions from './typeActions';

export const carsRequest = () => action(typeActions.CARS_REQUEST);
export const carsSuccess = (cars) => action(typeActions.CARS_SUCCESS, { cars });
export const carsFail = () => action(typeActions.CARS_FAIL);

export const createCarsRequest = (newCar) => action(typeActions.CARS_CREATE_REQUEST, { newCar });
export const createCarsSuccess = (cars, msg) => action(typeActions.CARS_CREATE_SUCCESS, { cars, msg });
export const createCarsFail = (msg) => action(typeActions.CARS_CREATE_FAIL, { msg });

