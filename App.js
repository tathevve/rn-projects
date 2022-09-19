import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
// import ScreenB from './src/screens/ScreenB';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';

const Stack = createStackNavigator();

// const Tab = createMaterialBottomTabNavigator()
// const Tab = createMaterialTopTabNavigator()
// const Stack = createStackNavigator();


function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#0080ff'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold'
            }
          }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>


    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName='Login'
    //     // drawerPosition='right' ????
    //     screenOptions={{
    //       drawerType: 'back',
    //       drawerPosition: 'left',
    //       swipeEdgeWidth: 500,
    //       drawerHideStatusBarOnOpen: false,
    //       overlayColor: '#00000090',
    //       drawerStyle: {
    //         backgroundColor: '#c6cbef',
    //         width: 250
    //       },
    //       headerShown: true,
    //       swipeEnabled: true,
    //       gestureEnabled: false,
    //       headerTitleAlign: 'center',
    //       headerStyle: {
    //         backgroundColor: '#0080ff'
    //       },
    //       headerTintColor: '#ffffff',
    //       headerTitleStyle: {
    //         fontSize: 25,
    //         fontWeight: 'bold'
    //       }
    //     }}

    //   >
    //     <Stack.Screen
    //       name="Home"
    //       component={Home}
    //       options={{

    //       }}
    //     />

    //     <Stack.Screen
    //       name="Login"
    //       component={Login}
    //       options={{
    //         headerShown:false
    //       }}
    //     />

    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}


export default App;
