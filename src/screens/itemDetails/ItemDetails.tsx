/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import ItemSlider from './ItemSlider';
import {useDispatch, useSelector} from 'react-redux';
import {selectItems} from '../../redux/slicers/allItemsSlice';
import {IItem} from '../../shared/models/interfaces/item.interface';
import ContactUs from '../../shared/ContactUs';
import {EPath} from '../../shared/models/enums/path.enum';
import RNPicker from '../../shared/Picker';
import RNAccordion from '../../shared/Accordion';
import RNButton from '../../shared/Button';
import useAddedToBagHook from '../../shared/hooks/useAddedToBagHook';
import RBSheet from 'react-native-raw-bottom-sheet';
import {AppDispatch} from '../../redux';
import {
  selectBagItemsData,
  setBagItemsData,
} from '../../redux/slicers/shoppingBagSlice';
import {EItemType} from '../../shared/models/enums/itemType.enum';

const ItemDetails = ({route}: any): JSX.Element => {
  const itemParams = route.params;
  const navigation = useNavigation();
  const items = useSelector(selectItems);
  const bagItemsData = useSelector(selectBagItemsData);
  const refRBSheet = useRef<any>();
  const dispatch = useDispatch<AppDispatch>();
  const [selectedItem, setSelectedItem] = useState<null | IItem>(null);
  const [pickerValue, setPickerValue] = useState<string>('');
  const addedToBagItemsHandler = useAddedToBagHook();

  const addToBag = (item: IItem) => {
    setSelectedItem(item);
    addedToBagItemsHandler(
      item,
      item.type !== EItemType.ONE_SIZE ? handleSheetOpen : undefined,
    );
  };
  const findItemDetail = items.find((i: IItem) => i.id === itemParams.item.id);

  const handleSheetOpen = () => {
    refRBSheet.current?.open();
  };
  const handlePickerChange = (value: any) => {
    setPickerValue(value);
    const updatedData = bagItemsData.map((item: IItem) => {
      if (item.id === selectedItem?.id) {
        return {
          ...item,
          size: value,
        };
      } else {
        return item;
      }
    });
    dispatch(setBagItemsData(updatedData));
  };

  const handleSheetClose = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <ScrollView
        style={{
          backgroundColor: 'white',
          position: 'relative',
        }}>
        <View style={{marginHorizontal: 17}}>
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
                    findItemDetail,
                  } as never,
                )
              }>
              <Text style={{textAlign: 'center'}}>View size guide</Text>
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
              <Text style={{textAlign: 'center'}}>Size missing?</Text>
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
          />
          <ContactUs />
        </View>
      </ScrollView>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown
        closeOnPressMask
        onClose={handleSheetClose}
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
          <RNPicker
            disabled={findItemDetail?.type === EItemType.ONE_SIZE}
            onChangeCB={handlePickerChange}
            pickerValue={pickerValue}
          />
        </>
      </RBSheet>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '100%',
    height: 35,
    marginTop: 45,
    borderStyle: 'solid',
    color: 'black',
    marginBottom: 15,
  },
});

export default ItemDetails;
