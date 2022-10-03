import { View, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { BottomNavigation, Button, IconButton, List, Searchbar, Text, TextInput } from 'react-native-paper';
import { styles } from '../../shared/Styles';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FavouriteRoute = () => {
    return (
        <ScrollView contentContainerStyle={{ backgroundColor: "white", height: windowHeight }}>
            <View style={{
                marginLeft: 17,
                marginRight: 17,
            }}>
                <View style={styles.typesOfSections}>
                    <Text style={styles.typesText}>WISHLIST</Text>
                </View>
                <View style={styles.itemsCount}>
                    <Text>0 ITEMS</Text>
                    <Text>YOUR WISHLIST IS EMPTY</Text>
                </View>

                <View>
                    <Text>Looking for items you previously saved? Sign in to pick up where you left off</Text>
                </View>
                <Button mode="outlined" textColor='black'
                    style={{ width: '100%', }}
                    contentStyle={{ textAlign: 'center' }}
                    onPress={() => console.log('Pressed explore')}>
                    Sign In
                </Button>
            </View>
        </ScrollView>
    )
}

export default FavouriteRoute