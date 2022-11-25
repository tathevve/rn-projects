/* eslint-disable react-native/no-inline-styles */
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IItem} from '../../shared/models/interfaces/item.interface';
import {useNavigation} from '@react-navigation/native';
import OneItem from '../shopNow/OneItem';
import {
  selectBagItemsData,
  selectTotalPrice,
  setBagItemsData,
  setItemsTotalPrice,
} from '../../redux/slicers/shoppingBagSlice';
import {EPath} from '../../shared/models/enums/path.enum';
import {IconButton} from 'react-native-paper';
import ContactUs from '../../shared/ContactUs';
import {AppDispatch} from '../../redux';
import TextInputField from '../../shared/TextInput/TextInputField';
import {FormProvider, useForm} from 'react-hook-form';
import {EItemType} from '../../shared/models/enums/itemType.enum';
import RNPicker from '../../shared/Picker';

interface ICount {
  count: string | number;
}

const ShoppingBag = (): JSX.Element => {
  const navigation = useNavigation();
  // const wishListItemsData = useSelector(selectItemData);
  const bagItemsData = useSelector(selectBagItemsData);
  const dispatch = useDispatch<AppDispatch>();
  const totalPrice = useSelector(selectTotalPrice);
  const methods = useForm<ICount>({
    mode: 'all',
  });

  const {control} = methods;
  console.log(bagItemsData, 'asjdk');
  const removeItemFromBag = (item: IItem) => {
    const totalOf = totalPrice - Number(item.price);
    if (item.count && item.count > 1) {
      const updatedData = bagItemsData.map((i: IItem) => {
        return {
          ...i,
          count: i.count && i.id === item.id ? i.count - 1 : i.count,
        };
      });
      dispatch(setBagItemsData(updatedData));
    } else {
      const filteredItemsData = bagItemsData.filter(
        (i: IItem) => i.id !== item.id,
      );
      dispatch(setBagItemsData(filteredItemsData));
    }
    dispatch(setItemsTotalPrice(totalOf));
  };

  const handlePickerChange = (value: any, item: IItem) => {
    const updatedData = bagItemsData.map((i: IItem) => {
      if (i.id === item?.id) {
        return {
          ...i,
          size: value,
        };
      } else {
        return i;
      }
    });
    dispatch(setBagItemsData(updatedData));
  };

  // const handleRefClick = (id: number) => {
  //   const findedData = bagItemsData?.find((item) => item.id === id)
  //    inputRef?.current?.focus();
  // };

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View
        style={{
          position: 'relative',
          // height: 25,
          zIndex: 2,
          marginHorizontal: 17,
        }}>
        <IconButton
          icon="arrow-left-thin"
          // style={{
          //   height: 20,
          // }}
          size={32}
          onPress={() => navigation.goBack()}
        />

        <View style={styles.typesOfSections}>
          <Text style={styles.typesText}>
            SHOPPING BAG
            {bagItemsData?.length === 0 ? (
              ''
            ) : (
              <Text> ({bagItemsData.length})</Text>
            )}
          </Text>
        </View>
        {bagItemsData?.length === 0 ? (
          <View>
            <View style={styles.itemsCount}>
              <Text>{bagItemsData?.length} ITEMS</Text>
            </View>

            <View>
              <Text style={styles.text}>YOUR BAG IS EMPTY</Text>
              <Text style={styles.text}>
                When you favorite items you love, you’ll find them here
              </Text>
            </View>
          </View>
        ) : (
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.text}> Total </Text>
              <Text style={styles.text}> {totalPrice} </Text>
            </View>
          </View>
        )}

        <View
          style={{
            width: '100%',
            paddingBottom: 100,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          <FormProvider {...methods}>
            {bagItemsData.map((item: IItem, index: number) => {
              return (
                <View
                  style={{
                    display: 'flex',
                    width: '100%',
                    // height: "40%",
                    flexDirection: 'row-reverse',
                    marginBottom: 35,
                  }}
                  key={index}>
                  <IconButton
                    icon="close"
                    style={{
                      width: '10%',
                      // backgroundColor: 'grey',
                      // position: 'absolute',
                      // top: 35,
                      // right: 0,
                      // height: 30,
                      // width: 30,
                      // zIndex: 2,
                    }}
                    size={25}
                    onPress={() => removeItemFromBag(item)}
                  />
                  <View
                    style={{
                      width: '90%',
                    }}>
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
                      <OneItem item={item} customStyles={styles.item} />
                    </TouchableOpacity>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '70%',
                        marginTop: -25,
                        marginLeft: 120,
                        // height: 300,
                        justifyContent: 'flex-start',
                        // alignItems: 'flex-start',
                      }}>
                      <View
                        style={{
                          backgroundColor: 'white',
                          // marginTop: 15,
                          // marginLeft: -13,
                          width: '80%',
                          position: 'relative',
                        }}>
                        <Text
                          style={{
                            position: 'absolute',
                            top: 18,
                            left: 9,
                            height: 30,
                            width: 28,
                            zIndex: 2,
                            fontSize: 12,
                          }}>
                          Qty:
                        </Text>

                        <TextInputField
                          // placeholder="Count"
                          name="quantity"
                          // inputRef={inputRef}
                          customValue={item.count}
                          labelIsVisible
                          secureTextEntry
                          control={control}
                          props={{maxLength: 3}}
                          customInputStyles={styles.input}
                        />
                      </View>
                      <View
                        style={{
                          backgroundColor: 'white',
                          // marginTop: 15,
                          marginLeft: -80,
                          width: '100%',
                          position: 'relative',
                        }}>
                        <Text
                          style={{
                            position: 'absolute',
                            top: 20,
                            left: 9,
                            height: 30,
                            width: 28,
                            zIndex: 2,
                            fontSize: 12,
                          }}>
                          Size:
                        </Text>

                        <RNPicker
                          disabled={item?.type === EItemType.ONE_SIZE}
                          onChangeCB={value => handlePickerChange(value, item)}
                          pickerValue={item.size}
                          placeholder={
                            item.size === EItemType.ONE_SIZE
                              ? 'ONE_SIZE'
                              : undefined
                          }
                          customStyles={styles.picker}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
          </FormProvider>
        </View>
        <ContactUs />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  typesOfSections: {
    marginTop: 25,
    marginBottom: 13,
  },
  itemsCount: {
    marginBottom: 25,
  },
  text: {
    marginBottom: 15,
    fontWeight: 'bold',
  },
  typesText: {
    fontWeight: '900',
    fontSize: 18,
    fontFamily: 'Mulish',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  input: {
    marginBottom: 30,
    width: '45%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 7,
    paddingLeft: 45,
  },
  item: {
    flexDirection: 'row',
  },
  picker: {
    // height: '33%',
    width: '65%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 7,
    paddingLeft: 25,
  },
});

export default ShoppingBag;
