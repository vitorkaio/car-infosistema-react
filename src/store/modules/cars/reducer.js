import * as typeActions from './typeActions';
import { produce } from 'immer';

const carsInitial = {
  cars: [],
  load: false,
  error: false,
};

const carsReducer = (state = carsInitial, action) => {
  switch (action.type) {

    case typeActions.CARS_REQUEST:
      return produce(state, draft => {
        draft.load = true;
        draft.error = false;
      });

    case typeActions.CARS_SUCCESS:
      return produce(state, draft => {
        draft.cars = action.payload.cars;
        draft.load = false;
        draft.error = false;
      })

    case typeActions.CARS_FAIL:
      return produce(state, draft => {
        draft.cars = [];
        draft.load = false;
        draft.error = true;
      })

    default:
      return state;
  }
}; // Fim do reducers

export default carsReducer;
