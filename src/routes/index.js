import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/signIn/SignIn';
import Register from '../screens/register/Register';
import HomeRoute from '../screens/bottomPages/home/HomeRoute';
import SearchRoute from '../screens/bottomPages/search/SearchRoute';
import BrandsRoute from '../screens/bottomPages/brands/BrandsRoute';
import FavouriteRoute from '../screens/bottomPages/wishlist/FavouriteRoute';
import AccountRoute from '../screens/bottomPages/account/AccountRoute';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ThesisHome from '../screens/ThesisHome';


const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();


const HomeTabs = () => (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="home" component={() => <ThesisHome>{<HomeRoute />}</ThesisHome>} />
        <Tab.Screen name="find" component={() => <ThesisHome>{<SearchRoute />}</ThesisHome>} />
        <Tab.Screen name="brands" component={() => <ThesisHome>{<BrandsRoute />}</ThesisHome>} />
        <Tab.Screen name="favourite" component={() => <ThesisHome>{<FavouriteRoute />}</ThesisHome>} />
        <Tab.Screen name="account" component={() => <ThesisHome>{<AccountRoute />}</ThesisHome>} />
    </Tab.Navigator>
)



const Routes = () => {

    return (
        <RootStack.Navigator
            initialRouteName="ThesisHome"
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: 'white'
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                    fontSize: 35,
                    // fontWeight: 'bold'
                }
            }}
        >
            <RootStack.Screen
                name="ThesisHome"
                component={HomeTabs}
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
    )
}

export default Routes;