/* eslint-disable react-native/no-inline-styles */
import {View, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import {Searchbar, Text} from 'react-native-paper';
import Categories from './Categories';

const windowHeight = Dimensions.get('window').height;

const SearchRoute = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: string): void => {
    setSearchQuery(query);
  };
  // console.log(searchQuery, 'query');
  // const filtered = firstSlider.map(item => {
  //   item.filter
  // });

  // console.log(filtered, 'filtered');

  return (
    <ScrollView
      contentContainerStyle={{backgroundColor: 'white', height: windowHeight}}>
      <View
        style={{
          marginLeft: 17,
          marginRight: 17,
        }}>
        <View style={{alignItems: 'center'}}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{backgroundColor: 'white'}}
          />
        </View>
        <View>
          <View>
            <Text>WOMEN</Text>
          </View>
          <View>
            <Categories typeTitle="Clothing" />
            <Categories typeTitle="Shoes" />
            <Categories typeTitle="Bags" />
            <Categories typeTitle="Shop By" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SearchRoute;
