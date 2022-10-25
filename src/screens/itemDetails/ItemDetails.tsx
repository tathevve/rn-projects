/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import ItemSlider from './ItemSlider';

const ItemDetails = ({route}: any) => {
  const itemParams = route.params;
  const navigation = useNavigation();

  console.log(itemParams, 'itemParams');

  return (
    <ScrollView style={{backgroundColor: 'white', position: 'relative'}}>
      <IconButton
        icon="alpha-x"
        // iconColor={MD3Colors.error50}
        style={{
          position: 'absolute',
          top: 0,
          left: 5,
          height: 30,
          width: 30,
          zIndex: 2,
        }}
        onPress={() => navigation.goBack()}
      />
      <View
        style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <Text>{itemParams.item.brand}</Text>
        <ItemSlider sliderData={itemParams.item.imagesArray} height={300} />
        <Text> {itemParams.item.season}</Text>
        <Text>{itemParams.item.brand} </Text>
        <Text>{itemParams.item.description}</Text>
        <Text>{itemParams.item.price}</Text>
      </View>
    </ScrollView>
  );
};

export default ItemDetails;
