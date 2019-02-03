import {combineReducers} from 'redux';
import travelDataReducer from './travelDataReducer';

export default combineReducers({
  solarData: travelDataReducer
});
