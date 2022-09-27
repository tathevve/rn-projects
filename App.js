import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ToDo from './src/screens/ToDo';
import Done from './src/screens/Done';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/screens/Splash';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import PushNotification, { Importance } from "react-native-push-notification";
import Map from './src/screens/Map';
import Camera from './src/screens/Camera';
import Task from './src/screens/Task';


const Tab = createMaterialBottomTabNavigator()
// const Tab = createMaterialTopTabNavigator()
// const Stack = createStackNavigator();

function HomeTabs() {

  return (
    <Tab.Navigator
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'To-Do') {
              iconName = 'clipboard-list';
              size = focused ? 25 : 20;
            } else if (route.name === 'Done') {
              iconName = 'clipboard-check';
              size = focused ? 25 : 20;
            }
            return (
              <FontAwesome5
                name={iconName}
                size={size}
                color={color}
              />
            )
          }
        })
      }
      tabBarOptions={{
        activeTintColor: '#0080ff',
        inactiveTintColor: '#777777',
        labelStyle: { fontSize: 15, fontWeight: 'bold' }
      }}
    >

      <Tab.Screen name={'To-Do'} component={ToDo} />
      <Tab.Screen name={'Done'} component={Done} />
    </Tab.Navigator>
  )
}


const RootStack = createStackNavigator();

function App() {

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Splash"
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
          <RootStack.Screen
            name="Splash"
            component={Splash}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="Map"
            component={Map}
            
          />
          <RootStack.Screen
            name="My Tasks"
            component={HomeTabs}
          />
          <RootStack.Screen
            name="Task"
            component={Task}
          />
          <RootStack.Screen
            name="Camera"
            component={Camera}
          />
        </RootStack.Navigator>
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
