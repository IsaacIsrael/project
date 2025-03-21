import counterReducer from '@duckers/counter/counter.slice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
