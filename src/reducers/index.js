import {combineReducers} from 'redux';
import travelsDataReducer from './travelsDataReducer';

export default combineReducers({
  travelsData: travelsDataReducer
});
