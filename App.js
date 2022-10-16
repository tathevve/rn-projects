import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/redux/index';
import MainLayout from './src/layout/MainLayout';


function App() {

  return (
    <StoreProvider store={store}>
      <NavigationContainer>
          <MainLayout />
      </NavigationContainer>
    </StoreProvider>
  );
}


export default App;
