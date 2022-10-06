import { View, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { BottomNavigation, IconButton, Button, List, Searchbar, Text, TextInput } from 'react-native-paper';
import { styles } from '../../../shared/Styles';
import Carousel from 'react-native-reanimated-carousel';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const images = [
  {
    item: 'abo',
    index: 4,
  },
  {
    item: 'sf',
    index: 43,
  },
  {
    item: 'sdv',
    index: 45,
  },
]

// console.log([...new Array(8).keys()], 'aaa')


const Slider = ({ height }) => {
  return (
    <Carousel
      loop
      width={windowWidth}
      height={height}
      autoPlay={false}
      // style={{backgroundColor:'#EDEBE9'}}
      data={[...new Array(8).keys()]}
      scrollAnimationDuration={1000}
      onSnapToItem={(index) => console.log('current index:', index)}
      renderItem={(images) => (
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
          {/* {console.log(images, 'index')} */}
          <Image
            resizeMode='contain'
            style={{
              width: '50%',
              height: '100%',
              // position:'absolute'
            }}
            source={require('../../../../assets/ring.webp')}
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
  )
}

export default Slider