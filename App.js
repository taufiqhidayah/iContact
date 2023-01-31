import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './src/store/';
import DrawerNavigation from './src/components/drawerNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <DrawerNavigation />
    </Provider>
  );
};

export default App;
