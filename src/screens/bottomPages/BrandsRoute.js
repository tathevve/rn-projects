import { View, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { BottomNavigation, Button, IconButton, List, Searchbar, Text, TextInput } from 'react-native-paper';
import { styles } from '../../shared/Styles';


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
                    <View style={{ width: '100%', backgroundColor: 'rgba(217, 217, 217, 0.22)', height: '45%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>

                        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                            <IconButton
                                icon="cards-heart-outline"
                                // iconColor={MD3Colors.error50}
                                size={25}
                                onPress={() => console.log('heart')}
                            />
                            <Text>
                                THERE WAS ONE
                            </Text>
                        </View>
                        <Image
                            resizeMode='contain'
                            style={{
                                width: '50%',
                                height: '90%',
                                // position:'absolute'
                            }}
                            source={require('../../../assets/slider2_1.png')}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default BrandsRoute

