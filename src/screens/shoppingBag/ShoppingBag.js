import { View, Text } from 'react-native'
import React from 'react'
import ActionSheet from "react-native-actions-sheet";
import {styles} from "../../shared/Styles"
import MyButton from '../../shared/MyButton';
import { useNavigation } from '@react-navigation/native';



const ShoppingBag = ({actionSheetRef}) => {
    const navigation = useNavigation();


    return (
        <View>
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
        </View>
    )
}

export default ShoppingBag