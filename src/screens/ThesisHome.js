import { View } from 'react-native'
import React from 'react'
import { IconButton, Text } from 'react-native-paper';
import { useRef } from 'react';
import MyButton from '../shared/MyButton';
import ShoppingBag from './shoppingBag/ShoppingBag';
import { styles } from '../shared/Styles';
import { useEffect } from 'react';




const ThesisHome = ({children}) => {
    const actionSheetRef = useRef(null);
    console.log(actionSheetRef,'action')


    // useEffect(() => {
    //     return () => {
    //         actionSheetRef.current = null;
    //     }
    // },[])


    return (

        <View style={styles.body}>
            <ShoppingBag actionSheetRef={actionSheetRef}/>
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

