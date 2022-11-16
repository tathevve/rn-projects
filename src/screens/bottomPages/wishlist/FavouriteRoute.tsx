/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import RNButton from '../../../shared/Button';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {selectUserData} from '../../../redux/slicers/loginSlice';
import {selectItemData} from '../../../redux/slicers/wishlistSlice';
import OneItem from '../../shopNow/OneItem';
import {IItem} from '../../../shared/models/interfaces/item.interface';
import {AppDispatch} from '../../../redux';
import {
  selectBagItemsData,
  selectTotalPrice,
  setItemsTotalPrice,
} from '../../../redux/slicers/shoppingBagSlice';
import {setBagItemsData} from '../../../redux/slicers/shoppingBagSlice';
import {EPath} from '../../../shared/models/enums/path.enum';

const FavouriteRoute = (): JSX.Element => {
  const navigation = useNavigation();
  const loggedUserData = useSelector(selectUserData);
  const wishListItemsData = useSelector(selectItemData);
  const dispatch = useDispatch<AppDispatch>();
  const bagItems = useSelector(selectBagItemsData);
  const totalPrice = useSelector(selectTotalPrice);

  const addedToBagItemsHandler = (item: IItem) => {
    let totalOf = totalPrice + item.price;
    const findedData = bagItems.find((i: IItem) => i.id === item.id);
    if (findedData) {
      const updatedList = bagItems.map((i: IItem) => {
        return {
          ...i,
          count: findedData.id === i.id ? findedData.count + 1 : i.count,
        };
      });
      dispatch(setBagItemsData(updatedList));
    } else {
      dispatch(setBagItemsData([...bagItems, {...item, count: 1}]));
    }
    dispatch(setItemsTotalPrice(totalOf));
  };

  console.log(bagItems, 'bagItems');

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: 'white',
        flexGrow: 1,
      }}>
      <View
        style={{
          marginLeft: 17,
          marginRight: 17,
          paddingBottom: 50,
        }}>
        <View style={styles.typesOfSections}>
          <Text style={styles.typesText}>
            WISHLIST
            {wishListItemsData?.length === 0 ? (
              ''
            ) : (
              <Text> ({wishListItemsData.length})</Text>
            )}
          </Text>
        </View>
        {loggedUserData?.name ? (
          wishListItemsData?.length === 0 ? (
            <View>
              <View style={styles.itemsCount}>
                <Text>{wishListItemsData?.length} ITEMS</Text>
              </View>

              <View>
                <Text style={styles.text}>YOUR WISHLIST IS EMPTY</Text>
              </View>
              <Text style={styles.text}>
                When you favorite items you love, you’ll find them here
              </Text>
            </View>
          ) : (
            <View
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              {wishListItemsData.map((item: IItem, index: number) => {
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
                    }}>
                    <OneItem
                      id={item.id}
                      season={item.season}
                      image={item.image}
                      brand={item.brand}
                      description={item.description}
                      price={item.price}
                      isHearted={item.isHearted}
                      customItemStyles={styles.item}
                    />
                    <RNButton
                      title="Add to bag"
                      onPress={() => addedToBagItemsHandler(item)}
                      buttonStyle={styles.button}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          )
        ) : (
          <Text style={styles.text}>
            Looking for items you previously saved? Sign in to pick up where you
            left off
          </Text>
        )}
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {loggedUserData?.name ? null : (
            <RNButton
              title="Sign In"
              onPress={() => {
                navigation.navigate(EPath.SIGNIN as never);
              }}
              buttonStyle={styles.button}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  typesOfSections: {
    marginTop: 25,
    marginBottom: 13,
  },
  typesText: {
    fontWeight: '900',
    fontSize: 18,
    fontFamily: 'Mulish',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  itemsCount: {
    marginBottom: 25,
  },
  text: {
    marginBottom: 15,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '90%',
    height: 35,
    marginTop: 45,
    borderStyle: 'solid',
    color: 'black',
    marginBottom: 15,
  },
  item: {
    display: 'flex',
  },
});

export default FavouriteRoute;
