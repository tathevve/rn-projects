import { View, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { BottomNavigation, Button, IconButton, List, Searchbar, Text, TextInput } from 'react-native-paper';
import { styles } from '../../../shared/Styles';
import Categories from './Categories';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const SearchRoute = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => { setSearchQuery(query); console.log(searchQuery, 'search') };
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <ScrollView contentContainerStyle={{ backgroundColor: "white", height: windowHeight }}>
            <View style={{
                marginLeft: 17,
                marginRight: 17,
            }}>
                <View style={{ alignItems: 'center' }}>
                    <Searchbar
                        placeholder="Search"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                    />
                </View>
                <View style={styles.cathegories}>
                    <View style={styles.typesOfSections}>
                        <Text style={styles.typesText}>WOMEN</Text>
                    </View>
                    <View style={styles.cathegoriesList}>
                        <Categories typeTitle='Clothing' />
                        <Categories typeTitle='Shoes' />
                        <Categories typeTitle='Bags' />
                        <Categories typeTitle='Shop By' />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default SearchRoute;
