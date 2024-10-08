import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = applyMiddleware(thunk);

const store = createStore(
  rootReducer,
  initialState,
  middleware
);

export default store;
