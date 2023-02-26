/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import {useSelector} from 'react-redux';
import {
  selectBagItemsData,
  selectTotalPrice,
} from '../../../redux/slicers/shoppingBagSlice';
import {IItem} from '../../../shared/models/interfaces/item.interface';
import OneItem from '../../shopNow/OneItem';
import moment from 'moment';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import RNButton from '../../../shared/Button';
import {EPath} from '../../../shared/models/enums/path.enum';

const DeliveryMethod = () => {
  const bagItems = useSelector(selectBagItemsData);
  const navigation = useNavigation();
  const totalPrice = useSelector(selectTotalPrice);
  const getDay = useCallback((days: number) => {
    return moment(new Date(), 'll').add(days, 'days').format('ll');
  }, []);

  const currentDay = useMemo(() => {
    const date = `${getDay(15)} - ${getDay(17)}`;
    return date;
  }, [getDay]);

  console.log(bagItems, 'bagItem');

  const handleSubmitAddress = (formData: IShippingAddress) => {
    console.log('formData', formData);
    // dispatch(setShippingData(formData));
    navigation.navigate(EPath.CHECKOUT as never);
  };

  return (
    <ScrollView style={styles.root}>
      <View
        style={{
          marginHorizontal: 17,
          height:
            bagItems.length > 1 ? '' : Dimensions.get('window').height - 120,
        }}>
        <View style={{flex: 1}}>
          <IconButton
            icon="arrow-left-thin"
            size={32}
            onPress={() => navigation.goBack()}
          />
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={styles.typesText}>Your Shipping Options</Text>
              {bagItems?.map((item: IItem, index: number) => {
                return (
                  <View key={index}>
                    <View style={styles.itemContainer}>
                      <OneItem
                        item={item}
                        customStyles={styles.item}
                        showSizeAndQty
                      />
                    </View>
                  </View>
                );
              })}
            </View>
            <Text style={styles.itemText}>Get it between {currentDay}</Text>
            <View
              style={{
                marginHorizontal: 17,
                marginTop: 10,
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text style={{fontWeight: 'bold', color: 'black'}}>Total:</Text>
              <Text style={{color: 'black'}}>${totalPrice}</Text>
            </View>
          </View>
          <RNButton
            title="Save And Continue"
            onPress={handleSubmitAddress}
            buttonStyle={styles.button}
            textStyle={styles.btnText}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    // height: Dimensions.get('window').height,
  },
  typesText: {
    fontWeight: '900',
    fontSize: 18,
    fontFamily: 'Mulish',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  item: {
    flexDirection: 'row',
  },
  itemContainer: {
    width: '50%',
  },
  itemText: {
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    width: ' 100%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '100%',
    height: 35,
    marginTop: 35,
    borderStyle: 'solid',
    marginBottom: 5,
  },
  btnText: {
    color: 'white',
  },
});

export default DeliveryMethod;
