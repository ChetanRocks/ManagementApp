import { combineReducers } from 'redux';
import cities from './CityReducer';
import hotels from './HotelsReducer';

export default combineReducers({ cities, hotels });