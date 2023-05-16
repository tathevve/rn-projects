/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {Searchbar} from 'react-native-paper';
import Categories from './Categories';
// import AllItems from '../../shopNow';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {IItem} from '../../../shared/models/interfaces/item.interface';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {EPath} from '../../../shared/models/enums/path.enum';
import OneItem from '../../shopNow/OneItem';
import {selectRecommendItems} from '../../../redux/slicers/recommendSlice';

const windowHeight = Dimensions.get('window').height;

const SearchRoute = (): JSX.Element => {
  const navigation = useNavigation();
  const items = useSelector(selectRecommendItems);
  // const items = useSelector(selectItems);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredList, setFilteredList] = useState([]);

  const onChangeSearch = (query: string): void => {
    setSearchQuery(query);

    const updatedList = items.filter((item: any) =>
      item?.keyWord?.includes(query),
    );
    setFilteredList(updatedList.length > 0 ? updatedList : []);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: 'white',
        height: windowHeight,
      }}>
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

        <View
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {filteredList?.length > 0 &&
            filteredList.map((item: IItem, index: number) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() =>
                    navigation.navigate(
                      EPath.ITEMDETAILS as never,
                      {
                        item,
                      } as never,
                    )
                  }>
                  <View
                    style={{
                      width: '50%',
                    }}>
                    <OneItem item={item} />
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
        </View>
      </View>
    </ScrollView>
  );
};

export default SearchRoute;
