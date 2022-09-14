import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenA from './src/ScreenA';
import ScreenB from './src/ScreenB';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';



// const Tab = createMaterialBottomTabNavigator()
// const Tab = createMaterialTopTabNavigator()
const Drawer = createDrawerNavigator();


function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Screen_A'
        // drawerPosition='right' ????
        screenOptions={{
          drawerType: 'back',
          drawerPosition: 'left',
          swipeEdgeWidth: 500,
          drawerHideStatusBarOnOpen: false,
          overlayColor: '#00000090',
          drawerStyle: {
            backgroundColor: '#c6cbef',
            width: 250
          },
          headerShown:true,
          swipeEnabled:true,
          gestureEnabled: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor:'#0080ff'
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight:'bold'
          }
        }}
        
      >
        <Drawer.Screen
          name="Screen_A"
          component={ScreenA}
          options={{
            title: 'abo',
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name='btc'
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Screen_B"
          component={ScreenB}
          options={{
            title: 'edo',
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name='autoprefixer'
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default App;
