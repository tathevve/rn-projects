/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectBagItemsData} from '../../redux/slicers/shoppingBagSlice';
import {IItem} from '../../shared/models/interfaces/item.interface';
import Line from '../../shared/Line';
import {TouchableOpacity} from 'react-native-gesture-handler';
import OneItem from '../shopNow/OneItem';
import {EPath} from '../../shared/models/enums/path.enum';
import RNButton from '../../shared/Button';
import moment from 'moment';

const Orders = () => {
  const navigation = useNavigation();
  const bagItems = useSelector(selectBagItemsData);
  const getDay = useCallback((days: number) => {
    return moment(new Date(), 'll').add(days, 'days').format('ll');
  }, []);

  const currentDay = useMemo(() => {
    const date = `${getDay(15)} - ${getDay(17)}`;
    return date;
  }, [getDay]);

  const handleRedirect = (item: IItem) => {
    navigation.navigate(
      EPath.ITEMDETAILS as never,
      {
        item,
      } as never,
    );
  };

  return (
    <ScrollView style={styles.root}>
      <View style={styles.rootSection}>
        <IconButton
          icon="arrow-left-thin"
          size={32}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerText}>Active</Text>
        {bagItems.length > 0 ? (
          <View
            style={{
              width: '100%',
            }}>
            {bagItems.map((item: IItem, index: number) => {
              return (
                <View
                  style={{
                    display: 'flex',
                    width: '100%',
                  }}
                  key={index}>
                  <View style={{width: '50%'}}>
                    <OneItem item={item} customStyles={styles.item} />
                  </View>
                  <Line />
                </View>
              );
            })}
            <Text style={styles.itemText}>Get it between {currentDay}</Text>
          </View>
        ) : (
          <View style={styles.noActiveOrderSection}>
            <Text style={styles.boldText}>Nothing to see here</Text>
            <Text style={styles.description}>
              Keep tracks of your orders and returns here when you shop
            </Text>
            <RNButton
              title="Shop Now"
              onPress={() => navigation.navigate(EPath.ALLITEMS as never)}
              buttonStyle={styles.editButton}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Orders;

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    width: '100%',
  },
  rootSection: {
    zIndex: 2,
    marginHorizontal: 17,
    fontFamily: 'Mulish',
    paddingRight: 10,
    width: ' 90%',
  },
  headerText: {
    fontSize: 17,
    color: 'black',
    textDecorationLine: 'underline',
  },
  item: {
    flexDirection: 'row',
    width: '100%',
  },
  boldText: {
    fontWeight: '900',
    fontSize: 23,
    fontFamily: 'Mulish',
    color: 'black',
  },
  description: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  editButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '25%',
    height: 38,
    marginTop: 10,
    borderStyle: 'solid',
    marginBottom: 15,
  },
  noActiveOrderSection: {
    flex: 1,
    marginTop: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 13,
  },
  itemText: {
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    width: ' 100%',
  },
});
