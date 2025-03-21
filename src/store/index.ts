import EnvironmentConstant from 'constants/EnvironmentConstant';
import ReactotronManager from 'helpers/managers/ReactotronManager';

import loggerMiddleware from './loggerMiddleware';
import rootReducer from './rootReducer';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  //* look here the warning the orders matters because of that we disable perfectionist/sort-objects eslint
  //* https://redux-toolkit.js.org/api/configureStore#enhancers
  // eslint-disable-next-line perfectionist/sort-objects
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
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

export default store;
