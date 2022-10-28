/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import ItemSlider from './ItemSlider';
import RNPickerSelect from 'react-native-picker-select';
import {useSelector} from 'react-redux';
import {selectItems} from '../../redux/slicers/allItemsSlice';
import {IItem} from '../../shared/models/interfaces/item.interface';

const ItemDetails = ({route}: any) => {
  const itemParams = route.params;
  const navigation = useNavigation();
  const items = useSelector(selectItems);

  console.log(itemParams, 'itemParams');

  const findItemDetail = items.find((i: IItem) => i.id === itemParams.item.id);

  console.log(findItemDetail, 'findfind');
  // console.log(items, 'fbjjmindfind');
  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
        position: 'relative',
      }}>
      <View style={{marginHorizontal: 17}}>
        <IconButton
          icon="arrow-left-thin"
          // iconColor={MD3Colors.error50}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: 30,
            width: 30,
            zIndex: 2,
          }}
          onPress={() => navigation.goBack()}
        />

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>{findItemDetail.brand}</Text>
          <ItemSlider sliderData={findItemDetail.imagesArray} height={300} />
          <Text> {findItemDetail.season}</Text>
          <Text>{findItemDetail.brand} </Text>
          <Text>{findItemDetail.description}</Text>
          <Text>{findItemDetail.price}</Text>
        </View>

        <RNPickerSelect
          placeholder={{
            label: 'Select your size',
          }}
          style={{}}
          onValueChange={value => console.log(value, 'value')}
          items={[
            {label: 'XXXS', value: 'xxxs'},
            {label: 'XXS', value: 'xxs'},
            {label: 'XS', value: 'xs'},
            {label: 'S', value: 's'},
            {label: 'M', value: 'm'},
            {label: 'L', value: 'l'},
            {label: 'XL', value: 'l'},
            {label: 'XXL', value: 'xxl'},
            {label: 'XXXL', value: 'xxxl'},
            {label: '4XL', value: '4xl'},
          ]}
        />
        <View
          style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              width: '40%',
              borderBottomWidth: 1,
              borderBottomColor: 'black',
              paddingBottom: 10,
            }}
            onPress={() => console.log('aaa')}>
            <Text style={{textAlign: 'center'}}>View size guide</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '40%',
              borderBottomWidth: 1,
              borderBottomColor: 'black',
              paddingBottom: 10,
            }}
            onPress={() => console.log('bbb')}>
            <Text style={{textAlign: 'center'}}>Size missing?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ItemDetails;
