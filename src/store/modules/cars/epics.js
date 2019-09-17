import { filter, mergeMap } from 'rxjs/operators';
import * as typeActions from './typeActions';
import * as carsActions from './actions';
import * as carsApiService from 'services/carsApiService';

// ***************************** READ CARS *****************************

export const carsEpic = (action$, _) => action$.pipe(
  filter(action => action.type === typeActions.CARS_REQUEST),
  // `mergeMap()` supports functions that return promises, as well as observables
  mergeMap(async (_) => {
    const cars = await carsApiService.getCars()
    if (cars) {
      // const timer = store.value.imgsReducer.timer;
      return carsActions.carsSuccess(cars.data);
    }
    
    return carsActions.carsFail()
  }),
);


// ***************************** CREATE CAR *****************************
export const createCarsEpic = (action$, _) => action$.pipe(
  filter(action => action.type === typeActions.CARS_CREATE_REQUEST),
  // `mergeMap()` supports functions that return promises, as well as observables
  mergeMap(async (action) => {

    const { payload } = action;

    if (payload.newCar) {
      const newCar = await carsApiService.createCar(payload.newCar)
      if (newCar.code === 201) {
        const cars = await carsApiService.getCars()
        if (cars.code === 200) {
          return carsActions.createCarsSuccess(cars.data, null);
        }
      }
      else {
        return carsActions.createCarsFail(newCar.data)
      }
    }
  }),
);


// ***************************** DELETE CAR *****************************

export const deleteCarsEpic = (action$, _) => action$.pipe(
  filter(action => action.type === typeActions.CARS_DELETE_REQUEST),
  // `mergeMap()` supports functions that return promises, as well as observables
  mergeMap(async (action) => {

    const { payload } = action;

    if (payload.id) {
      const res = await carsApiService.deleteCar(payload.id)
      if (res.code === 200) {
        const cars = await carsApiService.getCars()
        if (cars.code === 200) {
          return carsActions.deleteCarsSuccess(cars.data, null);
        }
      }
      else {
        return carsActions.deleteCarsFail(res.data)
      }
    }
  }),
);



// ***************************** Update CAR *****************************

export const updateCarsEpic = (action$, _) => action$.pipe(
  filter(action => action.type === typeActions.CARS_UPDATE_REQUEST),
  // `mergeMap()` supports functions that return promises, as well as observables
  mergeMap(async (action) => {

    const { payload } = action;

    if (payload.car) {
      const res = await carsApiService.updateCar(payload.car, payload.car.id)
      if (res.code === 200) {
        const cars = await carsApiService.getCars()
        if (cars.code === 200) {
          return carsActions.updateCarsSuccess(cars.data, null);
        }
      }
      else {
        return carsActions.updateCarsFail(res.data)
      }
    }
  }),
);