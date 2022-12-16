import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import {useSelector} from 'react-redux';
import {selectBagItemsData} from '../../../redux/slicers/shoppingBagSlice';
import {IItem} from '../../../shared/models/interfaces/item.interface';
import OneItem from '../../shopNow/OneItem';
import moment from 'moment';

const DeliveryMethod = () => {
  const bagItems = useSelector(selectBagItemsData);
  console.log(bagItems, 'bagItems');

  const getDay = useCallback((days: number) => {
    return moment(new Date(), 'll').add(days, 'days').format('ll');
  }, []);

  const currentDay = useMemo(() => {
    const date = `${getDay(15)} - ${getDay(17)}`;
    return date;
  }, [getDay]);

  console.log(currentDay, 'currentDay');

  return (
    <ScrollView style={styles.root}>
      <View style={styles.container}>
        <Text>Your Shipping Options</Text>
        {bagItems?.map((item: IItem, index: number) => {
          return (
            <View key={index} style={styles.itemContainer}>
              <OneItem item={item} customStyles={styles.item} />
              <Text>Get it between {currentDay}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    paddingHorizontal: 17,
  },
  container: {},
  item: {
    flexDirection: 'row',
  },
  itemContainer: {
    width: '50%',
  },
});

export default DeliveryMethod;
