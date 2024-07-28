// src/redux/reducers/index.js

import { combineReducers } from 'redux';
import sheltersReducer from './sheltersReducer'; // Pastikan path import sesuai dengan struktur Anda

const rootReducer = combineReducers({
  shelters: sheltersReducer, // Sesuaikan dengan nama yang Anda tentukan di sheltersReducer.js
  // tambahkan reducer lain jika ada
});

export default rootReducer;
