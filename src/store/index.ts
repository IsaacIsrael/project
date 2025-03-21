import EnvironmentConstant from 'constants/EnvironmentConstant';
import ReactotronManager from 'helpers/managers/ReactotronManager';

import rootReducer from './rootReducer';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
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
