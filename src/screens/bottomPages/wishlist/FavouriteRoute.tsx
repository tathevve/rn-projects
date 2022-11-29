/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {Text} from 'react-native-paper';
import RNButton from '../../../shared/Button';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectUserData} from '../../../redux/slicers/loginSlice';
import {selectItemData} from '../../../redux/slicers/wishlistSlice';
import OneItem from '../../shopNow/OneItem';
import {IItem} from '../../../shared/models/interfaces/item.interface';
import {EPath} from '../../../shared/models/enums/path.enum';
import RBSheet from 'react-native-raw-bottom-sheet';
import RNPicker from '../../../shared/Picker';
import useAddedToBagHook from '../../../shared/hooks/useAddedToBagHook';
import {EItemType} from '../../../shared/models/enums/itemType.enum';

const FavouriteRoute = (): JSX.Element => {
  const navigation = useNavigation();
  const loggedUserData = useSelector(selectUserData);
  const wishListItemsData = useSelector(selectItemData);
  // const bagItemsData = useSelector(selectBagItemsData);
  const refRBSheet = useRef<any>();
  const addedToBagItemsHandler = useAddedToBagHook();
  // const [selectedItem, setSelectedItem] = useState<null | IItem>(null);
  const [selectedItem, setSelectedItem] = useState<null | IItem>(null);

  useFocusEffect(
    useCallback(() => {
      // setPickerValue('');
      setSelectedItem(null);
    }, []),
  );

  const handlePickerChange = (value: any) => {
    // setPickerValue(value);
    if (selectedItem) {
      addedToBagItemsHandler(selectedItem, value);
    }
  };

  // console.log(bagItemsData, 'bagItemsData');

  const handleSheetOpen = () => {
    refRBSheet.current?.open();
  };

  const handleAddToBag = (item: IItem) => {
    setSelectedItem(item);
    if (item.type !== EItemType.ONE_SIZE) {
      handleSheetOpen();
    } else {
      addedToBagItemsHandler(item, EItemType.ONE_SIZE);
    }
  };

  const handleSheetClose = () => {
    setSelectedItem(null);
  };

  console.log(selectedItem, 'selectedItem');

  return (
    <>
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
                        paddingLeft: 1,
                      }}>
                      <OneItem
                        item={item}
                        customStyles={styles.item}
                        showHeartIcon={true}
                      />
                      <RNButton
                        title="Add to bag"
                        onPress={() => handleAddToBag(item)}
                        buttonStyle={styles.button}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            )
          ) : (
            <Text style={styles.text}>
              Looking for items you previously saved? Sign in to pick up where
              you left off
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
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown
        onClose={handleSheetClose}
        closeOnPressMask
        animationType="slide"
        openDuration={450}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          container: {
            backgroundColor: 'white',
            height: 300,
          },
        }}>
        <>
          <Text>Select size</Text>
          <RNPicker onChangeCB={handlePickerChange} />
        </>
      </RBSheet>
    </>
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
