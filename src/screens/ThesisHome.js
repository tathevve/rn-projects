import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { BottomNavigation, Button, IconButton, Text } from 'react-native-paper';

const FavouriteRoute = () => <Text>Wishlist</Text>;

const HomeRoute = () => {
    return (
        <View>
            <View>
                <View style={styles.logo}>
                    <Image

                        source={require('../../assets/data.jpeg')}
                    />
                    <View style={styles.textView}>
                        <Text style={styles.textUpper}>Valentino Garavani: all pink everything</Text>
                        <Text style={styles.text}>Creative Director Pierpaolo Piccioli’s new Valentino Pink PP collection turns fashion’s boldest shade into an ultra-wearable modern neutral — discover the runway highlights here</Text>
                    </View>

                    <Button mode="outlined" textColor='black'
                        style={{ width: '80%', }}
                        contentStyle={{textAlign:'center'}}
                        onPress={() => console.log('Pressed explore')}>
                        Explore More
                    </Button>
                </View>

            </View>

        </View>
    )
};

const TagRoute = () => <Text>Brands</Text>;

const AccountRoute = () => <Text>Account</Text>;

const SearchRoute = () => <Text>Search</Text>;

const ThesisHome = () => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
        { key: 'find', title: 'Search', focusedIcon: 'tag-search', unfocusedIcon: 'tag-search-outline' },
        { key: 'tag', title: 'Brands', focusedIcon: 'tag', unfocusedIcon: 'tag-outline' },
        { key: 'favourite', title: 'Wishlist', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
        { key: 'account', title: 'Me', focusedIcon: 'account', unfocusedIcon: 'account-outline' },

    ]);

    const renderScene = BottomNavigation.SceneMap({
        favourite: FavouriteRoute,
        home: HomeRoute,
        tag: TagRoute,
        account: AccountRoute,
        find: SearchRoute,
    });

    return (
        <View style={styles.body}>
            <View style={styles.headerWrapper}>
                <Text style={styles.header}> GUTAN </Text>
                <View style={styles.shopping}>
                    <IconButton
                        icon="shopping-outline"
                        // iconColor={MD3Colors.error50}
                        size={25}
                        onPress={() => console.log('Pressed')}
                    />
                </View>

            </View>

            <BottomNavigation
                style={styles.page}
                barStyle={{
                    // backgroundColor: '#694fad',
                    color: 'black'
                }}
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
            />
        </View>
    )
}

export default ThesisHome;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        // backgroundColor:'white'
    },
    page: {
        backgroundColor: 'black'
    },
    headerWrapper: {
        borderBottomWidth: 4,
        borderBottomColor: 'white',
        paddingBottom: 5,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    header: {
        fontSize: 36,
        width: '87%',
        color: 'black',
        textAlign: 'center',
    },
    shopping: {
        width: '7%'
    },
    logo: {
        // width: '100%',
        alignItems: 'center'
    },
    textUpper: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 21
    },
    textView: {
        width: '80%',
        marginTop: 15,
        marginBottom: 15,
    },

})