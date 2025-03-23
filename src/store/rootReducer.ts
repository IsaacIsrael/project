import { persistReducer } from 'redux-persist';

import { name as appName } from '../../app.json';

import counterReducer from '@duckers/counter/counter.slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from '@reduxjs/toolkit';

const reducer = combineReducers({
  counter: counterReducer,
});

const persistedReducer = persistReducer(
  {
    blacklist: [],
    key: appName,
    storage: AsyncStorage,
    version: 0,
    whitelist: ['counter'],
  },
  reducer,
);

const rootReducer = persistedReducer;
export default rootReducer;
