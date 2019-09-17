import * as typeActions from './typeActions';
import { produce } from 'immer';

const carsInitial = {
  cars: [],
  load: false,
  error: false,

  createCarMsg: null,
  createCarSuccess: false,
  createCarLoad: false,
  createCarError: false,

  deleteCarId: null,
  deleteCarMsg: null,
  deleteCarLoad: false,
  deleteCarError: false,

  selectedCar: null,

  updateCarMsg: null,
  updateCarLoad: false,
  updateCarError: false,

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
        draft.createCarSuccess = true;
      })

    case typeActions.CARS_CREATE_FAIL:
      return produce(state, draft => {
        draft.createCarMsg = action.payload.msg;
        draft.createCarLoad = false;
        draft.createCarError = true;
        draft.createCarSuccess = false;
      })

    case typeActions.CARS_CREATE_RESET:
      return produce(state, draft => {
        draft.createCarMsg = null;
        draft.createCarLoad = false;
        draft.createCarError = false;
        draft.createCarSuccess = false;
      })

    // *************************************** DELETE ***************************************

    case typeActions.CARS_DELETE_REQUEST:
      return produce(state, draft => {
        draft.deleteCarLoad = true;
        draft.deleteCarError = false;
        draft.deleteCarId = action.payload.id;
      });

    case typeActions.CARS_DELETE_SUCCESS:
      return produce(state, draft => {
        draft.deleteCarMsg = action.payload.msg;
        draft.cars = action.payload.cars;
        draft.deleteCarLoad = false;
        draft.deleteCarError = false;
        draft.deleteCarId = null;
      })

    case typeActions.CARS_DELETE_FAIL:
      return produce(state, draft => {
        draft.deleteCarMsg = action.payload.msg;
        draft.deleteCarLoad = false;
        draft.deleteCarError = true;
        draft.deleteCarId = null;
      })

    case typeActions.CARS_DELETE_RESET:
      return produce(state, draft => {
        draft.deleteCarMsg = null;
        draft.deleteCarLoad = false;
        draft.deleteCarError = false;
        draft.deleteCarId = null;
      })

    // *************************************** UPDATE ***************************************

    case typeActions.CARS_SELECTED:
      return produce(state, draft => {
        draft.selectedCar = action.payload.car;
      });
    
    case typeActions.CARS_UPDATE_REQUEST:
      return produce(state, draft => {
        draft.updateCarLoad = true;
        draft.updateCarError = false;
      });

    case typeActions.CARS_UPDATE_SUCCESS:
      return produce(state, draft => {
        draft.updateCarMsg = action.payload.msg;
        draft.cars = action.payload.cars;
        draft.updateCarLoad = false;
        draft.updateCarError = false;
        draft.selectedCar = null;
      })

    case typeActions.CARS_UPDATE_FAIL:
      return produce(state, draft => {
        draft.updateCarMsg = action.payload.msg;
        draft.updateCarLoad = false;
        draft.updateCarError = true;
      })

    case typeActions.CARS_UPDATE_RESET:
      return produce(state, draft => {
        draft.updateCarMsg = null;
        draft.updateCarLoad = false;
        draft.updateCarError = false;
      })

    default:
      return state;
  }
}; // Fim do reducers

export default carsReducer;
