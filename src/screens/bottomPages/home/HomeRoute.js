import { View, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { BottomNavigation, IconButton, Button, List, Searchbar, Text, TextInput } from 'react-native-paper';
import { styles } from '../../../shared/Styles';
import Carousel from 'react-native-reanimated-carousel';
import MyButton from '../../../shared/MyButton';
import Slider from './Slider';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function HomeRoute() {
    return (
        <ScrollView contentContainerStyle={{ backgroundColor: "white" }}>
            <View style={styles.bodyHome}>
                <View style={styles.logo}>
                    <Image
                        style={{ width: windowWidth, height: windowHeight / 2, }}
                        resizeMode='contain'
                        source={require('../../../../assets/first.webp')}
                    />
                    <View style={styles.textView}>
                        <Text style={styles.title}>Pregomesh: where the 18th century meets Vogue</Text>
                        <Text style={styles.subtitle}>Pregomesh sets the standard for bold and stylish silver jewelry. Offering immaculate craftsmanship and original designs rooted in rich heritage, our rings, bracelets, necklaces, and brooches make a statement when they’re paired with any outfit.</Text>
                    </View>

                    <MyButton title='Explore More' />
                </View>
                <View style={styles.logo}>
                    <View style={styles.textView}>
                        <Text style={styles.textUpper}>New in</Text>
                        <Text style={styles.text}>hand-picked daily from the world’s best brands and boutiques</Text>
                    </View>
                    <View style={{ flex: 1, marginBottom: 25 }}>
                        <Slider
                            height={windowHeight / 4}
                        />

                    </View>
                    <MyButton title='Shop Now' />
                </View>

                <View style={styles.logo}>
                    <Image
                        style={{ width: windowWidth, height: windowHeight / 3, }}
                        resizeMode='contain'
                        source={require('../../../../assets/ninth.webp')}
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
                                        source={require('../../../../assets/carpet.jpg')}
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
                    <MyButton title='Shop Now' />

                </View>

                <View style={styles.logo}>
                    <Image
                        style={{ width: windowWidth, height: windowHeight, }}
                        resizeMode='contain'
                        source={require('../../../../assets/seventh.webp')}
                    />
                    <View style={styles.textView}>
                        <Text style={styles.title}>TRENDING NOW: CARGO PANTS</Text>
                        <Text style={styles.subtitle}>The utilitarian favorite is back, and fall’s best styles come courtesy of Dion Lee, Marine Serre </Text>
                    </View>
                    <MyButton title='Shop Now' />

                </View>
                <View style={styles.logo}>
                    <Image
                        style={{ width: windowWidth, height: windowHeight / 3, }}
                        resizeMode='contain'
                        source={require('../../../../assets/bigImage4.jpeg')}
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
                                        source={require('../../../../assets/slider4.jpg')}
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
                    <MyButton title='Shop Now' />

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
                                        source={require('../../../../assets/slider5.jpg')}
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
                    <MyButton title='Shop Now' />


                </View>
                <View style={styles.logo}>
                    <Image
                        style={{ width: windowWidth, height: windowHeight, }}
                        resizeMode='contain'
                        source={require('../../../../assets/third.webp')}
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
                                        source={require('../../../../assets/slider6.jpg')}
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
                    <MyButton title='Shop Now' />

                </View>
            </View>

        </ScrollView>
    )
}

