import { combineReducers } from 'redux';
import homeReducer from '../modules/home/duck';

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
