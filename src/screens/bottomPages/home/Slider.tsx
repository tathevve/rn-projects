/* eslint-disable react-native/no-inline-styles */
import {View, Image, Dimensions} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel';
import {ISlider} from '../../../shared/models/interfaces/slider.interface';

const windowWidth = Dimensions.get('window').width;

interface ISliderProps {
  height: number;
  sliderData: Array<ISlider>;
}

const Slider = ({height, sliderData}: ISliderProps): JSX.Element => {
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
          {/* {console.log(images, 'index')} */}
          <Image
            resizeMode="contain"
            style={{
              width: '50%',
              height: '100%',
              // position:'absolute'
            }}
            source={item.image}
          />
          <View style={{width: '50%'}}>
            <Text style={{textAlign: 'center', color: '#808080'}}>
              {item?.season}
            </Text>
            <Text style={{textAlign: 'center', fontSize: 30}}>
              {item.brand}
            </Text>
            <Text style={{textAlign: 'center', fontSize: 25}}>
              {item.description}
            </Text>
            <Text style={{textAlign: 'center', fontSize: 25, paddingTop: 25}}>
              {item.price}
            </Text>
          </View>
        </View>
      )}
    />
  );
};

export default Slider;
