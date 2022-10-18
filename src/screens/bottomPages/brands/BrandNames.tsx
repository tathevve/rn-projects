/* eslint-disable react-native/no-inline-styles */
import {View, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import {IconButton, Text} from 'react-native-paper';

interface IBrandNameProps {
  brandName: string;
  imagePath: ImageSourcePropType;
}

const BrandNames = ({brandName, imagePath}: IBrandNameProps): JSX.Element => {
  return (
    <View
      style={{
        width: '100%',
        marginBottom: 5,
        backgroundColor: 'rgba(217, 217, 217, 0.22)',
        height: '30%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <IconButton
          icon="cards-heart-outline"
          // iconColor={MD3Colors.error50}
          size={25}
          onPress={() => console.log('heart')}
        />
        <Text>{brandName}</Text>
      </View>
      <Image
        resizeMode="contain"
        style={{
          width: '50%',
          height: '90%',
          // position:'absolute'
        }}
        source={imagePath}
      />
    </View>
  );
};

export default BrandNames;
