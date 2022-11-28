/* eslint-disable react-native/no-inline-styles */
import {View, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import OneItem from './OneItem';
import {useNavigation} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {selectItems} from '../../redux/slicers/allItemsSlice';
import {IItem} from '../../shared/models/interfaces/item.interface';
import {EPath} from '../../shared/models/enums/path.enum';
import LeftMenu from '../../shared/LeftMenu';

const AllItems = (): JSX.Element => {
  const navigation = useNavigation();
  const items = useSelector(selectItems);

  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={{
          backgroundColor: 'white',
        }}>
        <View
          style={{
            position: 'relative',
            height: 77,
            zIndex: 2,
          }}>
          <IconButton
            icon="arrow-left-thin"
            style={{
              position: 'absolute',
              top: 0,
              left: 20,
              // right: 0,
              height: 30,
              width: 30,
              zIndex: 2,
            }}
            size={32}
            onPress={() => navigation.goBack()}
          />
          <LeftMenu />
        </View>
        <View
          style={{
            width: '100%',
            paddingBottom: 100,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {items.map((item: Omit<IItem, 'count'>, index: number) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(
                    EPath.ITEMDETAILS as never,
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
                <OneItem item={item} showHeartIcon />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default AllItems;
