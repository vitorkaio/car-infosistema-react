import * as typeActions from './typeActions';
import { produce } from 'immer';

const carsInitial = {
  cars: [],
  load: false,
  error: false,

  createCarMsg: null,
  createCarLoad: false,
  createCarError: false,

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

      // *************************************** CREATE ***************************************

      case typeActions.CARS_CREATE_REQUEST:
      return produce(state, draft => {
        draft.createCarLoad = true;
        draft.createCarError = false;
      });

    case typeActions.CARS_CREATE_SUCCESS:
      return produce(state, draft => {
        draft.createCarMsg = action.payload.msg;
        draft.cars = action.payload.cars;
        draft.createCarLoad = false;
        draft.createCarError = false;
      })

    case typeActions.CARS_CREATE_FAIL:
      return produce(state, draft => {
        draft.createCarMsg = action.payload.msg;
        draft.createCarLoad = false;
        draft.createCarError = true;
      })

    default:
      return state;
  }
}; // Fim do reducers

export default carsReducer;
