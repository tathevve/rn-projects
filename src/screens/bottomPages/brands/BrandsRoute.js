import { View, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { BottomNavigation, Button, IconButton, List, Searchbar, Text, TextInput } from 'react-native-paper';
import { styles } from '../../../shared/Styles';
import BrandNames from './BrandNames';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const BrandsRoute = () => {
    return (
        <ScrollView contentContainerStyle={{ backgroundColor: "white", height: windowHeight }}>
            <View style={{
                marginLeft: 17,
                marginRight: 17,
            }}>
                <View style={styles.typesOfSections}>
                    <Text style={styles.typesText}>WOMEN</Text>
                </View>

                <Text>YOUR GO-TO BRANDS</Text>

                <View style={{ alignItems: 'center', marginTop: 25 }}>
                    <BrandNames brandName='THERE WAS ONE' imagePath={require('../../../../assets/brands_2.png')} />
                    <BrandNames brandName='Dion Lee' imagePath={require('../../../../assets/brands_2.png')} />
                </View>
            </View>
        </ScrollView>
    )
}

export default BrandsRoute

