/* eslint-disable react-native/no-inline-styles */
import {View, Image, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import {styles} from '../../../shared/Styles';
import RNButton from '../../../shared/Button';
import Slider from './Slider';
import image1 from '../../../../assets/firstSliderFirst.png';
import image2 from '../../../../assets/firstSliderSecond.png';
import image3 from '../../../../assets/firstSliderThird.png';
import image4 from '../../../../assets/firstSliderForth.png';
// import sliderTwoFirstImg from '../../../../assets/secodSliderFirst.png';
import {IItem} from '../../../shared/models/interfaces/item.interface';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const firstSlider: Array<IItem> = [
  {
    id: 1,
    season: 'New Season',
    brand: 'Heritage',
    price: '$335.00',
    description: 'Ring-Chain Bracelet "Vaspurakan"',
    image: image1,
    imagesArray: [
      {
        id: 1,
        image: image1,
      },
      {
        id: 2,
        image: image2,
      },
      {
        id: 3,
        image: image3,
      },
      {
        id: 4,
        image: image4,
      },
    ],
  },
  {
    id: 2,
    season: '',
    brand: 'Pregomesh',
    price: '$115.00',
    description: 'Earrings' + '\n' + '"Hethum I"',
    image: image2,
    imagesArray: [
      {
        id: 1,
        image: image1,
      },
      {
        id: 2,
        image: image2,
      },
      {
        id: 3,
        image: image3,
      },
      {
        id: 4,
        image: image4,
      },
    ],
  },
  {
    id: 3,
    season: 'New Season',
    brand: 'Heritage',
    price: '$110.00',
    description: 'Ring “Berd”',
    image: image3,
    imagesArray: [
      {
        id: 1,
        image: image1,
      },
      {
        id: 2,
        image: image2,
      },
      {
        id: 3,
        image: image3,
      },
      {
        id: 4,
        image: image4,
      },
    ],
  },
  {
    id: 4,
    season: 'New Season',
    brand: 'Heritage',
    price: '$290.00',
    description: 'Stack Bracelet "Vaspurakan"',
    image: image4,
    imagesArray: [
      {
        id: 1,
        image: image1,
      },
      {
        id: 2,
        image: image2,
      },
      {
        id: 3,
        image: image3,
      },
      {
        id: 4,
        image: image4,
      },
    ],
  },
];

// const secondSlider = [
//   {
//     season: '',
//     brand: 'Artsakh Carpet',
//     price: '$2250.00',
//     description: 'Arevtsil',
//     image: sliderTwoFirstImg,
//   },
// ];

export default function HomeRoute(): JSX.Element {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={{backgroundColor: 'white'}}>
      <View style={styles.bodyHome}>
        <View style={styles.logo}>
          <Image
            style={{width: windowWidth, height: windowHeight / 2}}
            resizeMode="contain"
            source={require('../../../../assets/first.webp')}
          />
          <View style={styles.textView}>
            <Text style={styles.title}>
              Pregomesh: where the 18th century meets Vogue
            </Text>
            <Text style={styles.subtitle}>
              Pregomesh sets the standard for bold and stylish silver jewelry.
              Offering immaculate craftsmanship and original designs rooted in
              rich heritage, our rings, bracelets, necklaces, and brooches make
              a statement when they’re paired with any outfit.
            </Text>
          </View>

          <RNButton
            title="Explore More"
            onPress={() => navigation.navigate('AllItems' as never)}
            buttonStyle={styles.button}
          />
        </View>
        <View style={styles.logo}>
          <View style={styles.textView}>
            <Text>New in</Text>
            <Text>
              hand-picked daily from the world’s best brands and boutiques
            </Text>
          </View>
          <View style={{flex: 1, marginBottom: 25}}>
            <Slider height={windowHeight / 3} sliderData={firstSlider} />
          </View>
          <RNButton
            onPress={() => console.log(' from home page')}
            buttonStyle={styles.button}
          />
        </View>

        <View style={styles.logo}>
          <Image
            style={{width: windowWidth, height: windowHeight / 3}}
            resizeMode="contain"
            source={require('../../../../assets/ninth.webp')}
          />
          <View style={styles.textView}>
            <Text>There Was One</Text>
            <Text>We think you’ll love these</Text>
          </View>
          <View style={{flex: 1, marginBottom: 25}}>
            <Slider height={windowHeight / 3} sliderData={firstSlider} />
            {/* carpet.jpg')*/}
          </View>
          <RNButton
            onPress={() => console.log(' from home page')}
            buttonStyle={styles.button}
          />
        </View>

        <View style={styles.logo}>
          <Image
            style={{width: windowWidth, height: windowHeight}}
            resizeMode="contain"
            source={require('../../../../assets/seventh.webp')}
          />
          <View style={styles.textView}>
            <Text style={styles.title}>TRENDING NOW: CARGO PANTS</Text>
            <Text style={styles.subtitle}>
              The utilitarian favorite is back, and fall’s best styles come
              courtesy of Dion Lee, Marine Serre{' '}
            </Text>
          </View>
          <RNButton
            onPress={() => console.log(' from home page')}
            buttonStyle={styles.button}
          />
        </View>
        <View style={styles.logo}>
          <Image
            style={{width: windowWidth, height: windowHeight / 3}}
            resizeMode="contain"
            source={require('../../../../assets/bigImage4.jpeg')}
          />
          <View style={styles.textView}>
            <Text style={styles.title}>SAINT LAURENT</Text>
            <Text style={styles.subtitle}>
              Fresh takes on the label’s most-loved pieces{' '}
            </Text>
          </View>
          <View style={{flex: 1, marginBottom: 25}}>
            <Slider height={windowHeight / 3} sliderData={firstSlider} />
            {/* slider4.jpg */}
          </View>
          <RNButton
            onPress={() => console.log(' from home page')}
            buttonStyle={styles.button}
          />

          <View style={styles.textView}>
            <Text>Plces we think you’ll love</Text>
            <Text>More style inspirtion, just for you</Text>
          </View>
          <View style={{flex: 1, marginBottom: 25}}>
            <Slider height={windowHeight / 3} sliderData={firstSlider} />
            {/* sider5.jpg */}
          </View>
          <RNButton
            onPress={() => console.log(' from home page')}
            buttonStyle={styles.button}
          />
        </View>
        <View style={styles.logo}>
          <Image
            style={{width: windowWidth, height: windowHeight}}
            resizeMode="contain"
            source={require('../../../../assets/third.webp')}
          />
          <View style={styles.textView}>
            <Text>BURBERRY</Text>
            <Text>Fall layers, the Riccardo Tisci way</Text>
          </View>
          <View style={styles.textView}>
            <Text>Clothing for you</Text>
            {/* <Text style={styles.text}>More style inspirtion, just for you</Text> */}
          </View>
          <View style={{flex: 1, marginBottom: 25}}>
            <Slider height={windowHeight / 3} sliderData={firstSlider} />
            {/* slider6.jpg */}
          </View>
          <RNButton
            onPress={() => console.log(' from home page')}
            buttonStyle={styles.button}
          />
        </View>
      </View>
    </ScrollView>
  );
}
