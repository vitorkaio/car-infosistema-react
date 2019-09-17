import { action } from 'typesafe-actions';
import * as typeActions from './typeActions';

export const carsRequest = () => action(typeActions.CARS_REQUEST);
export const carsSuccess = (cars) => action(typeActions.CARS_SUCCESS, { cars });
export const carsFail = () => action(typeActions.CARS_FAIL);

