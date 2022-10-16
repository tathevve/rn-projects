import { View, Image, Dimensions } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel';
import Slider1 from '../../../../assets/slider1.jpg';
import Slider2 from '../../../../assets/slider2.jpg';
import Slider3 from '../../../../assets/slider3.jpg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const images = [
  {
    name: 'abo',
    image: 4,
    image: Slider1,
  },
  {
    name: 'sf',
    image: 43,
    image: Slider2,
  },
  {
    name: 'sdv',
    image: 45,
    image: Slider3,
  },
]

const Slider = ({ height }) => {
  return (
    <Carousel
      loop
      width={windowWidth}
      height={height}
      autoPlay={false}
      data={images}
      scrollAnimationDuration={1000}
      onSnapToItem={(index) => console.log('current index:', index)}
      renderItem={({ item, index }) => (
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
          key={index}
        >
          {/* {console.log(images, 'index')} */}
          <Image
            resizeMode='contain'
            style={{
              width: '50%',
              height: '100%',
              // position:'absolute'
            }}
            source={item.image}
          />
          <View style={{ width: '50%' }}>
            <Text style={{ textAlign: 'center', color: '#808080' }}>
              {item.name}
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
  )
}

export default Slider