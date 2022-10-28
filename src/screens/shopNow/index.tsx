/* eslint-disable react-native/no-inline-styles */
import {View, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import OneItem from './OneItem';
import {useNavigation} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {selectItems} from '../../redux/slicers/allItemsSlice';
import {IItem} from '../../shared/models/interfaces/item.interface';

const AllItems = (): JSX.Element => {
  const navigation = useNavigation();
  const items = useSelector(selectItems);

  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={{
          backgroundColor: 'white',
        }}>
        <IconButton
          icon="arrow-left-thin"
          // iconColor={MD3Colors.error50}
          size={32}
          onPress={() => navigation.goBack()}
        />
        <View
          style={{
            width: '100%',
            paddingBottom: 100,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {items.map((item: IItem, index: number) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(
                    'ItemDetails' as never,
                    {
                      item,
                    } as never,
                  )
                }
                key={index}
                style={{
                  width: '50%',
                  // flexWrap: 'wrap',
                }}>
                <OneItem
                  id={item.id}
                  season={item.season}
                  image={item.image}
                  brand={item.brand}
                  description={item.description}
                  price={item.price}
                  isHearted={item.isHearted}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default AllItems;
