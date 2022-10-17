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
import { IconButton, Text } from 'react-native-paper';

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();


const HomeTabs = () => (
    <Tab.Navigator initialRouteName='home' screenOptions={{ headerShown: false }} style={{ marginBottom: 50 }}>
        <Tab.Screen name="home" component={() => <ThesisHome>{<HomeRoute />}</ThesisHome>}
            options={{
                tabBarLabel: ({ focused, color, size }) => (
                    <Text style={{ color: focused ? 'black' : 'gray', fontSize: 13 }}>Home</Text>
                ),
                tabBarIcon: ({ size, focused, color }) => {
                    return (
                        focused ? <IconButton
                            icon="home"
                            // iconColor={MD3Colors.error50}
                            size={22}
                        /> :
                            <IconButton
                                icon="home-outline"
                                // iconColor={MD3Colors.error50}
                                size={20}
                            />
                    )
                },
            }} />
        <Tab.Screen name="find" component={() => <ThesisHome>{<SearchRoute />}</ThesisHome>}
            options={{
                tabBarLabel: ({ focused, color, size }) => (
                    <Text style={{ color: focused ? 'black' : 'gray', fontSize: 13 }}>Search</Text>
                ),
                tabBarIcon: ({ size, focused, color }) => {
                    return (

                        focused ? <IconButton
                            icon="tag-search"
                            // iconColor={MD3Colors.error50}
                            size={22}
                        /> : <IconButton
                            icon="tag-search-outline"
                            // iconColor={MD3Colors.error50}
                            size={20}
                        />

                    )
                },
            }} />
        <Tab.Screen name="brands" component={() => <ThesisHome>{<BrandsRoute />}</ThesisHome>}
            options={{
                tabBarLabel: ({ focused, color, size }) => (
                    <Text style={{ color: focused ? 'black' : 'gray', fontSize: 13 }}>Brands</Text>
                ),
                tabBarIcon: ({ size, focused, color }) => {
                    return (
                        focused ?
                            <IconButton
                                icon="tag"
                                // iconColor={MD3Colors.error50}
                                size={22}
                            />
                            :
                            <IconButton
                                icon="tag-outline"
                                // iconColor={MD3Colors.error50}
                                size={20}
                            />
                    )
                },
            }} />
        <Tab.Screen name="favourite" component={() => <ThesisHome>{<FavouriteRoute />}</ThesisHome>}
            options={{
                tabBarLabel: ({ focused, color, size }) => (
                    <Text style={{ color: focused ? 'black' : 'gray', fontSize: 13 }}>Wishlist</Text>
                ),
                tabBarIcon: ({ size, focused, color }) => {
                    return (
                        focused ? <IconButton
                            icon="heart"
                            // iconColor={MD3Colors.error50}
                            size={22}
                        /> :
                            <IconButton
                                icon="heart-outline"
                                // iconColor={MD3Colors.error50}
                                size={20}
                            />
                    )
                },
            }} />
        <Tab.Screen name="account" component={() => <ThesisHome>{<AccountRoute />}</ThesisHome>}
            options={{
                tabBarLabel: ({ focused, color, size }) => (
                    <Text style={{ color: focused ? 'black' : 'gray', fontSize: 13 }}>Me</Text>
                ),
                tabBarIcon: ({ size, focused, color }) => {
                    return (
                        focused ? <IconButton
                            icon="account"
                            // iconColor={MD3Colors.error50}
                            size={22}
                        /> :
                            <IconButton
                                icon="account-outline"
                                // iconColor={MD3Colors.error50}
                                size={20}
                            />
                    )
                },
            }} />
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