/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useCallback} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/signIn/SignIn';
import Register from '../screens/register/Register';
import HomeRoute from '../screens/bottomPages/home/HomeRoute';
import SearchRoute from '../screens/bottomPages/search/SearchRoute';
import BrandsRoute from '../screens/bottomPages/brands/BrandsRoute';
import FavouriteRoute from '../screens/bottomPages/wishlist/FavouriteRoute.tsx';
import AccountRoute from '../screens/bottomPages/account/AccountRoute';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ThesisHome from '../screens/ThesisHome';
import {IconButton, Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {selectIsLoading} from '../redux/slicers/app';
import ScreenLayout from '../layout/ScreenLayout';
import CircularLoader from '../shared/Loader/CircularLoader';

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = (): JSX.Element => (
  <Tab.Navigator
    initialRouteName="home"
    screenOptions={{headerShown: false}}
    >
    <Tab.Screen
      name="home"
      component={() => <ThesisHome>{<HomeRoute />}</ThesisHome>}
      options={{
        tabBarLabel: ({focused}) => (
          <Text style={{color: focused ? 'black' : 'gray', fontSize: 13}}>
            Home
          </Text>
        ),
        tabBarIcon: ({focused}) => {
          return focused ? (
            <IconButton
              icon="home"
              // iconColor={MD3Colors.error50}
              size={22}
            />
          ) : (
            <IconButton
              icon="home-outline"
              // iconColor={MD3Colors.error50}
              size={20}
            />
          );
        },
      }}
    />
    <Tab.Screen
      name="find"
      component={() => <ThesisHome>{<SearchRoute />}</ThesisHome>}
      options={{
        tabBarLabel: ({focused}) => (
          <Text style={{color: focused ? 'black' : 'gray', fontSize: 13}}>
            Search
          </Text>
        ),
        tabBarIcon: ({focused}) => {
          return focused ? (
            <IconButton
              icon="tag-search"
              // iconColor={MD3Colors.error50}
              size={22}
            />
          ) : (
            <IconButton
              icon="tag-search-outline"
              // iconColor={MD3Colors.error50}
              size={20}
            />
          );
        },
      }}
    />
    <Tab.Screen
      name="brands"
      component={() => <ThesisHome>{<BrandsRoute />}</ThesisHome>}
      options={{
        tabBarLabel: ({focused}) => (
          <Text style={{color: focused ? 'black' : 'gray', fontSize: 13}}>
            Brands
          </Text>
        ),
        tabBarIcon: ({focused}) => {
          return focused ? (
            <IconButton
              icon="tag"
              // iconColor={MD3Colors.error50}
              size={22}
            />
          ) : (
            <IconButton
              icon="tag-outline"
              // iconColor={MD3Colors.error50}
              size={20}
            />
          );
        },
      }}
    />
    <Tab.Screen
      name="favourite"
      component={() => <ThesisHome>{<FavouriteRoute />}</ThesisHome>}
      options={{
        tabBarLabel: ({focused}) => (
          <Text style={{color: focused ? 'black' : 'gray', fontSize: 13}}>
            Wishlist
          </Text>
        ),
        tabBarIcon: ({focused}) => {
          return focused ? (
            <IconButton
              icon="heart"
              // iconColor={MD3Colors.error50}
              size={22}
            />
          ) : (
            <IconButton
              icon="heart-outline"
              // iconColor={MD3Colors.error50}
              size={20}
            />
          );
        },
      }}
    />
    <Tab.Screen
      name="account"
      component={() => <ThesisHome>{<AccountRoute />}</ThesisHome>}
      options={{
        tabBarLabel: ({focused}) => (
          <Text style={{color: focused ? 'black' : 'gray', fontSize: 13}}>
            Me
          </Text>
        ),
        tabBarIcon: ({focused}) => {
          return focused ? (
            <IconButton
              icon="account"
              // iconColor={MD3Colors.error50}
              size={22}
            />
          ) : (
            <IconButton
              icon="account-outline"
              // iconColor={MD3Colors.error50}
              size={20}
            />
          );
        },
      }}
    />
  </Tab.Navigator>
);

const RootNavigator = (): JSX.Element => {
  return (
    <RootStack.Navigator
      initialRouteName="ThesisHome"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontSize: 35,
          // fontWeight: 'bold'
        },
      }}>
      <RootStack.Screen
        name="ThesisHome"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};

const Routes = (): JSX.Element => {
  const isLoading = useSelector(selectIsLoading);

  const generateScreen = useCallback((): JSX.Element => {
    return !isLoading ? (
      <>
        <RootNavigator />
      </>
    ) : (
      <CircularLoader defaultStyles />
    );
  }, [isLoading]);

  return <ScreenLayout>{generateScreen()}</ScreenLayout>;
};

export default Routes;

// const styles = StyleSheet.create({
//   tabNavigatorContainer: {
//     marginBottom: 50,
//   },
// });
