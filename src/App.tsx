import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import HomeScreen from 'screen/HomeScreen';

import store, { persistor } from '@store';

const App = (): React.JSX.Element => (
  <Provider store={store}>
    <PersistGate loading={<Text>{'Loading'}</Text>} persistor={persistor}>
      <HomeScreen />
    </PersistGate>
  </Provider>
);

export default App;
