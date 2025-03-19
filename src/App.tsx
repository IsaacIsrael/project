import React from 'react';
import { Provider } from 'react-redux';
import HomeScreen from 'screen/HomeScreen';

import store from '@store';

const App = (): React.JSX.Element => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
);

export default App;
