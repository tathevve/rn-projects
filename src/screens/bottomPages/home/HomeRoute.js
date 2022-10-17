import { View, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { BottomNavigation, IconButton, Button, List, Searchbar, Text, TextInput } from 'react-native-paper';
import { styles } from '../../../shared/Styles';
import MyButton from '../../../shared/MyButton';
import Slider from './Slider';
import image1 from "../.././../../assets/firstSliderFirst.png"
import image2 from "../.././../../assets/firstSliderSecond.png"
import image3 from "../.././../../assets/firstSliderThird.png"
import image4 from "../.././../../assets/firstSliderForth.png"
import sliderTwoFirstImg from "../.././../../assets/secodSliderFirst.png"


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const firstSlider = [
    {
        season: 'New Season',
        brand: 'Heritage',
        price: '$335.00',
        description: 'Ring-Chain Bracelet "Vaspurakan"',
        image: image1,
    },
    {
        season: '',
        brand: 'Pregomesh',
        price: '$115.00',
        description: 'Earrings' + '\n' + '"Hethum I"',
        image: image2,
    },
    {
        season: 'New Season',
        brand: 'Heritage',
        price: '$110.00',
        description: 'Ring “Berd”',
        image: image3,
    },
    {
        season: 'New Season',
        brand: 'Heritage',
        price: '$290.00',
        description: 'Stack Bracelet "Vaspurakan"',
        image: image4,
    },
]

const secondSlider = [
    {
        season: '',
        brand: 'Artsakh Carpet',
        price: '$2250.00',
        description: 'Arevtsil',
        image: sliderTwoFirstImg,
    },
]

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

                    <MyButton title='Explore More' onPress={() => console.log('explore more in home page')} />
                </View>
                <View style={styles.logo}>
                    <View style={styles.textView}>
                        <Text style={styles.textUpper}>New in</Text>
                        <Text style={styles.text}>hand-picked daily from the world’s best brands and boutiques</Text>
                    </View>
                    <View style={{ flex: 1, marginBottom: 25 }}>
                        <Slider
                            height={windowHeight / 3}
                            sliderData={firstSlider}
                        />

                    </View>
                    <MyButton onPress={() => console.log(' from home page')} />
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
                        <Slider
                            height={windowHeight / 4}
                            sliderData={secondSlider}
                        />
                        {/* carpet.jpg')*/}

                    </View>
                    <MyButton onPress={() => console.log(' from home page')} />

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
                    <MyButton onPress={() => console.log(' from home page')} />

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
                        <Slider
                            height={windowHeight / 4}
                        />
                        {/* slider4.jpg */}

                    </View>
                    <MyButton onPress={() => console.log(' from home page')} />

                    <View style={styles.textView}>
                        <Text style={styles.textUpper}>Plces we think you’ll love</Text>
                        <Text style={styles.text}>More style inspirtion, just for you</Text>
                    </View>
                    <View style={{ flex: 1, marginBottom: 25 }}>
                        <Slider
                            height={windowHeight / 4}
                        />
                        {/* sider5.jpg */}

                    </View>
                    <MyButton onPress={() => console.log(' from home page')} />


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
                        <Slider
                            height={windowHeight / 4}
                        />
                        {/* slider6.jpg */}

                    </View>
                    <MyButton onPress={() => console.log(' from home page')} />

                </View>
            </View>

        </ScrollView>
    )
}

