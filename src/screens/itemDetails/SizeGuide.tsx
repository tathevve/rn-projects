/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import OneItem from '../shopNow/OneItem';
import {IItem} from '../../shared/models/interfaces/item.interface';

const SizeGuide = ({route}: any): JSX.Element => {
  const itemParams = route.params?.item as IItem;

  console.log(itemParams, 'itemParams');

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{marginHorizontal: 17}}>
        <Text>SizeGuide</Text>
        <View
          style={{
            width: '100%',
            paddingBottom: 100,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          <View
            style={{
              width: '50%',
              // flexWrap: 'wrap',
            }}>
            <OneItem item={itemParams} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SizeGuide;
