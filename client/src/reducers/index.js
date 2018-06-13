import { combineReducers } from 'redux';
import carsReducer from './reduceCar';
export default combineReducers({
  cars: carsReducer
});
