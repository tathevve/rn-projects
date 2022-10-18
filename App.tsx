/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/redux/index';
import ConnectionLayout from './src/layout/ConnectionLayout';
import Routes from './src/routes';

function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <ConnectionLayout>
          <Routes />
        </ConnectionLayout>
      </NavigationContainer>
    </StoreProvider>
  );
}

export default App;
