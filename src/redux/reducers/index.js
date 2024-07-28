import { combineReducers } from 'redux';
import sheltersReducer from './sheltersReducer';

const rootReducer = combineReducers({
  shelters: sheltersReducer
});

export default rootReducer;
