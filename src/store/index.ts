import EnvironmentConstant from 'constants/EnvironmentConstant';
import ReactotronManager from 'helpers/managers/ReactotronManager';
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

import loggerMiddleware from './loggerMiddleware';
import rootReducer from './rootReducer';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  //* look here the warning the orders matters because of that we disable perfectionist/sort-objects eslint
  //* https://redux-toolkit.js.org/api/configureStore#enhancers
  // eslint-disable-next-line perfectionist/sort-objects
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(loggerMiddleware),
  // eslint-disable-next-line perfectionist/sort-objects
  enhancers: (getDefaultEnhancers) => {
    const enhancers = getDefaultEnhancers();
    if (EnvironmentConstant.isLocal) {
      enhancers.concat(ReactotronManager.createEnhancer());
    }
    return enhancers;
  },
  reducer: rootReducer,
});

export const persistor = persistStore(store);
export default store;
