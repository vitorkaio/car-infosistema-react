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
      console.log(newCar)
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