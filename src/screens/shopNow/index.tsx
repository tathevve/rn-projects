/* eslint-disable react-native/no-inline-styles */
import {View, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import OneItem from './OneItem';
import {firstSlider} from '../bottomPages/home/HomeRoute';
import {useNavigation} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';

const AllItems = (): JSX.Element => {
  const navigation = useNavigation();

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
          {firstSlider.map(item => {
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
                key={item.id}
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
                />
              </TouchableOpacity>
            );
          })}
          {/* <View style={{width: '50%'}}>
            <OneItem
              season="aldfvdso"
              image={image2}
              brand="2"
              description="asdsa"
              price="$315"
            />
          </View>
          <View style={{width: '50%'}}>
            <OneItem
              season="dfgdfg"
              image={image1}
              brand="3"
              description="asdsa"
              price="$315"
            />
          </View> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default AllItems;
