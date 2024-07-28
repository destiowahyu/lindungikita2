// src/redux/reducers/sheltersReducer.js

import { FETCH_SHELTERS_SUCCESS } from '../actions/types'; // Define action types

const initialState = {
  shelters: [],
};

const sheltersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHELTERS_SUCCESS:
      return {
        ...state,
        shelters: action.payload,
      };
    default:
      return state;
  }
};

export default sheltersReducer;
