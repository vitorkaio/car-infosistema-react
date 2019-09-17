import { filter, mergeMap } from 'rxjs/operators';
import * as typeActions from './typeActions';
import * as carsActions from './actions';
import * as carsApiService from 'services/carsApiService';

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
