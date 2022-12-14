/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Text} from 'react-native-paper';
import RNButton from '../../../shared/Button';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectUserData} from '../../../redux/slicers/loginSlice';
import {selectItemData} from '../../../redux/slicers/wishlistSlice';
import OneItem from '../../shopNow/OneItem';
import {IItem} from '../../../shared/models/interfaces/item.interface';
import {EPath} from '../../../shared/models/enums/path.enum';
import RNModal from '../../../shared/Modal';
import RNPicker from '../../../shared/Picker';
import useAddedToBagHook from '../../../shared/hooks/useAddedToBagHook';
import {EItemType} from '../../../shared/models/enums/itemType.enum';
import {useToast} from 'react-native-toast-notifications';

const FavouriteRoute = (): JSX.Element => {
  const navigation = useNavigation();
  const toast = useToast();
  const loggedUserData = useSelector(selectUserData);
  const wishListItemsData = useSelector(selectItemData);
  const addedToBagItemsHandler = useAddedToBagHook();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<null | IItem>(null);

  useFocusEffect(
    useCallback(() => {
      // setPickerValue('');
      setSelectedItem(null);
    }, []),
  );

  const handleSheetClose = () => {
    setSelectedItem(null);
    setIsOpen(false);
    // refRBSheet.current?.close();
  };

  const handlePickerChange = (value: any) => {
    if (selectedItem) {
      addedToBagItemsHandler(selectedItem, value);
      // Alert.alert('', 'Item added successfully');
      setIsOpen(true);
      toast.show('Task finished successfully', {
        type: 'success',
        placement: 'top',
        duration: 4000,
        animationType: 'slide-in',
      });
      // handleSheetClose();
      handleCloseModal();
      console.log('aaaa');
    }
  };

  const handleAddToBag = (item: IItem) => {
    setSelectedItem(item);
    console.log(item.type, 'item.type');
    if (item.type !== EItemType.ONE_SIZE) {
      // handleSheetOpen();
      setIsOpen(true);
    } else {
      addedToBagItemsHandler(item, EItemType.ONE_SIZE);
      toast.show('Task finished successfully', {
        type: 'success',
        placement: 'top',
        duration: 4000,
        animationType: 'slide-in',
      });
      // handleSheetClose();
      handleCloseModal();
    }
  };

  console.log(selectedItem, 'selectedItem');

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  // const handleContinueBtnPress = () => {
  //   navigation.navigate(EPath.SHOPPINGBAG as never);
  //   handleCloseModal();
  // };

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
                      <OneItem item={item} showHeartIcon={true} />
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
      <RNModal
        visible={isOpen}
        modalTitle="Please, sign in to see your bag."
        hideModal={handleSheetClose}>
        <>
          <Text>Select size</Text>
          <RNPicker onChangeCB={handlePickerChange} />
        </>
      </RNModal>
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
  modalItem: {
    flexDirection: 'row',
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
});

export default FavouriteRoute;
