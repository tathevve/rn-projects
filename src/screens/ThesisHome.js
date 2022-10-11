import { View, Dimensions } from 'react-native'
import React from 'react'
import { IconButton, Text } from 'react-native-paper';
import ActionSheet from "react-native-actions-sheet";
import { useRef } from 'react';
import HomeRoute from './bottomPages/home/HomeRoute';
import SearchRoute from './bottomPages/search/SearchRoute';
import BrandsRoute from './bottomPages/brands/BrandsRoute';
import { styles } from '../shared/Styles';
import FavouriteRoute from './bottomPages/wishlist/FavouriteRoute';
import AccountRoute from './bottomPages/account/AccountRoute';
import MyButton from '../shared/MyButton';
import { useNavigation } from '@react-navigation/native';




const ThesisHome = ({children}) => {
    const navigation = useNavigation();
    const actionSheetRef = useRef(null);


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
                    <MyButton title='Sign In' onPress={() => { navigation.navigate('SignIn') }} />
                </View>
            </ActionSheet>
            <View style={styles.headerWrapper}>
                <Text style={styles.header}> Տատիկ </Text>
                <View style={styles.shopping}>
                    <IconButton
                        icon="shopping-outline"
                        // iconColor={MD3Colors.error50}
                        size={25}
                        onPress={() => actionSheetRef.current?.show()}
                    />
                </View>
            </View>
            {children}
        </View>
    )
}

export default ThesisHome;

