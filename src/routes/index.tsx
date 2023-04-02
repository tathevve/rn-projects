/* eslint-disable react-native/no-inline-styles */
import React, {useCallback} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/signIn/SignIn';
import Register from '../screens/register/Register';
import HomeRoute from '../screens/bottomPages/home/HomeRoute';
import SearchRoute from '../screens/bottomPages/search/SearchRoute';
import BrandsRoute from '../screens/bottomPages/brands/BrandsRoute';
import FavouriteRoute from '../screens/bottomPages/wishlist/FavouriteRoute';
import AccountRoute from '../screens/bottomPages/account/AccountRoute';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IconButton, Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {selectIsLoading} from '../redux/slicers/app';
import ScreenLayout from '../layout/ScreenLayout';
import CircularLoader from '../shared/Loader/CircularLoader';
import AllItems from '../screens/shopNow';
import ItemDetails from '../screens/itemDetails/ItemDetails';
import ShoppingBag from '../screens/shoppingBag/ShoppingBag';
import ForgotPassword from '../screens/forgotPassword';
import {EPath} from '../shared/models/enums/path.enum';
import SizeGuide from '../screens/itemDetails/SizeGuide';
import Checkout from '../screens/checkout/Checkout';
import DeliveryAddress from '../screens/checkout/deliveryAddress';
import DeliveryMethod from '../screens/checkout/deliveryMethod';
import Payment from '../screens/checkout/payment';
import PaymentStatus from '../screens/checkout/paymentStatus';
import Orders from '../screens/orders';
import AccountDetails from '../screens/accountDetails';
import Password from '../screens/accountDetails/password';
import DeleteAccount from '../screens/accountDetails/deleteAccount';

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = (): JSX.Element => (
  <Tab.Navigator
    initialRouteName={EPath.HOME}
    screenOptions={{headerShown: false}}>
    <Tab.Screen
      name={EPath.HOME}
      component={HomeRoute}
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
      name={EPath.SEARCH}
      component={SearchRoute}
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
      name={EPath.BRANDS}
      component={BrandsRoute}
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
      name={EPath.FAVORITE}
      component={FavouriteRoute}
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
      name={EPath.ACCOUNT}
      component={AccountRoute}
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
      initialRouteName={EPath.PARENTHOME}
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
        name={EPath.PARENTHOME}
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />

      <RootStack.Screen
        name={EPath.SIGNIN}
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name={EPath.REGISTER}
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name={EPath.ALLITEMS}
        component={AllItems}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name={EPath.ITEMDETAILS}
        component={ItemDetails}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name={EPath.SHOPPINGBAG}
        component={ShoppingBag}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name={EPath.FORGOTPASSWORD}
        component={ForgotPassword}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name={EPath.SIZEGUIDE}
        component={SizeGuide}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name={EPath.CHECKOUT}
        component={Checkout}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name={EPath.DELIVERY_ADDRESS}
        component={DeliveryAddress}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name={EPath.DELIVERY_METHOD}
        component={DeliveryMethod}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name={EPath.PAYMENT}
        component={Payment}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name={EPath.PAYMENT_STATUS}
        component={PaymentStatus}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name={EPath.ORDERS}
        component={Orders}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name={EPath.ACCOUNT_DETAILS}
        component={AccountDetails}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name={EPath.PASSWORD}
        component={Password}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name={EPath.DELETE_ACCOUNT}
        component={DeleteAccount}
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
