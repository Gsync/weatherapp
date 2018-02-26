import { combineReducers } from 'redux';
import weatherReducer from './R_weather';

const rootReducer = combineReducers({
  weather: weatherReducer
});

export default rootReducer;
