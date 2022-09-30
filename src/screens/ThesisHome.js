import { View, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { BottomNavigation, Button, IconButton, List, Searchbar, Text, TextInput } from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel';
import ActionSheet from "react-native-actions-sheet";
import { useRef } from 'react';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeRoute = () => {

    return (
        <ScrollView contentContainerStyle={{ backgroundColor: "white" }}>
            <View style={styles.bodyHome}>
                <View style={styles.logo}>
                    <Image
                        style={{ width: windowWidth, height: windowHeight / 2, }}
                        resizeMode='contain'
                        source={require('../../assets/data.jpeg')}
                    />
                    <View style={styles.textView}>
                        <Text style={styles.title}>Valentino Garavani: all pink everything</Text>
                        <Text style={styles.subtitle}>Creative Director Pierpaolo Piccioli’s new Valentino Pink PP collection turns fashion’s boldest shade into an ultra-wearable modern neutral — discover the runway highlights here</Text>
                    </View>

                    <Button mode="outlined" textColor='black'
                        style={{ width: '100%', }}
                        contentStyle={{ textAlign: 'center' }}
                        onPress={() => console.log('Pressed explore')}>
                        Explore More
                    </Button>
                </View>
                <View style={styles.logo}>
                    <View style={styles.textView}>
                        <Text style={styles.textUpper}>New in</Text>
                        <Text style={styles.text}>hand-picked daily from the world’s best brands and boutiques</Text>
                    </View>
                    <View style={{ flex: 1, marginBottom: 25 }}>
                        <Carousel
                            loop
                            width={windowWidth}
                            height={windowHeight / 4}
                            autoPlay={false}
                            data={[...new Array(6).keys()]}
                            scrollAnimationDuration={1000}
                            onSnapToItem={(index) => console.log('current index:', index)}
                            renderItem={({ index }) => (
                                <View
                                    style={{
                                        flex: 1,
                                        // borderWidth: 1,
                                        // backgroundColor:'red',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Image
                                        resizeMode='contain'
                                        style={{
                                            width: '50%',
                                            height: '100%',
                                            // position:'absolute'
                                        }}
                                        source={require('../../assets/slider2.jpg')}
                                    />
                                    <View style={{ width: '50%' }}>
                                        <Text style={{ textAlign: 'center', color: '#808080' }}>
                                            New Season
                                        </Text>
                                        <Text style={{ textAlign: 'center', fontSize: 30 }}>
                                            Versace
                                        </Text>
                                        <Text style={{ textAlign: 'center', fontSize: 25 }}>
                                            Medusa-plaque clutch bag
                                        </Text>
                                        <Text style={{ textAlign: 'center', fontSize: 25, paddingTop: 25 }}>
                                            $1.175
                                        </Text>
                                    </View>

                                </View>
                            )}
                        />

                    </View>
                    <Button mode="outlined" textColor='black'
                        style={{ width: '100%', marginBottom: 20 }}
                        contentStyle={{ textAlign: 'center' }}
                        onPress={() => console.log('Pressed shop')}>
                        Shop Now
                    </Button>
                </View>

                <View style={styles.logo}>
                    <Image
                        style={{ width: windowWidth, height: windowHeight / 2, }}
                        resizeMode='contain'
                        source={require('../../assets/bigImage1.png')}
                    />
                    <View style={styles.textView}>
                        <Text style={styles.textUpper}>There Was One</Text>
                        <Text style={styles.text}>We think you’ll love these</Text>
                    </View>
                    <View style={{ flex: 1, marginBottom: 25 }}>
                        <Carousel
                            loop
                            width={windowWidth}
                            height={windowHeight / 4}
                            autoPlay={false}
                            data={[...new Array(6).keys()]}
                            scrollAnimationDuration={1000}
                            onSnapToItem={(index) => console.log('current index:', index)}
                            renderItem={({ index }) => (
                                <View
                                    style={{
                                        flex: 1,
                                        // borderWidth: 1,
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Image
                                        resizeMode='contain'
                                        style={{
                                            width: '50%',
                                            height: '100%',
                                            // position:'absolute'
                                        }}
                                        source={require('../../assets/slider1.jpg')}
                                    />
                                    <View style={{ width: '50%' }}>
                                        <Text style={{ textAlign: 'center', color: '#808080' }}>
                                            New Season
                                        </Text>
                                        <Text style={{ textAlign: 'center', fontSize: 30 }}>
                                            Paris Georgia
                                        </Text>
                                        <Text style={{ textAlign: 'center', fontSize: 25 }}>
                                            Off-shoulder corset top
                                        </Text>
                                        <Text style={{ textAlign: 'center', fontSize: 25, paddingTop: 25 }}>
                                            $409
                                        </Text>
                                    </View>

                                </View>
                            )}
                        />

                    </View>
                    <Button mode="outlined" textColor='black'
                        style={{ width: '100%', marginBottom: 20 }}
                        contentStyle={{ textAlign: 'center' }}
                        onPress={() => console.log('Pressed shop')}>
                        Shop Now
                    </Button>
                </View>

                <View style={styles.logo}>
                    <Image
                        style={{ width: windowWidth, height: windowHeight / 2, }}
                        resizeMode='contain'
                        source={require('../../assets/bigImage3.jpeg')}
                    />
                    <View style={styles.textView}>
                        <Text style={styles.title}>TRENDING NOW: CARGO PANTS</Text>
                        <Text style={styles.subtitle}>The utilitarian favorite is back, and fall’s best styles come courtesy of Dion Lee, Marine Serre </Text>
                    </View>
                    <Button mode="outlined" textColor='black'
                        style={{ width: '100%', marginBottom: 20 }}
                        contentStyle={{ textAlign: 'center' }}
                        onPress={() => console.log('Pressed shop')}>
                        Shop Now
                    </Button>
                </View>
                <View style={styles.logo}>
                    <Image
                        style={{ width: windowWidth, height: windowHeight / 3, }}
                        resizeMode='contain'
                        source={require('../../assets/bigImage4.jpeg')}
                    />
                    <View style={styles.textView}>
                        <Text style={styles.title}>SAINT LAURENT</Text>
                        <Text style={styles.subtitle}>Fresh takes on the label’s most-loved pieces </Text>
                    </View>
                    <View style={{ flex: 1, marginBottom: 25 }}>
                        <Carousel
                            loop
                            width={windowWidth}
                            height={windowHeight / 4}
                            autoPlay={false}
                            data={[...new Array(6).keys()]}
                            scrollAnimationDuration={1000}
                            onSnapToItem={(index) => console.log('current index:', index)}
                            renderItem={({ index }) => (
                                <View
                                    style={{
                                        flex: 1,
                                        // borderWidth: 1,
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Image
                                        resizeMode='contain'
                                        style={{
                                            width: '50%',
                                            height: '100%',
                                            // position:'absolute'
                                        }}
                                        source={require('../../assets/slider4.jpg')}
                                    />
                                    <View style={{ width: '50%' }}>
                                        <Text style={{ textAlign: 'center', color: '#808080' }}>
                                            New Season
                                        </Text>
                                        <Text style={{ textAlign: 'center', fontSize: 30 }}>
                                            Versace
                                        </Text>
                                        <Text style={{ textAlign: 'center', fontSize: 25 }}>
                                            Medusa-plaque clutch bag
                                        </Text>
                                        <Text style={{ textAlign: 'center', fontSize: 25, paddingTop: 25 }}>
                                            $1.175
                                        </Text>
                                    </View>

                                </View>
                            )}
                        />

                    </View>
                    <Button mode="outlined" textColor='black'
                        style={{ width: '100%', marginBottom: 20 }}
                        contentStyle={{ textAlign: 'center' }}
                        onPress={() => console.log('Pressed shop')}>
                        Shop Now
                    </Button>
                    <View style={styles.textView}>
                        <Text style={styles.textUpper}>Plces we think you’ll love</Text>
                        <Text style={styles.text}>More style inspirtion, just for you</Text>
                    </View>
                    <View style={{ flex: 1, marginBottom: 25 }}>
                        <Carousel
                            loop
                            width={windowWidth}
                            height={windowHeight / 4}
                            autoPlay={false}
                            data={[...new Array(6).keys()]}
                            scrollAnimationDuration={1000}
                            onSnapToItem={(index) => console.log('current index:', index)}
                            renderItem={({ index }) => (
                                <View
                                    style={{
                                        flex: 1,
                                        // borderWidth: 1,
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Image
                                        resizeMode='contain'
                                        style={{
                                            width: '50%',
                                            height: '100%',
                                            // position:'absolute'
                                        }}
                                        source={require('../../assets/slider5.jpg')}
                                    />
                                    <View style={{ width: '50%' }}>
                                        <Text style={{ textAlign: 'center', color: '#808080' }}>
                                            New Season
                                        </Text>
                                        <Text style={{ textAlign: 'center', fontSize: 30 }}>
                                            Versace
                                        </Text>
                                        <Text style={{ textAlign: 'center', fontSize: 25 }}>
                                            Medusa-plaque clutch bag
                                        </Text>
                                        <Text style={{ textAlign: 'center', fontSize: 25, paddingTop: 25 }}>
                                            $1.175
                                        </Text>
                                    </View>

                                </View>
                            )}
                        />

                    </View>
                    <Button mode="outlined" textColor='black'
                        style={{ width: '100%', marginBottom: 20 }}
                        contentStyle={{ textAlign: 'center' }}
                        onPress={() => console.log('Pressed shop')}>
                        Shop Now
                    </Button>

                </View>
                <View style={styles.logo}>
                    <Image
                        style={{ width: windowWidth, height: windowHeight / 2, }}
                        resizeMode='contain'
                        source={require('../../assets/bigImage5.jpeg')}
                    />
                    <View style={styles.textView}>
                        <Text style={styles.textUpper}>BURBERRY</Text>
                        <Text style={styles.text}>Fall layers, the Riccardo Tisci way</Text>
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.textUpper}>Clothing for you</Text>
                        {/* <Text style={styles.text}>More style inspirtion, just for you</Text> */}
                    </View>
                    <View style={{ flex: 1, marginBottom: 25 }}>
                        <Carousel
                            loop
                            width={windowWidth}
                            height={windowHeight / 4}
                            autoPlay={false}
                            data={[...new Array(6).keys()]}
                            scrollAnimationDuration={1000}
                            onSnapToItem={(index) => console.log('current index:', index)}
                            renderItem={({ index }) => (
                                <View
                                    style={{
                                        flex: 1,
                                        // borderWidth: 1,
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Image
                                        resizeMode='contain'
                                        style={{
                                            width: '50%',
                                            height: '100%',
                                            // position:'absolute'
                                        }}
                                        source={require('../../assets/slider6.jpg')}
                                    />
                                    <View style={{ width: '50%' }}>
                                        <Text style={{ textAlign: 'center', color: '#808080' }}>
                                            New Season
                                        </Text>
                                        <Text style={{ textAlign: 'center', fontSize: 30 }}>
                                            Versace
                                        </Text>
                                        <Text style={{ textAlign: 'center', fontSize: 25 }}>
                                            Medusa-plaque clutch bag
                                        </Text>
                                        <Text style={{ textAlign: 'center', fontSize: 25, paddingTop: 25 }}>
                                            $1.175
                                        </Text>
                                    </View>

                                </View>
                            )}
                        />

                    </View>
                    <Button mode="outlined" textColor='black'
                        style={{ width: '100%', marginBottom: 20 }}
                        contentStyle={{ textAlign: 'center' }}
                        onPress={() => console.log('Pressed shop')}>
                        Shop Now
                    </Button>
                </View>
            </View>

        </ScrollView>
    )
};

const SearchRoute = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => {setSearchQuery(query); console.log(searchQuery,'search')};
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <ScrollView contentContainerStyle={{ backgroundColor: "white", height: windowHeight }}>
            <View>
                <View style={{ alignItems: 'center' }}>
                    <Searchbar
                        placeholder="Search"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                    />
                </View>
                <View style={styles.cathegories}>
                    <View style={styles.types}>
                        <Text>WOMEN</Text>
                    </View>
                    <View style={styles.cathegoriesList}>
                        <List.Section title="">
                            <List.Accordion
                                title="Clothing"
                                // left={props => <List.Icon {...props} icon="folder" />}
                                expanded={expanded}
                                onPress={handlePress}
                            >
                                <List.Accordion title="A Accordion" >
                                    <List.Item title="First item" onPress={() => console.log('first item')} />
                                    <List.Item title="Second item" onPress={() => console.log('second item')} />
                                </List.Accordion>
                            </List.Accordion>
                        </List.Section>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};

const BrandsRoute = () => {

    return (
        <ScrollView contentContainerStyle={{ backgroundColor: "white", height: windowHeight }}>
            <View>
                <View style={styles.types}>
                    <Text>WOMEN</Text>
                </View>

                <Text>YOUR GO-TO BRANDS</Text>
                <View style={{ alignItems: 'center', marginTop: 25 }}>
                    <View style={{ width: '90%', backgroundColor: 'rgba(217, 217, 217, 0.22)', height: '45%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>

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
                            source={require('../../assets/slider2_1.png')}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};


const FavouriteRoute = () => {
    return (
        <ScrollView contentContainerStyle={{ backgroundColor: "white", height: windowHeight }}>
            <View>
                <View style={styles.types}>
                    <Text>WISHLIST</Text>
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
};

const AccountRoute = () => {
    return (
        <View style={{ backgroundColor: "white"}}>
            <View style={{ display: 'flex', justifyContent: 'space-between', }}>
                <View style={{ height: '50%' }}>
                    <View style={styles.acoount}>
                        <Text>ME</Text>
                    </View>
                    <View>
                        <Text>LET’S GET PERSONAL</Text>
                    </View>
                    <View>
                        <Text>Access your Bag & Wishlist on any of your devices</Text>
                    </View>
                    <View style={styles.buttons}>
                        <Button mode="outlined" textColor='black'
                            style={{ width: '100%', marginBottom: 15 }}
                            contentStyle={{ textAlign: 'center' }}
                            onPress={() => console.log('Pressed explore')}>
                            Register
                        </Button>
                        <Button mode="outlined" textColor='black'
                            style={{ width: '100%', }}
                            contentStyle={{ textAlign: 'center' }}
                            onPress={() => console.log('Pressed explore')}>
                            Sign In
                        </Button>

                    </View>
                </View>
                <View style={{display:'flex', justifyContent:'flex-end', alignItems:'center', height:'50%'}}>
                    <Text>
                        Contact us
                    </Text>
                    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                            <IconButton
                                icon="phone-outline"
                                // iconColor={MD3Colors.error50}
                                size={25}
                                onPress={() => console.log('phone')}
                            />
                            <Text>
                                phone
                            </Text>
                        </View>
                        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <IconButton
                                icon="email-outline"
                                // iconColor={MD3Colors.error50}
                                size={25}
                                onPress={() => console.log('email')}
                            />
                            <Text>
                                email
                            </Text>
                        </View>
                    </View>
                    <Text>
                        Available Monday to Friday 9am - 6pm GMT
                    </Text>
                </View>
            </View>
        </View>
    )
};


console.log(windowWidth, 'ww')
console.log(windowHeight, 'wh')



const ThesisHome = () => {

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
                    <Text>Hi, I am here.</Text>
                </View>
            </ActionSheet>
            <View style={styles.headerWrapper}>
                <Text style={styles.header}> GUTAN </Text>
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
        backgroundColor: "white"
    },
    bodyHome: {
        marginLeft: 35,
        marginRight: 35,
    },
    page: {
        // backgroundColor: 'red'
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
        alignItems: 'center',

    },
    image: {
        width: windowWidth,
        height: 100,
        paddingTop: 50,
        flex: 1,
        resizeMode: "contain"
        // height: '50%'
        // position: 'relative'
    },
    title: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 21
    },
    subtitle: {
        paddingTop: 10
    },
    textView: {
        width: '100%',
        marginTop: 25,
        marginBottom: 15,
    },

})