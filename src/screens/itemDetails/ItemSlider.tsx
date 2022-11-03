/* eslint-disable react-native/no-inline-styles */
import {View, Image, Dimensions} from 'react-native';
import React from 'react';
// import {Text} from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel';
// import {IItem} from '../../shared/models/interfaces/item.interface';

const windowWidth = Dimensions.get('window').width;

interface ISliderProps {
  height?: number;
  sliderData: Array<any | string>;
}

const ItemSlider = ({height, sliderData}: ISliderProps): JSX.Element => {
  return (
    <Carousel
      loop
      width={windowWidth}
      height={height}
      autoPlay={false}
      data={sliderData}
      scrollAnimationDuration={1000}
      onSnapToItem={index => console.log('current index:', index)}
      renderItem={({item, index}) => (
        <View
          style={{
            flex: 1,
            // borderWidth: 1,
            // backgroundColor:'red',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          key={index}>
          <Image
            resizeMode="contain"
            style={{
              width: '100%',
              height: '100%',
            }}
            source={item.image}
          />
        </View>
      )}
    />
  );
};

export default ItemSlider;
