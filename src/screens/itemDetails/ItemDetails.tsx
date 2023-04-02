/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import React, { useCallback, useMemo, useState } from 'react';
import { IconButton } from 'react-native-paper';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import ItemSlider from './ItemSlider';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems, setItems } from '../../redux/slicers/allItemsSlice';
import { IItem } from '../../shared/models/interfaces/item.interface';
import ContactUs from '../../shared/ContactUs';
import { EPath } from '../../shared/models/enums/path.enum';
import RNPicker from '../../shared/Picker';
import RNAccordion from '../../shared/Accordion';
import RNButton from '../../shared/Button';
import useAddedToBagHook from '../../shared/hooks/useAddedToBagHook';
import { EItemType } from '../../shared/models/enums/itemType.enum';
import RNModal from '../../shared/Modal';
import OneItem from '../shopNow/OneItem';
import { AppDispatch } from '../../redux';
import { selectItemData, setItemData } from '../../redux/slicers/wishlistSlice';
import { selectUserData } from '../../redux/slicers/loginSlice';

const ItemDetails = ({ route }: any): JSX.Element => {
  const itemParams = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector(selectItems);
  const [pickerValue, setPickerValue] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const addedToBagItemsHandler = useAddedToBagHook();
  const wishListItemsData = useSelector(selectItemData);
  const allItemsData = useSelector(selectItems);
  const loggedUserData = useSelector(selectUserData);

  console.log(loggedUserData, 'logged')


  useFocusEffect(
    useCallback(() => {
      setPickerValue('');
    }, []),
  );

  const findItemDetail = useMemo(() => {
    return items.find((i: IItem) => i.id === itemParams?.item?.id);
  }, [itemParams?.item, items]);

  const addToBag = (item: IItem) => {
    if (item.type !== EItemType.ONE_SIZE && !pickerValue) {
      Alert.alert('', 'Please, select your size.');
    } else {
      addedToBagItemsHandler(item, pickerValue);
      setIsOpen(true);
    }
  };

  const handlePickerChange = (value: any) => {
    setPickerValue(value);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleContinueBtnPress = () => {
    if (loggedUserData) {
      navigation.navigate(EPath.SHOPPINGBAG as never);
    } else {

    }
    handleCloseModal();
  };

  const heartedItemsHandler = () => {
    const findedHeartedData = wishListItemsData.find(
      (i: IItem) => i.id === itemParams?.item?.id,
    );
    const findedHeartedDataInAllItems = allItemsData.find(
      (i: IItem) => i.id === itemParams?.item?.id,
    );

    if (findedHeartedData) {
      dispatch(
        setItemData(
          wishListItemsData.filter((i: IItem) => i.id !== findedHeartedData.id),
        ),
      );
      dispatch(
        setItems(
          allItemsData.map((i: IItem) =>
            i.id === findedHeartedDataInAllItems.id
              ? { ...i, isHearted: false }
              : i,
          ),
        ),
      );
    } else {
      dispatch(
        setItemData([
          ...wishListItemsData,
          { ...itemParams.item, isHearted: true },
        ]),
      );

      dispatch(
        setItems(
          allItemsData.map((i: IItem) =>
            i.id === findedHeartedDataInAllItems.id
              ? { ...i, isHearted: true }
              : i,
          ),
        ),
      );
    }
  };

  return (
    <>
      <ScrollView
        style={{
          backgroundColor: 'white',
          position: 'relative',
        }}>
        <View style={{ marginHorizontal: 17 }}>
          <IconButton
            icon="arrow-left-thin"
            // iconColor={MD3Colors.error50}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: 30,
              width: 30,
              zIndex: 2,
            }}
            onPress={() => navigation.goBack()}
          />

          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <IconButton
              icon={findItemDetail.isHearted ? 'heart' : 'heart-outline'}
              style={styles.heartedStyle}
              onPress={heartedItemsHandler}
            />
            <Text>{findItemDetail.brand}</Text>
            <ItemSlider sliderData={findItemDetail.imagesArray} height={300} />
            <Text> {findItemDetail.season}</Text>
            <Text>{findItemDetail.brand} </Text>
            <Text>{findItemDetail.description}</Text>
            <Text>{findItemDetail.price}</Text>
          </View>

          <RNPicker
            pickerValue={pickerValue}
            disabled={findItemDetail?.type === EItemType.ONE_SIZE}
            onChangeCB={handlePickerChange}
          />
          <View
            style={{
              display: 'flex',
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                width: '40%',
                borderBottomWidth: 1,
                borderBottomColor: 'black',
                paddingBottom: 10,
              }}
              onPress={() =>
                navigation.navigate(
                  EPath.SIZEGUIDE as never,
                  {
                    item: findItemDetail,
                  } as never,
                )
              }>
              <Text style={{ textAlign: 'center' }}>View size guide</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '40%',
                borderBottomWidth: 1,
                borderBottomColor: 'black',
                paddingBottom: 10,
                // backgroundColor: 'white',
              }}
              onPress={() => console.log('bbb')}>
              <Text style={{ textAlign: 'center' }}>Size missing?</Text>
            </TouchableOpacity>
          </View>
          <View>
            <RNAccordion accordionTitle="Size & Fit">
              <Text>
                We've sent an email to the address provided. Can't find it?
                Check your junk folder.
              </Text>
            </RNAccordion>
            <RNAccordion accordionTitle="Composition & Care">
              <Text>
                We've sent an email to the address provided. Can't find it?
                Check your junk folder.
              </Text>
            </RNAccordion>
            <RNAccordion accordionTitle="Delivery & Returns">
              <Text>
                We've sent an email to the address provided. Can't find it?
                Check your junk folder.
              </Text>
            </RNAccordion>
          </View>
          <RNButton
            title="Add to bag"
            onPress={() => addToBag(findItemDetail)}
            buttonStyle={styles.button}
            textStyle={styles.textBtn}
          />
          <ContactUs />
        </View>
      </ScrollView>
      {loggedUserData ? isOpen && (
        <RNModal
          visible={isOpen}
          hideModal={handleCloseModal}
          modalTitle="Added to Bag">
          <View>
            <View style={{ width: '50%' }}>
              <OneItem item={findItemDetail} customStyles={styles.item} />
            </View>
            <View>
              <RNButton
                title="Go to bag"
                onPress={handleContinueBtnPress}
                buttonStyle={styles.button}
                textStyle={styles.textBtn}
              />
            </View>
          </View>
        </RNModal>
      ) : <RNModal
        visible={isOpen}
        hideModal={() => setIsOpen(false)}
        modalTitle="Please, sign in to see your bag.">
        <View>
          <View>
            <RNButton
              title="Sign In"
              onPress={() => {
                navigation.navigate(EPath.SIGNIN as never);
                handleCloseModal();
              }}
              buttonStyle={styles.button}
              textStyle={styles.textBtn}
            />
          </View>
        </View>
      </RNModal>}
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '100%',
    height: 35,
    marginTop: 45,
    borderStyle: 'solid',
    // color: 'black',
    marginBottom: 15,
  },
  textBtn: { color: 'white' },
  item: {
    flexDirection: 'row',
  },
  heartedStyle: {
    position: 'absolute',
    top: 12,
    right: 12,
    height: 22,
    width: 22,
    zIndex: 2,
  },
});

export default ItemDetails;
