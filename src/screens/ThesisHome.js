import { View, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { BottomNavigation, Button, IconButton, List, Searchbar, Text, TextInput } from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel';
import ActionSheet from "react-native-actions-sheet";
import { useRef } from 'react';
import HomeRoute from './bottomPages/home/HomeRoute';
import SearchRoute from './bottomPages/search/SearchRoute';
import BrandsRoute from './bottomPages/brands/BrandsRoute';
import { styles } from '../shared/Styles';
import FavouriteRoute from './bottomPages/wishlist/FavouriteRoute';
import AccountRoute from './bottomPages/account/AccountRoute';
import MyButton from '../shared/MyButton';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

console.log(windowWidth, 'ww')
console.log(windowHeight, 'wh')


const ThesisHome = ({ navigation }) => {

    const [index, setIndex] = React.useState(0);
    const actionSheetRef = useRef(null);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
        { key: 'find', title: 'Search', focusedIcon: 'tag-search', unfocusedIcon: 'tag-search-outline' },
        { key: 'brands', title: 'Brands', focusedIcon: 'tag', unfocusedIcon: 'tag-outline' },
        { key: 'favourite', title: 'Wishlist', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
        { key: 'account', title: 'Me', focusedIcon: 'account', unfocusedIcon: 'account-outline' },

    ]);

    const renderScene = BottomNavigation.SceneMap({
        favourite: FavouriteRoute,
        home: HomeRoute,
        brands: BrandsRoute,
        account: AccountRoute,
        find: SearchRoute,
    });

    return (

        <View style={styles.body}>
            <ActionSheet ref={actionSheetRef}>
                <View style={{ width: '90%' }}>
                    <View style={styles.typesOfSections}>
                        <Text style={styles.typesText}>SHOPPING BAG</Text>
                    </View>
                    <View style={styles.itemsCount}>
                        <Text>YOUR BAG IS EMPTY</Text>
                    </View>
                    <View>
                        <Text>Looking for items you previously added? Sign in to pick up where you left off</Text>
                    </View>
                    <MyButton title='Sign In' onPress={() => {navigation.navigate('SignIn')}} />
                </View>
            </ActionSheet>
            <View style={styles.headerWrapper}>
                <Text style={styles.header}> Tatik </Text>
                <View style={styles.shopping}>
                    <IconButton
                        icon="shopping-outline"
                        // iconColor={MD3Colors.error50}
                        size={25}
                        onPress={() => actionSheetRef.current?.show()}
                    />
                </View>
            </View>

            <BottomNavigation
                style={styles.c}
                barStyle={{
                    backgroundColor: 'white',
                }}
                activeColor='black'
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
            />
        </View>
    )
}

export default ThesisHome;

